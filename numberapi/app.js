var fact = document.getElementById('fact');
var factText = document.getElementById('factText');
     var data = document.querySelector("#numberinput");
     data.addEventListener('input', getfetch);
    

    
    function getfetch(){
        
        let number = data.value;
        if(number !=''){
        fetch('http://numbersapi.com/'+number)
        .then(res=>res.text())
        .then(data=>{
            fact.style.display = 'block';
            factText.innerHTML = data;
        })
        .catch(err => console.log(err));
        }
    }