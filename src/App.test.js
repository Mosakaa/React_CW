import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the assignment components', () => {
  render(<App />);

  expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
  expect(screen.getByText(/count: 5/i)).toBeInTheDocument();
  expect(screen.getByText(/produce filter/i)).toBeInTheDocument();
});
