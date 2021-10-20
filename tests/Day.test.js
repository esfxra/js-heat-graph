import { Day } from '../src/lib/Day';

describe('Creation', () => {
  it('Should reflect the date it was created on properly', () => {
    const day = new Day();
    expect(day.date).toMatch('');
  });

  it('Should reflect number of contributions it was created with properly', () => {
    const day = new Day();
    expect(day.contributions).toMatch('');
  });
});
