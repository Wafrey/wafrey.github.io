(function () {

    let preload = document.getElementById('preload')
    let content = document.getElementById('content')
    let loading = 0
    let id = setInterval(frame, 64)

    content.style.visibility = 'hidden'

    function frame() {
        if (loading === 70) {
            clearInterval(id);
            preload.style.display = 'none'
            content.style.visibility = 'visible'
        } else {
            loading += 2;
        }
    }
})();