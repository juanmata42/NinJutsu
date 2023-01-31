
import logo from '../../assets/logo.png';
import svgLogo from '../../assets/bujinkan-logo.svg';

export default function home(props) {
  return (
    <>
      <header className="main__header">
        <img className="main__logo" src={logo} alt="logo" />
        <h1 className="main__title">Nin Jutsu en Madrid</h1>
        <div className="light-switch">
          <button onClick={props.value} className="light-switch__bright">
            <img src={svgLogo} alt="logo" />
          </button>
          <button onClick={props.value} className="light-switch__dark">
            <img src={svgLogo} alt="logo" />
          </button>
        </div>
      </header>
      <main className="main__body">
        <div className="main__content">
          <div className="main__content-left">
            <h2 className="main__content-left__item">Instructor :</h2>
            <h2 className="main__content-left__description">
              Javier Alfonso Tundidor
            </h2>
            <h2 className="main__content-left__description">
              Email: <a href="mailto:javier@ninjutsumadrid.es">Javier</a>
            </h2>
            <h2 className="main__content-left__item">Horario :</h2>
            <h2 className="main__content-left__description">
              Lunes y Miércoles de 18:30 a 19.30.
            </h2>
            <h2 className="main__content-left__item">Gimnasio :</h2>
            <h2 className="main__content-left__description">
              Metro: <br /> L1-Estrecho y L7-Francos Rodriguez
              <br />
              <a target="blank" href="https://www.clubtsunami.es/website/">
                Club Deportivo Tsunami
              </a>
            </h2>
            <iframe
              title="map"
              className="main__content-left__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194054.94393972418!2d-3.994932370826314!3d40.539192012007064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 1!3m3!1m2!1s0xd422983acfd66f3%3A0x8c9074fc54ca96f5!2sClub%20Deportivo%20Tsunami!5e0!3m2!1ses!2ses!4v1667478091705!5m2!1ses!2ses"
            ></iframe>
          </div>
          <div className="main__content-right">
            <p>
              Nin-jutsu es un arte marcial tradicional, que surge en el siglo IX
              en el Japón feudal, época con grandes inestabilidades sociales, lo
              que permitió el desarrollo rápido de las Artes Marciales, llegaron
              a existir hasta 73 escuelas de ninjutsu con conocimientos de
              estrategia, infiltración y eficacia en el combate.
            </p>
            <p>
              En el siglo pasado se ha empezado a conocer en occidente gracias a
              un heredero directo de varias de estas escuelas, MASAAKI HATSUMI,
              que lo ha transmitido a occidentales.
            </p>
            <p>
              Ninjutsu / Budo Tai Jutsu es un arte marcial capaz de aunar la
              eficacia de la defensa personal y la práctica de la tradición
              japonesa en la línea más pura.
            </p>
            <p>
              Engloba técnicas cuerpo a cuerpo de golpeo, proyecciones,
              luxaciones y controles, técnicas con todo tipo de armas así como
              una parte más mental como meditación y canalización de la energía.
            </p>
            <div className="main__content-right__container">
              <div className="main__content-right__container-column">
                <h2>Nuestra asociación</h2>
                <a target="blank" href="https://www.jmcollado.com/">
                  Bujinkan Collado Dojo
                </a>
              </div>
              <div className="main__content-right__container-column">
                <h2>Otros Dojos en Madrid</h2>
                <a
                  target="blank"
                  href="https://es-es.facebook.com/people/Nin-Jutsu-Tres-Cantos/100050039177804/"
                >
                  Ninjutsu Tres Cantos
                </a>
                <a
                  target="blank"
                  href="https://es-la.facebook.com/ninjutsurivas/"
                >
                  Ninjutsu Rivas Vaciamadrid
                </a>
              </div>
              <div className="main__content-right__container-column">
                <h2>Compra de Material</h2>
                <a target="blank" href="https://fujimae.com/es/tiendas">
                  Tienda de Material en Madrid
                </a>
                <a target="blank" href="https://www.budoya.es/">
                  Budo YA artículos para Artes Marciales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="main__footer">
        Arte Marcial con infinidad de técnicas, sea cual sea tu condición
        física, seas hombre, mujer , niño o niña a partir de 12 años. ¡¡¡VEN Y
        PRUEBA, ATRÉVETE!!!
      </footer>
    </>
  );
}
