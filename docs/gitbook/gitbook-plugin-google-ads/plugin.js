require(['gitbook'], function(gitbook) {
    gitbook.events.bind("start", function(e, pluginConfig) {
        config = pluginConfig['google-ads'].ads;
        firstConfig = config[0]
        firstClient = firstConfig.client

        // init script
        var adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.setAttribute('crosssorigin', "anonymous");
        adScript.setAttribute('data-ad-client', firstClient);
        document.head.appendChild(adScript);

        // add google analytic tag
        var gaScript1 = document.createElement('script');
        gaScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-3GJMC6HG52";
        document.head.appendChild(gaScript1);

        var gaScript2 = document.createElement('script');
        let code = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-3GJMC6HG52');`;
        gaScript2.innerText = code;
        document.head.appendChild(gaScript2);


    });
});
