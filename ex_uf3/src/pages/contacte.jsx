import React, { useRef, useEffect, useState } from "react";

function FormulariContacte() {
  const nomRef = useRef(null);

  const [nom, setNom] = useState("");
  const [cognom, setCognom] = useState("");
  const [correu, setCorreu] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    nomRef.current.focus(); // focus automático en Nom
  }, []);

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEnviar = () => {
    const nousErrors = {};

    if (!nom.trim()) nousErrors.nom = "Nom obligatori";
    if (!cognom.trim()) nousErrors.cognom = "Cognom obligatori";
    if (!correu.trim()) {
      nousErrors.correu = "Correu obligatori";
    } else if (!validarEmail(correu)) {
      nousErrors.correu = "Correu invàlid";
    }

    setErrors(nousErrors);

    if (Object.keys(nousErrors).length === 0) {
      alert(`Formulari enviat!\nNom: ${nom}\nCognom: ${cognom}\nCorreu: ${correu}`);
      setNom(""); setCognom(""); setCorreu("");
    }
  };

  return (
    <form>
      <div>
        Nom: <input ref={nomRef} value={nom} onChange={e => setNom(e.target.value)} />
        {errors.nom && <span>{errors.nom}</span>}
      </div>
      <div>
        Cognom: <input value={cognom} onChange={e => setCognom(e.target.value)} />
        {errors.cognom && <span>{errors.cognom}</span>}
      </div>
      <div>
        Correu: <input value={correu} onChange={e => setCorreu(e.target.value)} />
        {errors.correu && <span>{errors.correu}</span>}
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={handleEnviar}
        onKeyPress={e => { if (e.key === "Enter" || e.key === " ") handleEnviar(); }}
        style={{ padding: "4px", border: "1px solid black", display: "inline-block", marginTop: "5px", cursor: "pointer" }}
      >
        Enviar
      </div>
    </form>
  );
}

export default FormulariContacte;
