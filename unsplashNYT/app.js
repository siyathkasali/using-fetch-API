document.getElementById('getData').addEventListener('click', getData);
let output = document.querySelector('.main-output');
const uList = document.getElementById('uList');
// APP ID d02ef18fe6e5c4837c8d769e586584fb325cd5ab36d4d855c698f4177bd4af5d
// Secret 031e277c47f322484ac37edaa95f2c66ba170cd62296eebc2f5ec6a0e1ce43db

// NYT  e2dd4360c6884c9eaf63e6b272817d3f
function getData(e){
  const inputText = document.getElementById('ipVal').value;  
  

  fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputText}&api-key=e2dd4360c6884c9eaf63e6b272817d3f`)
  .then(res => res.json())
  .then((data) => {
    let innerHtml = '';
    data.response.docs.forEach((arti)=>{
      innerHtml += `<li class="list-group-item"><a href="${arti.web_url}" class="d-block">${arti.headline.main}</a>
      <p>${arti.snippet}</p>
      </li>`
    });
    uList.innerHTML = innerHtml;
    })
  

  fetch(`https://api.unsplash.com/search/photos?page=1&query=${inputText}`,{
    headers:{
      Authorization:'Client-ID d02ef18fe6e5c4837c8d769e586584fb325cd5ab36d4d855c698f4177bd4af5d'
    }
  }).then(res => res.json())
  .then(addImg);

  function addImg(data){
      let innerHtml = '';
      const img = data.results[0];
      innerHtml = `
      <figure>
      <img src="${img.urls.small}">
      </figure>
      `;
      output.insertAdjacentHTML('beforeend' ,innerHtml);
  }

}