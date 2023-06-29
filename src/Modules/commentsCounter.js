const countComments = () => {
  const comments = document.querySelectorAll('.comment-text');
  return comments.length;
};

export default countComments;
