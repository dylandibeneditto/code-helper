import Experience from './problem-experience.js'

export default class ProblemRunner {
    constructor() {
        this.experience = new Experience();
    }

    run_problem(code) {
        try {
            return eval(code)
        } catch (error) {
            return error.message
        }
    }
}