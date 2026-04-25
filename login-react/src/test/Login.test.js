import React from 'react';
import { render, screen } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

// mock do firebase
jest.mock('../services/firebase', () => ({
  auth: {}
}));

// mock do firebase auth
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn()
}));

test("renderiza página de login", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Acessar")).toBeInTheDocument();
  expect(screen.getByText("Novo usuário")).toBeInTheDocument();
});

test("permite digitar email e senha", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = screen.getByPlaceholderText("Digite seu email");
  const senhaInput = screen.getByPlaceholderText("Digite sua senha");

  await userEvent.type(emailInput, "teste@email.com");
  await userEvent.type(senhaInput, "123456");

  expect(emailInput).toHaveValue("teste@email.com");
  expect(senhaInput).toHaveValue("123456");
});