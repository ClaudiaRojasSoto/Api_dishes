const getItemDetails = async (id) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await request.json();
  return data.meals[0];
};

export default getItemDetails;