/**
 * Created by MichalDolata on 10.12.2016.
 */
const inputs = document.querySelectorAll("#control-panel input");

inputs.forEach(input => input.addEventListener("change", updateProperty));

function updateProperty() {
    const unit = (this.id === "color") ? "" : "px";
    document.documentElement.style.setProperty(`--${this.id}`, this.value + unit, "important");
}