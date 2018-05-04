import pjson from './package.json';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import uglify from 'rollup-plugin-uglify';
import html from 'rollup-plugin-fill-html';
import browsersync from 'rollup-plugin-browsersync';

const isEnvDev = process.env.NODE_ENV === 'development';

export default {
  input: './src/index.ts',
  output: [
    {
      file: `dist/${pjson.name}.js`,
      format: 'iife',
      name: 'lagtm',
      moduleName: 'lagtm',
      sourcemap: isEnvDev ? 'inline' : false,
    },
  ],
  plugins: [
    typescript({
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: 'tsconfig.json',
      tsconfigOverride: { compilerOptions: { declaration: false } },
    }),
    clear({
      targets: ['./dist'],
      watch: true,
    }),
    (isEnvDev ? false : uglify()),
    (isEnvDev ? html({
      template: 'src/index.html',
      inject: 'head',
    }) : false),
    (isEnvDev ? browsersync({
      server: 'dist',
      port: 9000,
      open: false,
      notify: false,
    }) : false),
  ],
};