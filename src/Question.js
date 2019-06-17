

class Question {
  constructor(text , correctAnswer) {
    this.text = text;
    this.answers= [];
    this.correctAnswer= correctAnswer;
    this.userAnswer= '';
  }

  submitAnswer(answer) {
    this.userAnswer = answer;
    //this.answers.push(answer);
  }

  answerStatus(){
    if (this.userAnswer === ''){
      return -1;
    }
    else if (this.userAnswer === this.correctAnswer){
      return 1;
    }
    else if (this.userAnswer !== this.correctAnswer){
      return 0;
    }
  }
}

export default Question;
