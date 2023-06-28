/**
 * @jest-environment jsdom
 */

import homeItemCounter from '../src/Modules/itemCounter.js';

describe('Return the number of items displayed in the screen', () => {
  it('Case 1', () => {
    document.body.innerHTML = `
      <h1 id="mainTitle"></h1>
    `;
    const items = [1, 2, 3, 4];
    const result = homeItemCounter(items.length);
    expect(result).toMatch(/4 Vegetarian Recipes/);
  });

  it('Case 2', () => {
    document.body.innerHTML = `
      <h1 id="mainTitle"></h1>
    `;
    const items = [1, 2, 3, 4, 5, 6, 7];
    const result = homeItemCounter(items.length);
    expect(result).toMatch(/7 Vegetarian Recipes/);
  });
});