const homeItemCounter = (containerItems) => {
  const hometitle = document.querySelector('#mainTitle');
  hometitle.textContent = `${containerItems} Vegetarian Recipes`;
  return hometitle.textContent;
};

export default homeItemCounter;