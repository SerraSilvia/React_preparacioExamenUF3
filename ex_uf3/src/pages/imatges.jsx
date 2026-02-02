import React from "react";

function Imatges() {
  const obres = [
    {
      id: 1,
      alt: "Nit estelada de Van Gogh",
      src: "/img/nit_estrellada.webp", 
    },
    {
      id: 2,
      alt: "La persistència de la memòria de Dalí",
      src: "/img/persistencia.webp",
    },
    {
      id: 3,
      alt: "El Guernica de Picasso",
      src: "/img/guernica.webp",
    },
  ];

  return (
    <div className="main">
      <header>
        <h1>Galeria d'Art</h1>
        <p>Les nostres obres destacades.</p>
      </header>

      <div className="gallery-grid">
        {obres.map((obra) => (
          <div key={obra.id} className="gallery-item">
            <img 
              src={obra.src} 
              srcSet={obra.srcset} 
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={obra.alt}
              loading="lazy" /* Lazy Loading */
              className="gallery-img"
            />
            <p className="image-caption">{obra.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imatges;