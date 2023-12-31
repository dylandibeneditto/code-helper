export default class PromptFormatter {
    constructor(json) {
        this.json = json;

        this.title = this.json["title"];
        this.difficulty = this.repeatStar(this.json["difficulty"]);
        this.desc = this.surroundMonospace(this.json["description"]);
        this.cases = this.surroundMonospace(this.iterateCases(this.json["cases"]));

        document.getElementById("prompt-content").innerHTML = `<h1>${this.title}</h1> <div id="difficulty-stars" class="color${this.json["difficulty"]}">${this.difficulty}</div> <div id="prompt-description">${this.desc}</div> ${this.cases}`;
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
        return result
    }

    repeatStar(max) {
        return '<span class="material-symbols-outlined difficulty-filled">star</span>'.repeat(max)+'<span class="material-symbols-outlined difficulty-outlined">star</span>'.repeat(5-max);
    }
}