import Experience from './problem-experience.js'

export default class ProblemRunner {
    constructor() {
        this.experience = new Experience();
    }

    runProblem(caller, code) {
        try {
            return eval(caller+"\n"+code)
        } catch (error) {
            return error.message
        }
    }
}