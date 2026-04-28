import { render, screen } from '@testing-library/react';
import App from './App';

test('renders skill exchange heading', () => {
  render(<App />);
  const heading = screen.getByText(/skill exchange platform/i);
  expect(heading).toBeInTheDocument();
});
