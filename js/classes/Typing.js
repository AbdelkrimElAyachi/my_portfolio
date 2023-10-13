
// ahmed,said 

export default class Typing{
    constructor(lst_words,time,element_html){
        this.words = lst_words;
        this.time = time;
        this.element = element_html;

        this.word_index = 0;
        this.char_index = 0;

        this.repeat = false;
        this.nbr = 1;

        this.changeWords();
    }
    changeWords(){

        this.char_index += this.nbr;

        this.element.innerHTML = this.words[this.word_index].substr(0,this.char_index);
        

        if(this.char_index >= this.words[this.word_index].length){
            this.repeat = true;
            this.nbr = -1;
        }
        if(this.repeat && this.char_index <= 0){
            this.nbr = 1;
            this.repeat = false;
            this.word_index += 1;
        }
        if(this.word_index >= this.words.length){
            this.word_index = 0;
        }

        setTimeout(() => {
            this.changeWords();
        }, this.time);
    }
}

