import { PriceFromPipe } from './price-from.pipe';

describe('PriceFromPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFromPipe();
    expect(pipe).toBeTruthy();
  });
});
