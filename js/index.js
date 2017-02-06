window.addEventListener('resize',
    function() {
        var size = window.innerWidth;
        if (size <= 899) {
            mockUp.src = 'img/portfolio/mockup_mysite_mobile.png';
        }
    }
);

leftRun.addEventListener('click', function(){timer(3)});
rightRun.addEventListener('click', function(){timer(4)});

function timer(to){
    var start = Date.now(), positionProject = 0;
    var timer = setInterval(
        function (){
            var out = Date.now() - start;
            if (out >= 900) {
                clearInterval(timer);
                return;
            }
            animate(900/out,to, positionProject);
        }
    , 20);
}

function animate(out, to, positionProject){
    var top, size = window.innerWidth, project = document.getElementsByClassName('project');
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
        case 3:
            if (positionProject-1 >= 0){
                run.scrollLeft -= (project[positionProject].width-project[positionProject-1].width)/out;
                positionProject--;
            }
        break;
        case 4:
            if (positionProject+1 < project.length){
                run.scrollLeft += (project[positionProject+1].width-project[positionProject].width)/out;
                positionProject++;
            }
        break;
    }
    if (to < 3) {
        var y = window.scrollY;
        if(y < top) {
            window.scrollTo(0, y+((top-y)/out));
        } else {
            window.scrollTo(0, y-((y-top)/out));}
    }
}