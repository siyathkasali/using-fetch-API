import redit from './redit';

const outputResult = document.getElementById('results');

document.getElementById('search-form').addEventListener('submit', showresults);
function showresults(e){
  e.preventDefault();
  const input = document.getElementById('search-input').value;
  // Radio Buttons
  const sortBy = document.querySelector('input[name="sortby"]:checked ').value;
  // checkBox
  const searchLimit = document.getElementById('limit').value;

  if(input === ''){
    showMessage('Enter a valid Input', 'alert-danger');
  }
  // Search Result
  redit.search(input, sortBy, searchLimit)
  .then(results => {
    let output = '<div class="card-columns">'
    results.forEach(post => {
       output += `
       <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
       `; 
    });
    output += '<div>'
    outputResult.innerHTML = output;
  });

  // clear input
  document.getElementById('search-input').value = '';
}


function showMessage(msg, className){
  const div = document.createElement('div');
  const searchContainer = document.getElementById('search-container');
  const search = document.getElementById('search');
  div.className = `alert ${className} mt-5`;
  div.appendChild(document.createTextNode(msg));
  searchContainer.insertBefore(div,search);
  setTimeout(()=>{
    document.querySelector('.alert').remove(); 
  },3000);
}


