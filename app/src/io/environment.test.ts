import { getApiUrl } from '../io/environment';

describe('Environment', () => {
  it('should return environment variables', () => {
    process.env.API_URL = 'http://localhost:3000';

    expect(getApiUrl()).toBe('http://localhost:3000');
  });
});
