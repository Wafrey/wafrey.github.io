(function () {

    let preload = document.getElementById('preload');
    let loading = 0;
    let id = setInterval(frame, 64);

    function frame() {
        if (loading === 70) {
            clearInterval(id);
            window.open('main.html', '_self');
        } else {
            loading += 2;
            if (loading==60) {
                preload.style.animation='fadeout 1s ease'
            }
        }
    }
})();