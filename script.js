document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("#navbar ul li a");
    let currentPath = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
