import React, { useEffect, useState } from "react";
import "../App.css";

import { auth, db } from "../services/firebase";

import { doc, getDoc } from "firebase/firestore";

function Principal() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  useEffect(() => {

    async function buscarDadosUsuario() {

      const user = auth.currentUser;

      if(user){

        const docRef = doc(db, "usuarios", user.uid);

        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){

          const dados = docSnap.data();

          setNome(dados.nome);
          setSobrenome(dados.sobrenome);
          setDataNascimento(dados.dataNascimento);

        }

      }

    }

    buscarDadosUsuario();

  }, []);

  return (

    <div className="container">

      <h1>Página Principal</h1>

      <p>Nome: {nome}</p>

      <p>Sobrenome: {sobrenome}</p>

      <p>Data de nascimento: {dataNascimento}</p>

    </div>

  );

}

export default Principal;