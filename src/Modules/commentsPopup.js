import getItemDetails from './getItemsDetails.js';

const showCommentsPopup = async (id) => {
  const details = await getItemDetails(id);
  
  const popup = document.createElement('div');
  popup.id = 'commentsPopup';
  popup.innerHTML = `
    <h2>${details.strMeal}</h2>
    <img src="${details.strMealThumb}" alt="${details.strMeal}">
    <p>${details.strInstructions}</p>
    <button id="close">Close</button>
  `;
  
  document.body.appendChild(popup);
  
  document.querySelector('#close').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};

export default showCommentsPopup;
