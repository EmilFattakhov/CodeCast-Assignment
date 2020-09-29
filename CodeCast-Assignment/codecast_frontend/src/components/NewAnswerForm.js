import React from "react";

function NewAnswerForm(props) {
  function handleAnswerSubmit(event) {
    const { currentTarget } = event;
    console.log('currentTarget', currentTarget)

    const fd = new FormData(currentTarget);

    props.onSubmit(props.question.id, { body: fd.get("body") } );
    currentTarget.reset();
  }

  return (
    <form className='questionform-form' onSubmit={handleAnswerSubmit}>
      <div className='questionform-container'>
          <input className='questionform-input' type='text' name='body' autoComplete='off' required ></input>
          <label className='questionform-label' for='body'> <span> Place your answer here </span> </label>
      </div>
      <div className='questionform-container'>
          <input className='questionform-submit' type='submit' value='Create answer'></input>
      </div>
    </form>
  );
}

export default NewAnswerForm;
