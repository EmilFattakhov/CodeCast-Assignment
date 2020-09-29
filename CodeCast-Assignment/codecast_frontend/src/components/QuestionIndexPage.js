import React, { Component } from 'react'
import { Question } from '../requests';
import { Link } from 'react-router-dom';


class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
  }

  componentDidMount() {
    Question.index()
      .then(questions => {
        console.log('questions', questions)
        console.log('answers', questions[1].answers)
        console.log('comments', questions[1].answers[1].comment)
        this.setState((state) => {
          return {
            questions: questions
          }
        })
      });
  }

 
  handleDeleteButtonClick(event, id) {
    this.setState((currentState, currentProps) => {
      const questionsCopy = [...currentState.questions];
      const updatedArray = questionsCopy.filter((q) => {
        return q.id !== id
      })
      return {
        questions: updatedArray
      }
    })
  }

  render() {
    return(
        <main>
        <h1>Question Index Page</h1>
        <div>
          {this.state.questions.map((question) => {
            return(
              <>
                <div key={question.id}>
                    <div><Link to={`/questions/${question.id}`}> <h1> {question.title} </h1> </Link></div>
                    {/* <button data-id={pet.id} onClick={this.deletePet}>Delete</button> */}
                 </div>
                 </>)
          })}
          </div>
      </main>
    )
  }
}

export default QuestionIndexPage;