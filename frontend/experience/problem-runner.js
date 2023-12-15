import Experience from './problem-experience.js'

export default class ProblemRunner {
    constructor() {
        this.experience = new Experience();

        this.runButton = document.getElementById("run-code")

        this.initListeners()
    }

    initListeners() {
        console.log(this.runButton)
        this.runButton.addEventListener("mousedown", () => {
            console.log(this.runProblem('x()', this.experience.code))
        })
    }

    runProblem(caller, code) {
        try {
            return eval(caller+"\n"+code)
        } catch (error) {
            return error.message
        }
    }
}