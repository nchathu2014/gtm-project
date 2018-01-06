
let GTMService = function(tag,dl){

    let gtm_script = (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script',dl,tag);



    /*
    * <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<script type="text/javascript" src="helper.js"></script>

    * */


     function createGTMBodyScript(){
         let head= document.getElementsByTagName('body')[0];
         let noscript= document.createElement('noscript');
         head.appendChild(noscript);
     }

    let gtm_body_script = ""

   // let message = `GTM Service initiated.....!! ${gtm_tag} ${dataLayer}`;


    return gtm_script;
}