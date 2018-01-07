# gtm-project
GTM learning project

http://unixpapa.com/js/dyna.html
https://www.simoahava.com/analytics/fun-with-google-tag-manager-part-1/
https://jonathanmh.com/custom-javascript-trigger-functions-google-tag-manager/


function GTMService(){


    function _initContainer(tag,l){
        console.log(`GTM Successfully initiated: Container: ${tag} created with DataLayer: ${l}`);

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script',l,tag);

    }

    return{
        createContainer:_initContainer
    }

    /*this.createContainer= function(tag,l='dataLayer'){
        _initContainer(tag,l)
    }

    this.pushToDataLayer = function(l,obj){
        window[l].push(obj);
    }*/

};


GTMService.createContainer = function(tag,dl='dataLayer'){
    return new GTMService().createContainer(tag,dl)
};


