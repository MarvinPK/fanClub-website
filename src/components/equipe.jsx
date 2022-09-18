export const Equipe = (props) => {
  return (
    <div id='equipe' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>L'équipe</h2>
          <p>
            Petite présentation des 3 membres principaux qui gérent le fan club.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-12 equipe'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='equipe-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
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
