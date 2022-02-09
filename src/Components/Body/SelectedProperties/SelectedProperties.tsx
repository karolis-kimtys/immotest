import { useEffect } from 'react'
import './SelectedProperties.css'
import { useGlobalContext } from '../../../Context/Context'

export default function SelectedProperties() {
  const { isProperties } = useGlobalContext()

  // const [, setUpdate] = useState(false)

  // isSearchComplete && setIsList(isProperties)

  // console.log('🚀 - file: SelectedProperties.tsx - line 12 - isList', isList)

  // isSearchComplete && setIsList([isProperties])

  // Object.values(isProperties).map((item) => {
  //   console.log('🚀 - file: SelectedProperties.tsx - line 17 - item', item)

  // })

  useEffect(() => {
    Object.values(isProperties).map((property: any, key: number) => {
      return (
        <tr key={key} className='table-body-row'>
          <td>{property.address}</td>
          <td>{property.postcode}</td>
          <td>{property.numberOfRooms}</td>
          <td>{property.floorArea}</td>
        </tr>
      )
    })
  }, [isProperties])

  return (
    <div className='selected-properties'>
      <h3>Selected Properties</h3>
      <table>
        <thead>
          <tr className='table-header'>
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

        {/* 
        {isSearchComplete &&
          isProperties.map((property: any, key: number) => {
            console.log(
              '🚀 - file: SelectedProperties.tsx - line 30 - property',
              property
            )
            return (
              <tr key={key} className='table-body-row'>
                <td>{property.address}</td>
                <td>{property.postcode}</td>
                <td>{property.numberOfRooms}</td>
                <td>{property.floorArea}</td>
              </tr>
            )
          })} */}
        {/* 
        {Object.values(isList).map((property: any, key: number) => {
          console.log(
            '🚀 - file: SelectedProperties.tsx - line 22 - property',
            property,
            key
          )
          return property.map((property: any, key: number) => {
            return (
              <tr className='table-body-row' key={key}>
                <td>{property.address}</td>
                <td>{property.postcode}</td>
                <td>{property.address}</td>
                <td>{property.address}</td>
              </tr>
            )
          })
        })} */}
        <tbody>
          <tr className='table-body-row'>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr className='table-body-row'>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr className='table-body-row'>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
