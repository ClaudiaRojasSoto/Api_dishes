const handleFetchError = (error) => {
  const errorMessage = document.getElementById('error-message');
  if (errorMessage) {
    errorMessage.innerHTML = `<span>${error.message}</span>`;
  }
};

export default handleFetchError;