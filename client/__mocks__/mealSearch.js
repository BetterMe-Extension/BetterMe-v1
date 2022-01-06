import axios from 'axios';
export default mealSearch = async (params) => {
  //console.log('let get your data')
  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b3dfd59b7c1f48a888d4c0c01d659bf1&number=50&query=${params}`);

  return response.data.results;
};
