
document.getElementById('btn').addEventListener('click', getData);

function getData(){

// var xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true );
// xhr.send();

// xhr.onload = function(){
//     if(this.status == 200){
//         var showData =JSON.parse(this.responseText);
//         document.getElementById('data').innerHTML = `<h1>Bitcoin Price : ${showData.bpi.USD.rate}</h1>`;
//     }
// }



fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data.bpi.EUR.rate);
})
.catch(function(e){
    console.log("Opps Problem");
})




}