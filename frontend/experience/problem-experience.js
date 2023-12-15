import ProblemRunner from './problem-runner.js'

export default class ProblemExperience {
    static instance;
    constructor() {
        if(ProblemExperience.instance) {
            return ProblemExperience.instance
        }
        ProblemExperience.instance = this;

        window.onload = function () {
            this.editor = document.querySelector("div#container")
            this.codeDiv = document.getElementsByClassName("view-lines")
            this.code = Array.from(this.codeDiv)[0].innerText;
            console.log(this.code)
            
            this.problemRunner = new ProblemRunner();
            console.log(this.problemRunner.runProblem(`x()`, this.code))
        }
    }
}