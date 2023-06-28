import showCommentsPopup from './commentsPopup.js';
import handleFetchError from './errorHandler.js';
import postLikes, { getLikes, updateText } from './likes.js';
import homeItemCounter from './itemCounter.js';

const container = document.querySelector('#itemsContainer');

const displayItems = (dataMeals) => {
  dataMeals.forEach(async (meals) => {
    const numberOfLikes = await getLikes();
    let likes = 0;
    numberOfLikes.forEach((elem) => {
      if (elem.item_id === meals.idMeal) {
        likes = elem.likes;
      }
    });
    const mainDiv = document.createElement('div');
    mainDiv.className = 'dflex container';
    mainDiv.innerHTML = `
    <div class="item dflex">
      <img class="mealimg" id="${meals.idMeal}" src="${meals.strMealThumb}" alt="${meals.strMealThumb}">
      <div class="dflex mealtitle">
        <h2>${meals.strMeal}</h2>
        <div>
          <span class="${meals.idMeal}" id="likesNumber">${likes} likes</span>
          <button class="${meals.idMeal}" id="likes">&#9825;</button>
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

    mainDiv.querySelector('#likes').addEventListener('click', async (event) => {
      const id = event.target.className;
      await postLikes(id);
      const updateLikes = mainDiv.querySelector('#likesNumber');
      await updateText(meals.idMeal, updateLikes);
    });

    container.appendChild(mainDiv);
  });
};

const getItems = async () => {
  const request = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
  const data = await request.json();
  displayItems(data.meals);
  homeItemCounter(data.meals.length);
};

export default getItems;