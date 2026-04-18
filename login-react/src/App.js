import React, { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function validarLogin() {

    if(email === "eduardo.lino@pucpr.br" && senha === "123456"){
      setMensagem("Acessado com sucesso!");
    }
    else{
      setMensagem("Usuário ou senha incorretos!");
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

      <label className="mensagem">
        {mensagem}
      </label>

    </div>
  );
}

export default App;