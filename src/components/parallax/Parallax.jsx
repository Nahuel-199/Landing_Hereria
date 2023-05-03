import React from "react";
import "./parallax.css";

const Parallax = () => {
  return (
    <div id="parallax">
      <section className="parallax-corte page-section">
        <div className="container text-center py-5">
          <h3 className="text-white titulos-seccion mt-3">
            <b>HERRERÍA Y CONTRUCCIÓN EL ORIÓN</b>
          </h3>
          <button className="button2">
            Compromiso con el cliente, Respeto, Confianza
          </button>
          <p className="text_parallax">
            En Herrería El Orión, trabajamos para ofrecer a nuestros clientes los
            mejores productos de herrería. Nuestro equipo de profesionales está
            especializado en todo tipo de trabajos de herrería, desde la
            fabricación y reparación de herrajes hasta la fabricación de puertas
            y ventanas metálicas. Ofrecemos trabajos a la medida para satisfacer
            sus necesidades, así como productos de gran calidad a precios
            competitivos
          </p>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
