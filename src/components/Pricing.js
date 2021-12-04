import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";
import Modal2 from "../components/Portal/Modal";

const Pricing = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);

  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Klasycyzm</h3>
          <span className="bar">nawiązanie do literatury antyku</span>
          <p className="btc">
            powściągliwość, symetria, ład oraz korzystanie z antycznych form
            literackich
          </p>
          <p>Pierre Corneille - „Cyd”</p>
          <p>Molier - komedie</p>
          <p>Wolter - satyry, dramaty, listy</p>
          <p>Johann W. Goethe – druga faza twórczości</p>
          <p>Fryderyk Schiller - wiersze, poematy, sztuki teatralne</p>
          <button onClick={() => Toggle()} className="btn">
            Czytaj
          </button>
          <Modal show={modal} close={Toggle} title="Estetyka">
            <p>
              W kla­sy­cy­zmie, jako prą­dzie li­te­rac­kim, wy­róż­nić na­le­ży
              kil­ka ka­te­go­rii, któ­re w zna­czą­cy spo­sób po­rząd­ko­wa­ły
              sys­tem my­śle­nia o sztu­ce. Przede wszyst­kim sta­wiał on na
              pro­sto­tę for­my – sta­no­wi­ło to odej­ście od wy­szu­ka­nych i
              prze­sa­dzo­nych roz­wią­zań epo­ki wcze­śniej­szej. Po­nad to
              li­te­ra­tu­ra kla­sy­cy­stycz­na mu­sia­ła cha­rak­te­ry­zo­wał
              się ja­sno­ścią ję­zy­ka. Nie wy­klu­cza­ło to jed­nak
              cha­rak­te­ry­stycz­ne­go kunsz­tu, któ­rym po­wi­nien ce­cho­wać
              się utwór li­te­rac­ki. Bar­dzo dużą wagę przy­kła­da­li twór­cy
              kla­sy­cy­stycz­ni do jed­no­rod­no­ści w ob­rę­bie ga­tun­ku
              li­te­rac­kie­go oraz sty­lu wy­po­wie­dzi.
            </p>
            <br />
            <p>
              <em>poezja.org/wz/a/Klasycyzm</em>
            </p>
          </Modal>
        </div>
        <div className="card">
          <h3>Sentymentalizm</h3>
          <span className="bar">
            bazował przede wszystkim na szerokim spektrum ludzkich uczuć i
            emocji
          </span>
          <p className="btc">
            twórcy sięgali do tradycji ludowych, kładli nacisk na życie w
            zgodzie z przyrodą
          </p>
          <p>Jan Jakub Rousseau - „Nowa Heloiza”</p>
          <p>Laurence Sterne - „Podróż sentymentalna przez Francję i Włochy”</p>
          <p>Wolfgang Goethe – „Cierpienia młodego Wertera”</p>
          <button onClick={() => Toggle1()} className="btn">
            Czytaj
          </button>
          <Modal1 show={modal1} close={Toggle1} title="Sentymentalizm">
            <p>
              Sentymentaliści w centrum zainteresowania stawiali człowieka i
              jego uczucia, skupiali się na indywidualizmie, wnętrzu. Uważali,
              że człowiek w procesie cywilizacji utracił podstawowe wartości,
              dlatego propagowali powrót do natury. Metody poznawania świata
              według nich to: empiryzm i sensualizm. Dzieło sztuki, zgodnie z
              zasadami kierunku, powinno mówić o uczuciach, psychice człowieka i
              przeżywanych przez niego emocjach. Dla nurtu typowe były gatunki:
              sielanka, powieść sentymentalna. Główni przedstawiciele w Europie
              to Jean Jacques Rousseau, Laurence Sterne; w Polsce: Franciszek
              Karpiński i Franciszek Dionizy Kniaźnin.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Sentymentalizm</em>
            </p>
          </Modal1>
        </div>
        <div className="card">
          <h3>Rokoko</h3>
          <span className="bar">
            utwory utrzymane w nurcie rokoko miały przede wszystkim służyć
            rozrywce
          </span>
          <p className="btc">
            najczęściej wybieraną tematyką były motywy miłosne
          </p>
          <p>Pierre de Marivaux - „Pułapka miłości”</p>
          <p>Alain-Rene Lesage - „Diabeł kulawy”</p>
          <p>Aleksander Pope - poematy, satyry, aforyzmy</p>
          <button onClick={() => Toggle2()} className="btn">
            Czytaj
          </button>
          <Modal2 show={modal2} close={Toggle2} title="Literatura">
            <p>
              Rokoko to również kierunek w literaturze uznawany za odmianę
              schyłkowego baroku, powstały we Francji w XVIII w.
            </p>
            <p>
              Zarówno w życiu, jak i w sztuce, którą traktowano jako formę
              wyrafinowanej zabawy, głównymi wartościami estetycznymi były
              wdzięk i smak. Wprowadziło odmienne od klasycznego rozumienie
              pojęcia gustu, czyli smaku. Jego przymiotami są czułość,
              delikatność, trafność. Czułość staje się dyspozycją władz
              emocjonalnych człowieka stojącego na wysokim poziomie
              intelektualnym, zmniejszająca natężenie reakcji emocjonalnych.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Rokoko</em>
            </p>
          </Modal2>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
