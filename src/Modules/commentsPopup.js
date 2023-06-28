import getItemDetails from './getItemsDetails.js';
import getComments from './getComments.js';
import sendComment from './sendComment.js';

const showCommentsPopup = async (id) => {
  const details = await getItemDetails(id);
  const appId = 'k513WvYOj4wUaRdaeuNF';

  const popup = document.createElement('div');
  popup.id = 'commentsPopup';
  popup.innerHTML = `
  <h2>${details.strMeal}</h2>
  <img src="${details.strMealThumb}" alt="${details.strMeal}">
  <p id="details-instructions">${details.strInstructions}</p>
  <div id="commentsContainer"></div>
  <h3>Add a comment</h3>
  <form id="commentForm">
    <div>
      <input type="text" id="nameInput" placeholder="Your name">
    </div>
    <div>
      <textarea id="commentInput" placeholder="Your comment"></textarea>
    </div>
    <button id="submitCommentButton">Comment</button>
  </form>
  <button class="closeButton">&times;</button>
`;

  document.body.appendChild(popup);

  const commentsContainer = popup.querySelector('#commentsContainer');

  const updateComments = async () => {
    const comments = await getComments(appId, id);
    if (!Array.isArray(comments)) {
      // This block it's designed to handle the empty data in comments
    } else {
      commentsContainer.innerHTML = '';
      comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = `${comment.creation_date} - ${comment.username}: ${comment.comment}`;
        commentElement.classList.add('comment-text');
        commentsContainer.appendChild(commentElement);
      });
    }
  };

  await updateComments();

  const form = popup.querySelector('#commentForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = popup.querySelector('#nameInput').value;
    const comment = popup.querySelector('#commentInput').value;
    await sendComment(appId, id, username, comment);
    await updateComments();
  });

  popup.querySelector('.closeButton').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};

export default showCommentsPopup;