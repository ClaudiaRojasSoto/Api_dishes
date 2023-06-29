/**
 * @jest-environment jsdom
 */

import countComments from '../src/Modules/commentsCounter.js';

describe('Comments Counter', () => {
  document.body.innerHTML = `
    <div id="commentsContainer">
      <p class="comment-text">Comment 1</p>
      <p class="comment-text">Comment 2</p>
      <p class="comment-text">Comment 3</p>
    </div>
  `;

  test('should return the correct number of comments', () => {
    expect(countComments()).toBe(3);
  });

  test('should return 0 if no comments are present', () => {
    document.querySelector('#commentsContainer').innerHTML = '';
    expect(countComments()).toBe(0);
  });

  test('should not count non-comment elements', () => {
    document.querySelector('#commentsContainer').innerHTML += '<div>Not a comment</div>';
    expect(countComments()).toBe(0);
  });
});
