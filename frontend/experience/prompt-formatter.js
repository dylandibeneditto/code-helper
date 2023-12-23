export default class PromptFormatter {
    constructor(json) {
        this.json = json;

        this.title = this.json["title"];
        this.desc = this.surroundMonospace(this.json["description"]);
        console.log(this.desc)
        this.cases = this.surroundMonospace(this.iterateCases(this.json["cases"]));

        document.getElementById("prompt-content").innerHTML = `<h1>${this.title}</h1> <div class="prompt-description">${this.desc}</div> ${this.cases}`;
    }

    surroundMonospace(text) {

        let positions = [];
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ";") positions.push(i);
        }

        let result = text.substring(0,positions[0])
        for (let i = 0; i < positions.length; i+=2) {
            let end;
            if(positions[i+2] == undefined) { end = text.length }
            else { end = positions[i+2] }
            result += '<div class="prompt-monospace">'+text.substring(positions[i]+1,positions[i+1])+'</div>'+text.substring(positions[i+1]+1, end)
        }
        return result
    }

    iterateCases(cases) {

        let result = ''

        for(let i = 0; i < cases.length; i++) {
            const c = cases[i]
            result += `<p class="case-title">Case ${i+1}</p> <div class="case-list"> <div>Input: <div class="case-data">${c.input}</div></div> <div>Output: <div class="case-data">${c.output}</div></div> <div>Explanation: <div class="case-data">${c.explanation}</div></div> </div>`
        }
        console.log(result)
        return result
    }
}