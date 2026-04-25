import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// mock firebase
jest.mock('../services/firebase', () => ({
  auth: {},
  db: {}
}));

test("rota inicial mostra login", () => {
  render(<App />);

  expect(screen.getByText("Login")).toBeInTheDocument();
});