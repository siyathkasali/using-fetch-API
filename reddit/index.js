import reddit from './redditApi';

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
  reddit.search(input, sortBy, searchLimit)
  .then(results => {
    let output = '<div class="card-columns">'
    results.forEach(post => {
      let image = post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
      console.log(post);
       output += `
       <div class="card">
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${truncateText(post.selftext,100)}</p>
    <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
    <hr>
    <span class="badge badge-primary">${post.subreddit}</span>
    <span class="badge badge-dark">${post.score}</span>
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

// Truncate Text

function truncateText(text, limit){
  const shortend = text.indexOf(' ', limit);
  if(shortend == -1) return text;
  return text.substring(0, shortend);
}