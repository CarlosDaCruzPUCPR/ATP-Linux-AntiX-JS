import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { auth } from "../services/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function validarLogin() {

    try {

      await signInWithEmailAndPassword(auth, email, senha);

      navigate("/principal");

    }
    catch (erro) {

      setMensagem("Usuário não cadastrado ou senha incorreta.");

    }

  }

  return (

    <div className="container">

      <h1>Login</h1>

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

      <button onClick={validarLogin}>
        Acessar
      </button>

      <button onClick={() => navigate("/cadastro")}>
        Novo usuário
      </button>

      <label className="mensagem">
        {mensagem}
      </label>

    </div>

  );

}

export default Login;