# gtm-project
GTM learning project

http://unixpapa.com/js/dyna.html
https://www.simoahava.com/analytics/fun-with-google-tag-manager-part-1/


/**
 *
 * @param tag
 * @param l
 * @constructor
 */
function GTMService(tag,l='dataLayer') {

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script',l,tag);

    console.log(`Container: ${tag} ${l}`)

    function _pushToDataLayer() {

    }

    return{
        pushToDataLayer:_pushToDataLayer
    }
}


GTMService.createContainer = function(tag,dl){
    return new GTMService(tag,dl);
};

/*GTMService.pushToDataLayer = function(dataObj,dl){
    window[dl].push(dataObj);
};*/

