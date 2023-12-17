export default class DynamicLayout {
    constructor(container, divider, direction, currentSplit) {
        this.container = container
        this.divider = divider
        this.direction = direction
        this.currentSplit = currentSplit
        this.active = false;

        this.currentSplit.suffix = function (suffix) {
            for (let i = 0; i < this.length; i++) {
                console.log(this[i])
                this[i] += suffix;
            }
            return this;
        }



        if (this.direction == "horizontal") {
            this.container.style.gridTemplateColumns = currentSplit.suffix("vw").join(" ");
            console.log(currentSplit)
        } else {
            this.container.style.gridTemplateRows = currentSplit.join(" ");
        }

        document.addEventListener("mousemove", (e) => {
            if (this.active) {
            }
        })

        this.divider.addEventListener("mousedown", () => {
            this.active = true;
        })

        document.addEventListener("mouseup", () => {
            this.active = false;
        })
    }
}