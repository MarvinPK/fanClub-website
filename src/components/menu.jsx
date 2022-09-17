export const Menu = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <img src="img/logo-sansbg.png" class="logo-header" alt=""/> 
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle Menu</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Paris SG <br/> Poitiers
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#aPropos' className='page-scroll'>
                Le Fan Club
              </a>
            </li>
            <li>
              <a href='#actualites' className='page-scroll'>
              Actualitées
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galerie Photos
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Liens utiles
              </a>
            </li>
            <li>
              <a href='#equipe' className='page-scroll'>
                L'équipe
              </a>
            </li>
           <li>
              <a href='#avis' className='page-scroll'>
                Nos adhérants
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Nous contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
