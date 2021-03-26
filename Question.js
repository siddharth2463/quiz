class Question{
    constructor(){
        this.input1=createInput()
        this.input2=createInput()
        this.title=createElement('H1');
        this.question=createElement('H2');
        this.a1=createElement('H3');
        this.a2=createElement('H3');
        this.a3=createElement('H3');
        this.a4=createElement('H3');
        this.button=createButton("submit")
    }
    hide(){
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
        this.title.hide()

    }
    display(){
        this.title.html("My Quiz Game")
        this.title.position(250,10);
        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter")
        this.question.position(100,80);
        this.a1.html("1. Everyone")
        this.a1.position(100,100);
        this.a2.html("2. Envelope")
        this.a2.position(100,120);
        this.a3.html("3. Estimate")
        this.a3.position(100,140);
        this.a4.html("4. Example")
        this.a4.position(100,160);
        this.input1.position(100,200);
        this.input2.position(100,230)
        this.button.position(100,260);
        this.button.mousePressed( ()=> {
            this.input1.hide();
            this.button.hide();
            this.input2.hide();
            this.title.hide();
           player.name=this.input1.value();
           player.answer=this.input2.value();
           contestantCount+=1;
           player.index=contestantCount
           player.update()
           player.updateCount(contestantCount);
        })
    }
    
}