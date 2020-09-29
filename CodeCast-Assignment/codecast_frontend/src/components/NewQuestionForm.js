import React, { Component } from 'react'
import { Question } from '../requests';

class NewQuestionForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
            newQuestionParams: {
            title: '',
            body: '',
            }
        };

      this.createQuestion = this.createQuestion.bind(this)
      this.updateQuestionParams = this.updateQuestionParams.bind(this)
    }

    updateQuestionParams(event) {
        const input = event.target;
        this.setState( (state) => {
            const newQuestionCopy = {...state.newQuestionParams};
            return {
              newQuestionParams: {
                ...newQuestionCopy,
                [input.name]: input.value,
              }
            }
          })
      }

    createQuestion() {
        Question.create(this.state.newQuestionParams)
          .then(res => {
            if(res.id) {
            //   this.props.history.push(`/questions/`)
            }
            if (res.errors) {
              this.setState(() => {
                return {
                  errors: res.errors
                }
              })
            }
          });
      }

      render() {
          return(
        <>
        <div>
          <form onSubmit={(event) => { 
             event.preventDefault();
             this.createQuestion();
           }}>
            <div>
               <input type='text' name='title' id='title' autoComplete='off' required onInput={this.updateQuestionParams} value={this.state.newQuestionParams.title}></input>
               <label for='title'> <span> Title </span> </label>
            </div>
            <div>
               <input type='text' name='body' id='body' autoComplete='off' required onInput={this.updateQuestionParams} value={this.state.newQuestionParams.body} ></input>
               <label for='body'> <span> Question </span> </label>
            </div>
            <div>
            <input type='submit' value='Create Question'/>
         </div>
            </form>
        </div>
        </>
          )};
}

export default NewQuestionForm