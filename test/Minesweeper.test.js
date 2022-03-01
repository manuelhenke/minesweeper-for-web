import { fixture, expect } from '@open-wc/testing';

import '../dist/minesweeper.js';

describe('Minesweeper', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(`<minesweeper-game></minesweeper-game>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
