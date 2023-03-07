import '../Css/index.css'
function Header(props) {
  const donnes = props.Donne
  return (
    <header id="home">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Accueil
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Qui suis-je?
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resumé
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Réalisation
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Je suis {donnes.name}</h1>
          <h3>
            {donnes.role}.{donnes.roleDescription}
          </h3>
          <hr />
          <ul className="social">
            {donnes.liens.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    LinkdIn
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
}
export default Header
