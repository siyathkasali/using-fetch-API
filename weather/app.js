const weather = new Weather('Bangalore','in');
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation();

function getWeather(){
  weather.getData()
  .then(res => {
    ui.paint(res);
  })
  .catch(err => console.log(err));
}
