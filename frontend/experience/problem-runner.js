import Experience from './problem-experience.js'

export default class ProblemRunner {
    constructor() {
        this.experience = new Experience();
        this.editor = document.getElementsByClassName("view-lines")
        this.code = Array.from(this.editor)[0].innerText;
        this.experience.code = this.code;

        this.runButton = document.getElementById("run-code")

        this.initListeners()
    }

    initListeners() {
        this.runButton.addEventListener("mousedown", () => {
            this.code = Array.from(this.editor)[0].innerText;
            this.experience.code = this.code;
            console.log(this.runProblem('x()', this.code))
        })
    }

    runProblem(caller, code) {
        try {
            return eval(caller+"\n"+code)
        } catch (error) {
            return error
        }
    }
}