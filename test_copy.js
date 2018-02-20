function LAUILogger(){

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
    function __createDataObject(event,event_src,category,component_name,error_code,error_desc,action_name,section_id,assignment_id,user,env,timestamp){
        return configureGTMDataObject(event,event_src,category,component_name,error_code,error_desc,action_name,section_id,assignment_id,user,env,timestamp);
    }

    return{
        createContainer:__initContainer,
        pushError:__pushToDataLayer,
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
function configureGTMDataObject(event,event_src,category,component_name,error_code,error_desc,action_name,section_id='NULL',assignment_id='NULL',user='NULL',env='NULL',timestamp){
    let dataObject={};
    dataObject['event'] = event;
    dataObject['event_src'] = event_src;
    dataObject['category'] = category;
    dataObject['component_name'] = component_name;
    dataObject['section_id'] = section_id;
    dataObject['error_code'] = error_code;
    dataObject['error_desc'] = error_desc;
    dataObject['action_name'] = action_name;
    dataObject['assignment_id'] = assignment_id;
    dataObject['user'] = user;
    dataObject['env'] = env;
    dataObject['timestamp'] = timestamp;
    return dataObject;
}

// ================== For Single GTM Container Application ====================================
/**
 * create container
 * @param tag
 * @param dl
 * @returns {*}
 */
LAUILogger.createContainer = function(tag,dl='dataLayer'){
    return new GTMService().createContainer(tag,dl)
};

/**
 * push to data layer
 * @param dl
 * @param dataObj
 */
LAUILogger.pushError = function(dl='dataLayer',dataObj){
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
LAUILogger.createDataObject = function(event,event_src,category,component_name,error_code,error_desc,action_name,section_id='NULL',assignment_id='NULL',user='NULL',env='NULL',timestamp) {
    return configureGTMDataObject(event, event_src, category, component_name, error_code, error_desc, action_name, section_id, assignment_id, user, env, timestamp);
}