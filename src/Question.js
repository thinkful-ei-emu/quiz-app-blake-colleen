

class Question {
  constructor(question, correctAnswer, wrongAnswers) {
    this.text = question;
    this.correctAnswer= correctAnswer;
    wrongAnswers.push(correctAnswer);
    this.answers= wrongAnswers;
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
