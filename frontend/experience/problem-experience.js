//utils
import DynamicLayout from './utils/dynamic-layout.js';

//dedicated classes
import ProblemRunner from './problem-runner.js'

export default class ProblemExperience {
    static instance;
    constructor() {
        if(ProblemExperience.instance) {
            return ProblemExperience.instance
        }
        ProblemExperience.instance = this;

        this.editor, this.codeDiv, this.code, this.problemRunner;

        window.onload = function () {
            this.promptCodeLayout = new DynamicLayout(document.getElementById("main-wrap"), document.getElementById("prompt-code"), "horizontal", [20,' ',70])

            this.problemRunner = new ProblemRunner();
        }
    }
}