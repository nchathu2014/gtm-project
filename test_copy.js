function GTMService(){

    /**
     * Initiate the GTM container
     * @param tag
     * @param l
     * @private
     */
    function __initContainer(tag,l){
        console.log(`GTM Successfully initiated: Container: ${tag} created with DataLayer: ${l}`);
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script',l,tag);

    }

    /**
     * Push to DataLayer
     * @param dl
     * @param dataObj
     * @private
     */
    function __pushToDataLayer(dl,dataObj){
        window[dl].push(dataObj)
    }

    /**
     *
     * @param event
     * @param category
     * @param component_name
     * @param error_code
     * @param error_desc
     * @param action_name
     * @private
     */
    function __createDataObject(event,category,component_name,error_code,error_desc,action_name){
        return configureGTMDataObject(event,category,component_name,error_code,error_desc,action_name);
    }

    return{
        createContainer:__initContainer,
        pushToDataLayer:__pushToDataLayer,
        createDataObject:__createDataObject
    }
};


// ================= Global Level Functions ==================================================
/**
 * Common function to configure the data layer object
 * @param event
 * @param category
 * @param component_name
 * @param error_code
 * @param error_desc
 * @param action_name
 * @returns {{}}
 */
function configureGTMDataObject(event,category,component_name,error_code,error_desc,action_name){
    let dataObject={};
    dataObject['event'] = event;
    dataObject['category'] = category;
    dataObject['component_name'] = component_name;
    dataObject['error_code'] = error_code;
    dataObject['error_desc'] = error_desc;
    dataObject['action_name'] = action_name;
    return dataObject;
}

// ================== For Single GTM Container Application ====================================
/**
 * create container
 * @param tag
 * @param dl
 * @returns {*}
 */
GTMService.createContainer = function(tag,dl='dataLayer'){
    return new GTMService().createContainer(tag,dl)
};

/**
 * push to data layer
 * @param dl
 * @param dataObj
 */
GTMService.pushToDataLayer = function(dl='dataLayer',dataObj){
    window[dl].push(dataObj);
};

/**
 *
 * @param event
 * @param category
 * @param component_name
 * @param error_code
 * @param error_desc
 * @param action_name
 */
GTMService.createDataObject = function(event,category,component_name,error_code,error_desc,action_name){
    return configureGTMDataObject(event,category,component_name,error_code,error_desc,action_name);
};
