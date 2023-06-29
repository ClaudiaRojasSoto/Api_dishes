const sendComment = async (appId, id, username1, comment1) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: username1,
      comment: comment1,
    }),
  });

  if (!response.ok) {
    throw new Error('Error sending the comment');
  }
};

export default sendComment;