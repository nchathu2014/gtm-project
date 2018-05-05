import path from 'path';
import pjson from './package.json';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import uglify from 'rollup-plugin-uglify';
import html from 'rollup-plugin-fill-html';
import browsersync from 'rollup-plugin-browsersync';
import resolve from 'rollup-plugin-node-resolve';
import license from 'rollup-plugin-license';

const isEnvDev = process.env.NODE_ENV === 'development';

export default {
  input: './src/index.ts',
  output: [
    {
      file: `dist/${pjson.name}.browser.js`,
      format: 'iife',
      name: 'lagtm',
      moduleName: 'lagtm',
      sourcemap: isEnvDev ? 'inline' : false,
    },
    {
      file: `dist/index.js`,
      format: 'umd',
      name: 'lagtm',
      moduleName: 'lagtm',
      sourcemap: isEnvDev ? 'inline' : false,
    },
  ],
  plugins: [
    resolve({
      module: true,
      browser: true,
      extensions: ['.js', '.json'],
      modulesOnly: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      clean: true,
      exclude: ['*.d.ts', '**/*.d.ts', '*.spec.ts', '**/*.spec.ts'],
    }),
    clear({
      targets: ['./dist'],
      watch: true,
    }),
    (isEnvDev ? false : uglify()),
    (isEnvDev ? html({
      template: 'src/index.html',
    }) : false),
    (isEnvDev ? browsersync({
      server: 'dist',
      port: 9000,
      open: false,
      notify: false,
    }) : false),
    license({
      sourceMap: false,
      banner: {
        file: path.join(__dirname, 'license.md'),
        encoding: 'utf-8', // Default is utf-8
      },
    }),
  ],
};