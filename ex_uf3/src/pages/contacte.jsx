import React, { useRef, useEffect, useState } from "react";

function FormulariContacte() {
  const nomRef = useRef(null);
  const [nom, setNom] = useState("");
  const [cognom, setCognom] = useState("");
  const [correu, setCorreu] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    nomRef.current.focus(); 
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
      setErrors({});
    }
  };

  return (
    <div className="main">
      <header>
        <h1>Contacte</h1>
      </header>
      
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="nom">Nom:</label>
          <input 
            id="nom"
            ref={nomRef} 
            value={nom} 
            onChange={e => setNom(e.target.value)} 
            aria-label="Escriu el teu nom"
            className={errors.nom ? "input-error" : ""}
          />
          {errors.nom && <span className="error-text">{errors.nom}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cognom">Cognom:</label>
          <input 
            id="cognom"
            value={cognom} 
            onChange={e => setCognom(e.target.value)} 
            aria-label="Escriu el teu cognom"
            className={errors.cognom ? "input-error" : ""}
          />
          {errors.cognom && <span className="error-text">{errors.cognom}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="correu">Correu:</label>
          <input 
            id="correu"
            value={correu} 
            onChange={e => setCorreu(e.target.value)} 
            aria-label="Escriu el teu correu electrònic"
            className={errors.correu ? "input-error" : ""}
          />
          {errors.correu && <span className="error-text">{errors.correu}</span>}
        </div>

        {/* Botó simulat amb un div segons requeriment */}
        <div
          role="button"
          tabIndex={0}
          className="custom-button"
          onClick={handleEnviar}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleEnviar(); }}
          aria-label="Enviar formulari"
        >
          Enviar
        </div>
      </div>
    </div>
  );
}

export default FormulariContacte;