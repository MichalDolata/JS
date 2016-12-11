/**
 * Created by preb on 11.12.16.
 */
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", function() {
        panel.classList.toggle("open");
    }));

panels.forEach(panel => panel.addEventListener("transitionend", function(e) {
    if(e.propertyName.includes("flex") && panel.classList.contains("open")) {
        panel.classList.add("active");
    } else if(e.propertyName.includes("flex") && !panel.classList.contains("open")) {
        panel.classList.remove("active");
    }
}));