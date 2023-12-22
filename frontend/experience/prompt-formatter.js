export default class PromptFormatter {
    constructor(json) {
        this.json = json;

        this.title = this.json["title"];
        this.desc = this.surroundMonospace(this.json["description"]);
        this.cases = this.json["cases"];

        document.getElementById("prompt-content").innerHTML = `<h1>${this.title}</h1> <p>${this.desc}</p>`;
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

        console.log(this.json["description"])

        return result
    }
}