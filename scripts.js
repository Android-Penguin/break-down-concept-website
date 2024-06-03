let threshold = 20
let header = document.getElementById("header-container")
if (header.classList.contains("home")) {
    threshold = 700
}


window.addEventListener('scroll', function () {
    if (window.scrollY > threshold) {
        document.getElementById("nav-container").classList.add("is-pinned")
    } else {
        document.getElementById("nav-container").classList.remove("is-pinned")
    }
})