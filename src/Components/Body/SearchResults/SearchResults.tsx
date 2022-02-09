import './SearchResults.css'

// import checkIcon from '../../../Assets/check-icon.svg'

export default function SearchResults() {
  return (
    <div className='search-results'>
      <h3>Search results</h3>
      <table>
        <thead className='table-header'>
          <th className='table-check-input'>
            {/* <img className='table-check-icon' src={checkIcon} alt='' /> */}
            ✔️
          </th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Property type</th>
          <th>Number of rooms</th>
          <th>
            Floor area (m<sup>2</sup>)
          </th>
        </thead>

        <tr className='table-body-row'>
          <td className='table-check-input'>
            <input type='checkbox' />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr className='table-body-row'>
          <td className='table-check-input'>
            <input type='checkbox' />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr className='table-body-row'>
          <td className='table-check-input'>
            <input type='checkbox' />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  )
}
