const weather = new Weather('Bangalore','in');
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation();


document.getElementById('w-change').addEventListener('click', changedata);
function changedata(e){
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city,state);
  getWeather();

  $('#locModal').modal('hide');
}


function getWeather(){
  weather.getData()
  .then(res => {
    ui.paint(res);
  })
  .catch(err => console.log(err));
}






