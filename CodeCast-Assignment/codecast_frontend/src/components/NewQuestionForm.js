import React, { Component } from 'react'
import { Question } from '../requests';
import './NewQuestionForm.css';

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
              this.forceUpdate();
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
          <form className='questionform-form' onSubmit={(event) => { 
             event.preventDefault();
             this.createQuestion();
           }}>
            <div className='questionform-container'>
               <input className='questionform-input' type='text' name='title' id='title' autoComplete='off' required onInput={this.updateQuestionParams} value={this.state.newQuestionParams.title}></input>
               <label className='questionform-label' htmlFor='title'> <span> Title </span> </label>
            </div>
            <div className='questionform-container'>
               <input className='questionform-input' type='text' name='body' id='body' autoComplete='off' required onInput={this.updateQuestionParams} value={this.state.newQuestionParams.body} ></input>
               <label className='questionform-label' htmlFor='body'> <span> Question </span> </label>
            </div>
            <div className='questionform-container'>
            <input className='questionform-submit' type='submit' value='Create Question'/>
         </div>
            </form>
        </div>
        </>
          )};
}

export default NewQuestionForm