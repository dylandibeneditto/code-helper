import ProblemRunner from './problem-runner.js'

export default class ProblemExperience {
    static instance;
    constructor() {
        if(ProblemExperience.instance) {
            return ProblemExperience.instance
        }
        ProblemExperience.instance = this;

        this.problem_runner = new ProblemRunner();
    }
}