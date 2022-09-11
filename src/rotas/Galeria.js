import React, { useEffect, useState } from "react";
import LayoutRotas from "../components/Utility/LayoutRotas";
import Modal from "../components/Utility/Modal";
import classes from "./Galeria.module.css";
import Head from "../components/Utility/Head";

const galeria = [
  {
    img: "gal1.webp",
    descricao: "Donec ac malesuada tortor. Suspendisse justo enim.",
    id: "gal1",
  },
  {
    img: "gal2.webp",
    descricao: "Nunc a dapibus leo.",
    id: "gal2",
  },
  {
    img: "gal3.webp",
    descricao: "Vestibulum tristique malesuada erat ut ultricies.",
    id: "gal3",
  },
  {
    img: "gal4.webp",
    descricao: "In eu lacus lacinia nibh gravida commodo",
    id: "gal4",
  },
  {
    img: "gal5.webp",
    descricao: "Proin ac sodales leo",
    id: "gal5",
  },
  {
    img: "gal6.webp",
    descricao: "Quisque et fermentum turpis.",
    id: "gal6",
  },
  {
    img: "gal7.webp",
    descricao: "Maecenas a lobortis urna.",
    id: "gal7",
  },
  {
    img: "gal8.webp",
    descricao: "Aenean consequat elit ut magna fermentum posuere.",
    id: "gal8",
  },
  {
    img: "gal9.webp",
    descricao: "Praesent efficitur sit amet felis eget vehicula.",
    id: "gal9",
  },
];

const Galeria = () => {
  const [modalShown, setModalShown] = useState(false);
  const [currentImageShown, setCurrentImageShown] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = () => {
    setModalShown(false);
  };

  const openModal = (imagem) => {
    setModalShown(true);
    setCurrentImageShown(imagem);
  };

  return (
    <>
      <Head title="Galeria" description="Conheça o nosso ambiente" />
      {modalShown && (
        <Modal onClose={closeModal}>
          <div className={classes.modal}>
            <div className={classes.img}>
              <img
                src={require(`../assets/${currentImageShown.img}`)}
                alt={currentImageShown.descricao}
              />
            </div>
            <p>{currentImageShown.descricao}</p>
          </div>
        </Modal>
      )}
      <LayoutRotas
        titulo="Conheça nosso ambiente!"
        descricao="Curabitur rutrum elit vel felis volutpat interdum"
      >
        <ul className={classes.galeria}>
          {galeria.map((imagem) => (
            <li key={imagem.id}>
              <button onClick={() => openModal(imagem)}>
                <img
                  src={require(`../assets/${imagem.img}`)}
                  alt={imagem.descricao}
                />
              </button>
            </li>
          ))}
        </ul>
      </LayoutRotas>
    </>
  );
};

export default Galeria;
