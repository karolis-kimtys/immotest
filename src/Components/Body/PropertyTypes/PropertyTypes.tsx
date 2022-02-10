import { useState, useEffect } from 'react'
import './PropertyTypes.css'
import { useGlobalContext } from '../../../Context/Context'
import { getAvailablePropertyTypes } from '../../../frontend_engineer/api'

export default function PropertyTypes() {
  const { isSelectedType, setIsSelectedType } = useGlobalContext()

  const [isPropertyTypes, setIsPropertyTypes] = useState({})

  useEffect(() => {
    getAvailablePropertyTypes().then((response) => {
      setIsPropertyTypes(response.propertyTypes)
    })
  }, [])

  return (
    <div className='property-types'>
      <div className='property-types-container'>
        <h3 data-testid='title'>Property Types</h3>
        <div className='types'>
          <p
            className={`property-type-all ${
              'all' === isSelectedType && 'selected'
            }`}
            onClick={() => {
              setIsSelectedType('all')
            }}
            data-testid='all'>
            All
          </p>
          {Object.values(isPropertyTypes).map((type: any, key: number) => {
            return (
              <p
                key={key}
                className={`property-type-${type.value} ${
                  type.value === isSelectedType && 'selected'
                }`}
                onClick={() => {
                  setIsSelectedType(type.value)
                }}
                data-testid={type.value}>
                {type.label}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
