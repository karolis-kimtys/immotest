// import { useEffect } from 'react'
import './SelectedProperties.css'
import { useGlobalContext } from '../../../Context/Context'

export default function SelectedProperties() {
  const { isSelectedProperties, setIsSelectedProperties } = useGlobalContext()

  let tempList: any = [...isSelectedProperties]

  const removeProperty = (id: any) => {
    tempList.splice(
      isSelectedProperties.findIndex((a: any) => a.id === id),
      1
    )

    setIsSelectedProperties(tempList)
  }
  return (
    <div className='selected-properties'>
      <h3>Selected Properties</h3>
      <table>
        <thead>
          <tr className='table-header'>
            <th className='table-check-input'></th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Number of rooms</th>
            <th>
              Floor area
              <span>
                (m<sup>2</sup>)
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {Object.values(isSelectedProperties).map(
            (property: any, key: number) => {
              return (
                <tr key={key} className='table-body-row'>
                  <td
                    className='table-check-input icon'
                    onClick={() => {
                      removeProperty(property.id)
                    }}>
                    🗑
                  </td>
                  <td>{property.address}</td>
                  <td>{property.postcode}</td>
                  <td>{property.numberOfRooms}</td>
                  <td>{property.floorArea}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}
