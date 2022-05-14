export const Features = (props) => {
  return (
    <div id="features" className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Liens Utiles</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a href={d.url} target="_blank">
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3 utilLink'>
                  {' '}
                  <img src={d.icon}/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
                </a>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
