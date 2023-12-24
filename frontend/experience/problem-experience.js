//utils
import DynamicLayout from './utils/dynamic-layout.js';

//dedicated classes
import ProblemRunner from './problem-runner.js'
import PromptFormatter from './prompt-formatter.js'

export default class ProblemExperience {
    static instance;
    constructor(prompt) {
        if(ProblemExperience.instance) {
            return ProblemExperience.instance
        }
        ProblemExperience.instance = this;

        this.editor, this.codeDiv, this.code, this.problemRunner, this.promptFormatter;
        this.promptIndex = 15;

        fetch('../../courses/fifty-javascript.json')
            .then((response)=> response.json())
            .then((json) => {
                this.prompt = json.problems[this.promptIndex]
                this.promptFormatter = new PromptFormatter(this.prompt);
            })

        window.onload = function () {
            this.promptCodeLayout = new DynamicLayout(document.getElementById("main-wrap"), document.getElementById("prompt-code"), "horizontal", [20,60], .25)
            this.codeDebug = new DynamicLayout(document.getElementById("code-wrap"), document.getElementById("code-debug"), "vertical", [40, 80], .7)

            this.problemRunner = new ProblemRunner();
        }
    }
}