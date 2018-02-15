export default {
  search: function(input,sortBy,searchLimit){
    return fetch(`https://wwww.reddit.com/search.json?q=${input}&sort=${sortBy}&limit=${searchLimit}`)
    .then(res => res.json())
    .then(data => data.data.children.map(data => data.data))
    .catch(err => console.log(err));
  }
}