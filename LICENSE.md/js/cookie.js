window.WRP={
    parameters: {
        'wrp_cookiename':'wdata',
        'wrp_domain': '.loveplanet.ru'
    }
};
(function() {
    var wrps = document.createElement('script');
    wrps.type = 'text/javascript';
    wrps.async = true;
    wrps.src = ('https:'==document.location.protocol?'https://':'http://')+'static.weborama.io/55f2d480c45e069671dc5849.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wrps, s);
})();