const getComments = async (appId, id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getComments;