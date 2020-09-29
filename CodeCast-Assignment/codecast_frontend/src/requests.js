const BASE_URL = 'http://localhost:3000/api/v1';

export const Question = {
    index() {
      return fetch(`${BASE_URL}/questions`)
        .then(res => {
          return res.json();
        })
    },
    create(params) {
      return fetch(`${BASE_URL}/questions`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => {
        return res.json();
      })
    },
    delete(id) {
      return fetch(`${BASE_URL}/questions/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      }).then(res => res.json());
    }
  }

  export const Answer = {
    create(id, params) {
      return fetch(`${BASE_URL}/questions/${id}/answers`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    }
  };