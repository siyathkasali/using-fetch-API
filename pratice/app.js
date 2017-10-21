// // http://ron-swanson-quotes.herokuapp.com/v2/quotes

// //XMLhttp request

// document.getElementById("xhr").addEventListener('click', xhrFunc);

// function xhrFunc(){
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://ron-swanson-quotes.herokuapp.com/v2/quotes", true);
// xhr.send();

// xhr.onload = function(){
//     if(this.status === 200){
//         var resText = JSON.parse(this.responseText);
//         document.getElementById("data").innerHTML = resText;
//     }
// }

// }

// //Fetch

// document.getElementById("fetch").addEventListener('click', fetchFunc);
// var fetcharea = document.getElementById('data');
// function fetchFunc(){
// fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
// .then(function(res){
//     return res.json();
// })
// .then((data)=>{
//     fetcharea.innerHTML = data;
// })
// }


// // Ajax

// $("#ajax").click(function(){

//     $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//     .done(function(data){
//         $("#data").html(data);
//     })
//     .fail(function(){
//         console.log("Error");
//     })

// })


// // Axios

// $("#axios").click(()=>{
//     axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//     .then((res)=>{
//             $("#data").html(res.data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })




// // https://api.github.com/users

// document.getElementById("xhr").addEventListener('click', gitUser);
// function gitUser(){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", 'https://api.github.com/users', true);
//     xhr.send();

//     xhr.onload = function(){
//         if(this.status === 200){
//             var data = JSON.parse(this.responseText);
//             var message = '';
//             for(var i in data){
//                 message += `
//                 <div class="d-flex boxa">
//                 <img src="${data[i].avatar_url}" alt="" width=200 height=200>
//                 <h3></h3>
//                     <p>${data[i].login}</p>
//                     </div>
//                 `;
//             }
//             document.getElementById("data").innerHTML = message;
            
//         }
//     }
// }



// ALL Using Fetch

document.getElementById('text').addEventListener('click', getText);

function getText(){
    fetch('text.txt')
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        document.getElementById('data').innerHTML = data;
    })
}


// JSON file

document.getElementById('jsonFile').addEventListener('click',getjson);

function getjson(){
    fetch('user.json')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        var output = '';
        data.forEach(function(e) {
            output += `
                <div class="items">
                    <ul class="list-items">
                    <li class="list-group-item"> ${e.id}</li> 
                    <li class="list-group-item"> ${e.name} </li>
                    <li class="list-group-item"> ${e.email}</li> 
                    </ul>
                </div>            
            `;  
        });

        document.getElementById('data').innerHTML = output;
    })
}


// External API

document.getElementById('external').addEventListener('click', getExternal);

function getExternal(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        var output = '';
        data.forEach(function(e){
            output += `
            <div class="card mb-2">
            <div class="card-body">
              <h4 class="card-title">${e.title}</h4>
              <p class="card-text">${e.body}</p>
            </div>
          </div>
            `;
        })
        document.getElementById("data").innerHTML = output;
    })
}


//  POST Request

document.getElementById('post').addEventListener('submit', getData);

function getData(e){
    e.preventDefault();
    var title = document.getElementById('p-title').value;
    var body = document.getElementById('p-body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
        .then((res)=>{
            res.json()
        })
        .then((data)=>{
            console.log(data);
        })
}
