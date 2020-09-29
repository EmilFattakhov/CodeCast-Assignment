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
    <form onSubmit={handleAnswerSubmit}>
      <div>
          <input type='text' name='body' autoComplete='off' required ></input>
          <label for='body'> <span> Place your answer here </span> </label>
      </div>
      <div>
          <input type='submit' value='Create answer'></input>
      </div>
    </form>
  );
}

export default NewAnswerForm;
