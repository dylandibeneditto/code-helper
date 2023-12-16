export default class DynamicLayout {
    constructor(container, divider, direction, currentSplit) {
        this.container = container
        this.divider = divider
        this.direction = direction
        this.currentSplit = currentSplit
        this.active = false;
        
        if(this.direction == "horizontal") {
            this.container.style.gridTemplateColumns = currentSplit.join(" ");
            console.log(this.container.style.gridTemplateColumns)
        } else {
            this.container.style.gridTemplateRows = currentSplit.join(" ");
        }
        
        document.addEventListener("mousemove", (e)=> {
            if(this.active) {
            }
        })

        this.divider.addEventListener("mousedown", ()=> {
            this.active = true;
        })

        document.addEventListener("mouseup", ()=> {
            this.active = false;
        })
    }
}