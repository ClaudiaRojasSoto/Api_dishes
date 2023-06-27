// Request for the ID in the Involvement API

const getID = async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  const data = await request.text();
  return data;
};

export default getID;
