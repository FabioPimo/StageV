(function () {
    document.addEventListener("keyup", function (event) {
        if (event.key === "Escape") {
            const ui = document.querySelector(".container");
            if (ui && ui.style.display !== "none") {
                ui.style.display = "none";
                console.log("UI geschlossen (ESC gedrückt).");
            }
        }
    });
})();
