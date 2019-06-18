import { get } from "http";


class TriviaApi {

  static BASE_URL = 'https://opentdb.com/api.php?type=multiple?amount=';
 

  newToken(){
    return fetch('https://opentdb.com/api_token.php?command=request')
      .then (res => {
        if(!res.ok) error = {code: res.status};
        return res.json();
      })
      .then (resJson => {
        if (error) {
          error.message = resJson.message;
          return Promise.reject(error);
        }
      return resJson;
      });
  }

  newTokenString (){
    let resJson = newToken();
    const obj = JSON.parse(resJson);
    let token = obj[token];
    return token;
  }

  createQuestionsURL(){
    let token = newTokenString();
    url = `${BASE_URL} + ${Quiz.DEFAULT_QUIZ_LENGTH} + ${token}`;
  }
  
  apiFetch(url){
    let error;
    return fetch(url)
      .then(res => {
        if (!res.ok) error = {code: res.status};
        return res.json();
      })
      .then(resJson => {
        if (error) {
          error.message = resJson.message;
          return Promise.reject(error);
        }
        return resJson;
      });
  }
  getQuestions(url){
    return apiFetch(url);
  }


}

export default TriviaApi;
