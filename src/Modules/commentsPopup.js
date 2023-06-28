import getItemDetails from './getItemsDetails.js';
import getComments from './getComments.js';
import sendComment from './sendComment.js';
import countComments from './commentsCounter.js';

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

  // Create a new element to display the comment count
  const commentsCountElement = document.createElement('p');
  commentsCountElement.id = 'commentsCount';
  commentsCountElement.classList.add('comments-count');

  popup.insertBefore(commentsCountElement, commentsContainer);

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
      // Update the comments count after updating the comments
      commentsCountElement.textContent = `Comments: ${countComments()}`;
    }
  };

  await updateComments();

  const form = popup.querySelector('#commentForm');
  form.addEventListener('submit', async (event) => {
    const usernameInput = popup.querySelector('#nameInput');
    const commentInput = popup.querySelector('#commentInput');

    event.preventDefault();

    const username = usernameInput.value;
    const comment = commentInput.value;

    await sendComment(appId, id, username, comment);
    await updateComments(); // Update the comments (and the count) after submitting a comment

    // Clear the input fields after the comment has been sent and comments have been updated
    usernameInput.value = '';
    commentInput.value = '';
  });

  popup.querySelector('.closeButton').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};

export default showCommentsPopup;
