import handleFetchError from './errorHandler.js';

const getComments = async (app_id, id) => {
    console.log(id)
    try {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/comments?item_id=${id}`);
        const data = await response.json();
        return data
      } catch (error) {
        return error
      }
};

export default getComments;