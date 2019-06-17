import Question from './Question.js';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [new Question('whats up?', 'the sky'), new Question('whats up doc?', 'poor elmer')];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score=0;
    this.scoreHistory = [];
    // TASK: Add more props here per the exercise
  }

  // Example method:
  startGame() {
    this.active = true;
  }
  
  handelScoring(){
    const currentScore = Question.answerStatus();
    this.score += currentScore;
    this.scoreHistory.push(currentScore);
  }

  stopGame(){
    this.active = false;
  }

}

export default Quiz;
