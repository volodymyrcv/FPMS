/*
1.Якщо desktop версія, тоді 1 img в portfolio завантажує його версію
2. Карусель
3. Якщо checkbox #autoComplete == true, значення JSON присвоїти формі
*/
window.addEventListener('resize',
    function() {
        if (window.innerWidth <= 899) {
            mockUp.src = 'img/portfolio/mockup_mysite_mobile.png';
        }
    });