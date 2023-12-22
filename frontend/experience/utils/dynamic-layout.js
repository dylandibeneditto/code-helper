export default class DynamicLayout {
    constructor(container, divider, direction, minMax) {
        this.container = container
        this.divider = divider
        this.direction = direction
        this.min = minMax[0];
        this.max = minMax[1];
        
        this.currentSplit = this.min
        this.active = false;

        this.csize;
        
        this.resize()

        this.displaySplit()

        this.container.addEventListener("mousemove", (e) => {
            if (this.active) {
                this.currentSplit = e.clientX;
                this.displaySplit();
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

    displaySplit() {
        const newSplit = Math.min(Math.max((((this.currentSplit-18)/this.csize)*100),this.min),this.max)
        const leftOver = 100-newSplit;
        console.log(newSplit)

        if (this.direction == "horizontal") this.container.style.gridTemplateColumns = `${newSplit}% auto ${leftOver}%`;
        else this.container.style.gridTemplateRows = `${newSplit}% auto ${leftOver}%`;
    }

    resize() {
        if (this.direction == "horizontal") this.csize = this.container.clientWidth;
        else this.csize = this.container.clientHeight;
        console.log(this.csize, this.currentSplit, [this.container])
    }

    suffix(origin, suffix) {
        for (let i = 0; i < origin.length; i++) {
            origin[i] += suffix;
        }
        return origin;
    }
}