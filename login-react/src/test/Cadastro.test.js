import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';

// mock do firebase
jest.mock('../services/firebase', () => ({
  auth: {},
  db: {}
}));

// mock do firebase auth
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn()
}));

// mock do firestore
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  setDoc: jest.fn()
}));

test("renderiza página de cadastro com inputs", () => {
  render(
    <MemoryRouter>
      <Cadastro />
    </MemoryRouter>
  );

  expect(screen.getByText("Cadastro")).toBeInTheDocument();

  expect(screen.getByPlaceholderText("Digite seu email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite seu nome")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite seu sobrenome")).toBeInTheDocument();

  expect(screen.getByText("Cadastrar")).toBeInTheDocument();
});

test("botão cadastrar está visível", () => {
  render(
    <MemoryRouter>
      <Cadastro />
    </MemoryRouter>
  );

  const botao = screen.getByText("Cadastrar");

  expect(botao).toBeInTheDocument();
});