import { useState } from 'react'
import './SearchBar.css'
import { useGlobalContext } from '../../../Context/Context'

import {
  fetchProperties,
  fetchPropertyDetails
} from '../../../frontend_engineer/api'

export default function SearchBar() {
  const { isProperties, setIsProperties, setIsSearchComplete } =
    useGlobalContext()
  const [isSelection, setIsSelection] = useState<any>([])
  const [isIDs, setIsIDs] = useState<any>([])
  const [isAddresses, setIsAddresses] = useState([])
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false)
  const [isSelected, setIsSelected] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.value)
    let list: any = []
    let ids: any = []
    event.target.value.length > 0
      ? fetchProperties({ address: event.target.value })
          .then((response) => {
            setIsSelection(response.properties)
            Object.values(response).map((property: any) => {
              console.log(
                '🚀 - file: SearchBar.tsx - line 27 - property',
                property
              )
              return property.map((value: any) => {
                list.push(value.address)
                ids.push(value.id)
                return null
              })
            })
            setIsIDs([ids])
            setIsAddresses(list)
            setIsAutocompleteOpen(true)
          })

          .catch((error) => {
            console.log(error)
          })
      : (function () {
          setIsAddresses([])
          setIsSelection([])
          setIsAutocompleteOpen(false)
        })()
  }

  const onSubmit = () => {
    setIsAutocompleteOpen(false)

    let listPropertyDetails: any = [...isProperties]

    typeof isIDs === 'string' &&
      fetchPropertyDetails(isIDs).then((response) => {
        listPropertyDetails.push(response.property)
        setIsProperties(listPropertyDetails)
      })

    typeof isIDs === 'object' &&
      isIDs[0].forEach((id: any) => {
        fetchPropertyDetails(id)
          .then((response) => {
            listPropertyDetails.push(response.property)
            setIsProperties(listPropertyDetails)
          })
          .catch((error) => {
            console.log(error)
          })
      })

    setIsSearchComplete(true)

    console.log(isProperties)
  }

  return (
    <div className='search-bar'>
      <h3>Search</h3>
      <div className='search-bar-container'>
        <input
          value={isSelected}
          type='search'
          name='address'
          placeholder='Enter address here...'
          onChange={(e) => {
            handleChange(e)
          }}
        />

        <button
          className='search-bar-button'
          onClick={() => {
            onSubmit()
          }}>
          Search
        </button>
      </div>

      {isAutocompleteOpen && (
        <div className='autocomplete-container'>
          {isAddresses.map((value: string, key: number) => {
            return (
              <p
                key={key}
                className='autocomplete-item'
                onClick={() => {
                  setIsSelected(value)
                  setIsIDs(isSelection[key].id)
                  setIsAutocompleteOpen(false)
                }}>
                {value}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
