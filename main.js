// funstion to disable default behaviour on the todo submission form,
// create an object, send it to the database
document.getByElementId('form').onsubmit = function(e) {
  e.preventDefault();
  fetch('/todos/create', {
    method: 'POST',
    body: JSON.stringify({
      'description': document.getElementById('description').value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  .then(function (response) {
    return response.json();
  });
  .then(function (jsonResponse) {
    console.log(jsonResponse);
    const liItem =  document.createElement('li');
    liItem.innterHTML = jsonResponse['description'];
    document.getElementById('todos').append(liItem);
  })
  .catch(function() {
    document.getElementById('error').className ="";
  });
};
