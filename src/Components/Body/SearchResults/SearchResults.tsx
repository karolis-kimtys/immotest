import './SearchResults.css'
import { useGlobalContext } from '../../../Context/Context'

export default function SearchResults() {
  const {
    isSelectedType,
    isProperties,
    isSearchError,
    isSelectedProperties,
    setIsSelectedProperties,
    isLoading
  } = useGlobalContext()

  const addProperty = (property: any) => {
    let tempList: any = [...isSelectedProperties]

    tempList.push(property)

    setIsSelectedProperties(tempList)

    return null
  }

  return (
    <div className='search-results'>
      <h3>Search Results</h3>
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
          {isLoading ? (
            <tr className='table-body-row'>
              <td>
                <p>Loading...</p>
              </td>
            </tr>
          ) : (
            !isSearchError &&
            Object.values(isProperties).map((property: any, key: number) => {
              return isSelectedType === property.propertyType ? (
                <tr key={key} className='table-body-row'>
                  <td
                    className='table-check-input icon'
                    onClick={() => {
                      addProperty(property)
                    }}>
                    {isSelectedProperties.findIndex(
                      (x: any) => x.id === property.id
                    ) === -1 && <div>➕</div>}
                  </td>
                  <td>{property.address}</td>
                  <td>{property.postcode}</td>
                  <td>{property.numberOfRooms}</td>
                  <td>{property.floorArea}</td>
                </tr>
              ) : (
                isSelectedType === 'all' && (
                  <tr key={key} className='table-body-row'>
                    <td
                      className='table-check-input icon'
                      onClick={() => {
                        addProperty(property)
                      }}>
                      {isSelectedProperties.findIndex(
                        (x: any) => x.id === property.id
                      ) === -1 && <div>➕</div>}
                    </td>
                    <td>{property.address}</td>
                    <td>{property.postcode}</td>
                    <td>{property.numberOfRooms}</td>
                    <td>{property.floorArea}</td>
                  </tr>
                )
              )
            })
          )}

          {isSearchError && (
            <tr className='table-body-row'>
              <td>
                Issue fetching list of properties. Please refresh the page and
                try again!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
