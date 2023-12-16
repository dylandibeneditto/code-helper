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

            this.problemRunner = new ProblemRunner();
        }
    }
}