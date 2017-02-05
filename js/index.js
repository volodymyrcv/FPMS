window.addEventListener('resize',
    function() {
        var size = window.innerWidth;
        if (size <= 899) {
            mockUp.src = 'img/portfolio/mockup_mysite_mobile.png';
        }
    }
);
function timer(to){
    var start = Date.now();
    var timer = setInterval(
        function (){
            var out = Date.now() - start;
            if (out >= 900) {
                clearInterval(timer);
                return;
            }
            animate(900/out,to);
        }
    , 20);
}
function animate(out, to){
    var top;
    switch(to){
        case 0:
           top = information.offsetTop;
        break;
        case 1:
            top = portfolio.offsetTop;
        break;
        case 2:
            top = contacts.offsetTop;
        break;
    }
    var y = window.scrollY;
    if(y < top)
    {
        window.scrollTo(0, y+((top-y)/out));
    } else {
        window.scrollTo(0, y-((y-top)/out));
    }
}