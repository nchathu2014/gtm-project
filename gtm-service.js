

function GTMService(tag,l='dataLayer') {

    try{
        if(tag){
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', l, tag);

        }else{
            console.error("GTM tag is not defined");
        }
    }catch(err){
        console.error("GTM initialization error");
    }
};

GTMService.prototype.pushToDataLayer = function(){
  console.log("######################################HHH")
};


    /*
    * <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

*/