import './PropertyTypes.css'

export default function PropertyTypes() {
  return (
    <div className='property-types'>
      <div className='property-types-container'>
        <h3>Property Types</h3>
        <div className='types'>
          <p className='selected'>All</p>
          <p>Flat</p>
          <p>Bungalow</p>
          <p>Detached house</p>
          <p>Semi-detached house</p>
          <p>Terraced house</p>
        </div>
      </div>
    </div>
  )
}
