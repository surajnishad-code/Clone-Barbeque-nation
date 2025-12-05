function showSection(type) {
    document.querySelectorAll(".card-container").forEach(c => c.classList.remove("show"));
    document.getElementById(type).classList.add("show");

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    event.target.classList.add("active");
}
