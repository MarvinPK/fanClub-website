export const News = (props) => {
  return (
    <div id='news' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Les actualités</h2>
          <p>
           Retrouvez ici les derniers faits marquants du fan club
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='new-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {d.link && <strong><a style={{"color":"white"}} href={d.link} target="_blank">Voir le lien</a></strong>}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
