import React, { Component } from 'react'
import { Question, Answer } from '../requests';
import { Link } from 'react-router-dom';
import NewAnswerForm from './NewAnswerForm'
import NewQuestionForm from './NewQuestionForm'
import './QuestionIndexPage.css'

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
    
  }

  createAnswer = (id, params) => {
    Answer.create(id, params).then(answer => {
      if (answer.errors) {
        this.setState({ errors: answer.errors });
      }
    });
  };

  componentDidMount() {
    this.showQuestions();
  }

  showQuestions() {
    Question.index()
      .then(questions => {
        this.setState((state) => {
          return {
            questions: questions
          }
        })
      });
  }
  deleteQuestion(id) {
    Question.delete(id).then(res => {
      if (res.errors) {
        this.setState({errors: res.errors})
      }  
    }).then( () => {
      this.showQuestions();
    });
  };  
  

  render() {
    return(
        <main className='main'>
        <h1> Create New Question </h1>
        <NewQuestionForm></NewQuestionForm>
        <h1>Question Index Page </h1>
        <div>
          {this.state.questions.map((question) => {
            return(
              <>
                <div key={question.id}>
                    <div><Link to={`/questions/${question.id}`}> <h1> {question.title} </h1> </Link></div>
                    <div className='question-delete-button'> <button onClick={ () => this.deleteQuestion(question.id)}>Delete Question</button> </div>
                    { question.answers.map((answer) => {
                      return(
                        <div key={answer.id}>
                          <h3> {answer.body} </h3>
                          {question.comments.map((comment) => {
                            if (comment.answer_id === answer.id) {
                              return(<div key={comment.id}><p>{comment.comment}</p></div>)
                            }
                          })}
                        </div>
                      )
                    })}
                    <NewAnswerForm question={question} onSubmit={this.createAnswer}></NewAnswerForm>
                 </div>
               </>)
          })}
          
          </div>
      </main>
    )
  }
}

export default QuestionIndexPage;