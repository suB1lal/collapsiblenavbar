document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.querySelector(".close-icon");
    const openIcon = document.querySelector(".open-icon");
    const nav = document.getElementById("myNav");

    closeIcon.addEventListener("click", function() {
        nav.style.display = "none"; // Menüyü gizle
        openIcon.style.display = "block"; // Açma ikonunu göster
    });

    openIcon.addEventListener("click", function() {
        nav.style.display = "block"; // Menüyü göster
        openIcon.style.display = "none"; // Açma ikonunu gizle
    });
});

