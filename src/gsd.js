(function() {
    var className = 'l';

    if (document.getElementsByClassName(className)) {
        var links = document.getElementsByClassName(className);
        for (var i=0,il=links.length; i<il; i++) {
            links[i].removeAttribute('onmousedown');
        }
    }
    
    //TODO: remove redirects from subsequent results pages (2, 3, ect)...listen for a DOM inserted event?   
})();