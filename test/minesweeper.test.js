import { fixture, expect } from '@open-wc/testing';

import '../dist/minesweeper.js';

describe('Minesweeper', () => {
  it('passes the a11y audit', async () => {
    const element = await fixture(`<minesweeper-game></minesweeper-game>`);

    expect(element).shadowDom.to.be.accessible();
  });
});
