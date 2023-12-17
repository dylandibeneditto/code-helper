export default class DynamicLayout {
    constructor(container, divider, direction, currentSplit) {
        this.container = container
        this.divider = divider
        this.direction = direction
        this.currentSplit = currentSplit
        this.active = false;

        this.csize;



        if (this.direction == "horizontal") {
            this.container.style.gridTemplateColumns = this.suffix(currentSplit, "%").join(" ");
        } else {
            this.container.style.gridTemplateRows = currentSplit.join(" ");
        }

        this.resize()



        this.container.addEventListener("mousemove", (e) => {
            if (this.active) {
                this.currentSplit = this.updateSplit(e.clientX);
                console.log(this.currentSplit)
            }
        })

        this.divider.addEventListener("mousedown", () => {
            this.active = true;
        })

        document.addEventListener("mouseup", () => {
            this.active = false;
        })

        window.addEventListener("resize", () => {
            this.resize();
        })
    }

    resize() {
        if (this.direction == "horizontal") this.csize = this.container.clientHeight;
        else this.csize = this.container.clientWidth;
    }

    updateSplit(pixel) {
        return this.suffix([pixel, " ", this.csize-pixel], 'px')
    }

    suffix(origin, suffix) {
        for (let i = 0; i < origin.length; i++) {
            origin[i] += suffix;
        }
        return origin;
    }
}