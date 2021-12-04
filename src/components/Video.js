import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import spaceVideo from "../assets/1.mp4";
import Modal from "./Portal/Modal";
import Modal1 from "./Portal/Modal";

const Video = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Oświecenie</h1>
        <p>
          nurt kulturalny oraz okres w historii Europy przypadający na koniec
          XVII wieku do początku XIX wieku
        </p>
        <div>
          <button onClick={() => Toggle()} className="btn">
            Czytaj
          </button>
          <Modal show={modal} close={Toggle} title="Charakterystyka">
            <p>
              Ludzie oświecenia najbardziej cenili to, co można pojąć rozumem.
              Ważna cecha oświecenia to sekularyzacja państw europejskich oraz
              sformułowanie praw człowieka. To myśliciele tej epoki określili
              doktrynę katolicką oraz nastawienie Kościoła do kultury mianem
              obskurantyzmu.
            </p>
            <p>
              Do najważniejszych wydarzeń związanych z oświeceniem należy
              rewolucja francuska. Idea republiki rządzonej przez wybrany w
              wolnych wyborach parlament stała się zaczynem zmian zachodzących w
              Europie.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Oświecenie_(epoka)</em>
            </p>
          </Modal>
          <button onClick={() => Toggle1()} className="btn btn-light">
            Więcej
          </button>
          <Modal1 show={modal1} close={Toggle1} title="Nazwa epoki">
            <p>
              Nazwa epoki we wszystkich językach europejskich (fr. Les Lumières,
              niem. die Aufklärung, ang. the Enlightenment, hiszp. la
              ilustración. wł. l'illuminazione) odwołuje się do światła lub
              świateł, rozumianego jako siła rozpraszająca mrok i zabobon.
              Światło jest jedną z naczelnych metafor całej epoki.
            </p>
            <p>
              Oświecenie w każdym z krajów przybierało swoją specyficzną formę,
              wynikającą z lokalnych warunków. Stąd też wobec tych lokalnych
              form oświecenia niekiedy używa się nazwy z danego języka (np. die
              Aufklärung wobec niemieckiej formy oświecenia).
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Oświecenie_(epoka)</em>
            </p>
          </Modal1>
        </div>
      </div>
    </div>
  );
};

export default Video;
