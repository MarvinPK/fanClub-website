export const Avis = (props) => {
  return (
    <div id='avis'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Qu'en pensent nos adhérents ?</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image' style={{backgroundImage: `url(${d.img})`}}>
                      
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
