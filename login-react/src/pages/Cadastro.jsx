import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { auth, db } from "../services/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

function Cadastro() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function cadastrarUsuario() {

    try {

      // cria usuário no Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const user = userCredential.user;

      // salva dados no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {

        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        email: email

      });

      setMensagem("Usuário cadastrado com sucesso!");

      // redireciona para login após 1.5s
      setTimeout(() => {

        navigate("/Login");

      }, 1500);

    }
    catch (erro) {

      setMensagem("Erro ao cadastrar usuário.");

      console.log(erro);

    }

  }

  return (

    <div className="container">

      <h1>Cadastro</h1>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />

      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />

      <button onClick={cadastrarUsuario}>
        Cadastrar
      </button>

      <label className="mensagem">
        {mensagem}
      </label>

    </div>

  );

}

export default Cadastro;