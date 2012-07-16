(function() {
    var className = 'l';

    document.body.addEventListener('DOMNodeInserted', function() {
        if (document.getElementsByClassName(className)) {
            var links = document.getElementsByClassName(className);
            for (var i=0,il=links.length; i<il; i++) {
                links[i].removeAttribute('onmousedown');
            }
        }
    });
})();