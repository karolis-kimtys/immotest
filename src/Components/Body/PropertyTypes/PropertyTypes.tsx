import { useState, useEffect } from 'react'
import './PropertyTypes.css'
import { getAvailablePropertyTypes } from '../../../frontend_engineer/api'

export default function PropertyTypes() {
  const [isSelected, setIsSelected] = useState<number>()
  const [isPropertyTypes, setIsPropertyTypes] = useState({})

  useEffect(() => {
    getAvailablePropertyTypes().then((response) => {
      setIsPropertyTypes(response.propertyTypes)
    })
  }, [])

  return (
    <div className='property-types'>
      <div className='property-types-container'>
        <h3>Property Types</h3>
        <div className='types'>
          {Object.values(isPropertyTypes).map((type: any, key: number) => {
            return (
              <p
                key={key}
                className={`property-type-${key} ${
                  key === isSelected && 'selected'
                }`}
                onClick={() => {
                  setIsSelected(key)
                }}>
                {type.label}
              </p>
            )
          })}
          {/* <p className='selected'>All</p> */}
        </div>
      </div>
    </div>
  )
}
