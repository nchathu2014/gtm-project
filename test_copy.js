function GTMService(){


    function __initContainer(tag,l){
        console.log(`GTM Successfully initiated: Container: ${tag} created with DataLayer: ${l}`);
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script',l,tag);

    }

    function __pushToDataLayer(dl,dataObj){
        window[dl].push(dataObj)
    }

    return{
        createContainer:__initContainer,
        pushToDataLayer:__pushToDataLayer
    }



};

//For Single GTM Container Application
GTMService.createContainer = function(tag,dl='dataLayer'){
    return new GTMService().createContainer(tag,dl)
};


GTMService.pushToDataLayer = function(dl='dataLayer',dataObj){
    window[dl].push(dataObj);
};
