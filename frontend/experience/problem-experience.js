//utils
import DynamicLayout from './utils/dynamic-layout.js';

//dedicated classes
import ProblemRunner from './problem-runner.js'
import PromptFormatter from './prompt-formatter.js'

export default class ProblemExperience {
    static instance;
    constructor() {
        if(ProblemExperience.instance) {
            return ProblemExperience.instance
        }
        ProblemExperience.instance = this;

        this.editor, this.codeDiv, this.code, this.problemRunner;
        this.prompt = {
            "title": '1. Hello World',
            "description": 'Write a program which returns the string ;"Hello world";',
            "cases": [
                {
                    "input": "[]",
                    "output": '"Hello world"',
                    "explanation": ';x() // "Hello world";\nThe function should always return "Hello world"'
                },
                {
                    "input": '[10,"hello",[]]',
                    "output": '"Hello world"',
                    "explanation": ';x(10,"hello",[]) // "Hello world";\nThe function should always return "Hello world"'
                }
            ]
        }
        
        console.log(this.prompt)
        this.promptFormatter = new PromptFormatter(this.prompt);

        window.onload = function () {
            this.promptCodeLayout = new DynamicLayout(document.getElementById("main-wrap"), document.getElementById("prompt-code"), "horizontal", [20,60])
            this.codeDebug = new DynamicLayout(document.getElementById("code-wrap"), document.getElementById("code-debug"), "vertical", [40, 80])

            this.problemRunner = new ProblemRunner();
        }
    }
}