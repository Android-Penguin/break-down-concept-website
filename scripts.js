window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        document.getElementById("nav-container").classList.add("is-pinned")
    } else if (window.scrollY == 0) {
        document.getElementById("nav-container").classList.remove("is-pinned")
    }
})