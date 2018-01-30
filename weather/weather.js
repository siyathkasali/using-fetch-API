// http://api.wunderground.com/api/7f37ee19d38e6551/conditions/q/CA/San_Francisco.json

class Weather{
  constructor(city,state){
    this.key = '7f37ee19d38e6551';
    this.city = city;
    this.state = state;
  }

  async getData(){
    const data = await fetch(`http://api.wunderground.com/api/${this.key}/conditions/q/${this.state}/${this.city}.json`);
    const resData = await data.json();
    return resData.current_observation;
  }

  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }
}