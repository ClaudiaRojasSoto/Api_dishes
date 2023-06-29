const postLikes = async (id) => {
  const sendData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/k513WvYOj4wUaRdaeuNF/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const result = await sendData.text();
  return result;
};

export const getLikes = async () => {
  const requestLikes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/k513WvYOj4wUaRdaeuNF/likes/');
  const dataLikes = await requestLikes.json();
  return dataLikes;
};

export const updateText = async (idmeal, span) => {
  const numberOfLikes = await getLikes();
  let likes = 0;
  numberOfLikes.forEach((elem) => {
    if (elem.item_id === idmeal) {
      likes = elem.likes;
    }
  });
  span.textContent = `${likes} likes`;
};

export default postLikes;