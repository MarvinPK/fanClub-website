export const Actualites = (props) => {
  return (
    <div id='actualites' className='text-center'>
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
                  {d.link ?<a href={d.link} target="_blank">
                    {d.img && <img style={{"width":"100px", "height":"100px"}} src={d.img}></img>}
                    <i className={d.icon}></i>
                    <div className='new-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                    </a> : <div>{d.img && <img style={{"width":"100px"}} src={d.img}></img>}
                    <i className={d.icon}></i>
                    <div className='new-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div></div>}
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
