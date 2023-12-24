import ProblemExperience from "../problem-experience.js";

require.config({ paths: { vs: '../../node_modules/monaco-editor/min/vs' } });

export default class MonacoHelper {
    constructor() {
        this.experience = new ProblemExperience();

        this.editor;

        require(['vs/editor/editor.main'], function () {
            this.editor = monaco.editor.create(document.getElementById('container'), {
                value: ['/*', ' * in { null }', ' * out { string }', ' */\n', 'function x() {', '\t', '}'].join('\n'),
                language: 'javascript',
                automaticLayout: true
            });

            this.editor.updateOptions({ theme: 'vs-dark' })
        });
    }
}