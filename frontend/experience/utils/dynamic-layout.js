export default class DynamicLayout {
    constructor(leftOrTop, rightOrBottom, divider, direction, currentSplit) {
        this.left, this.right, this.divider, this.dir, this.currentSplit = [leftOrTop, rightOrBottom, divider, direction, currentSplit]
        
    }
}