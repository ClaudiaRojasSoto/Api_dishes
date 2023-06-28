const homeItemCounter = (containerItems) => {
  const hometitle = document.querySelector('#mainTitle');
  hometitle.textContent = `${containerItems} Vegetarian Recipes`;
};

export default homeItemCounter;