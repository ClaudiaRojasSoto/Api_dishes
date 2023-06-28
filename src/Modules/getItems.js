import showCommentsPopup from './commentsPopup.js';
import handleFetchError from './errorHandler.js';

const container = document.querySelector('main');

const displayItems = (dataMeals) => {
  dataMeals.forEach((meals) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'dflex container';
    mainDiv.innerHTML = `
    <div class="item dflex">
      <img class="mealimg" id="${meals.idMeal}" src="${meals.strMealThumb}" alt="${meals.strMealThumb}">
      <div class="dflex mealtitle">
        <h2>${meals.strMeal}</h2>
        <div>
          <span>0</span>
          <button id="likes">&#9825;</button>
        </div>
      </div>
        <button class="testing" id="comments">Comments</button>
      </div>
    `;

    mainDiv.querySelectorAll('#comments').forEach((commentsButton) => {
      commentsButton.addEventListener('click', async () => {
        await showCommentsPopup(meals.idMeal).catch(handleFetchError);
      });
    });

    container.appendChild(mainDiv);
  });
};

const getItems = async () => {
  const request = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
  const data = await request.json();
  displayItems(data.meals);
};

export default getItems;