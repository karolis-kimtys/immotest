import './SearchResults.css'

export default function SearchResults() {
  return (
    <div className='search-results'>
      <h3>Search results</h3>
      <table>
        <tr className='table-header'>
          <th className='table-checkbox'>✔️</th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Property type</th>
          <th>Number of rooms</th>
          <th>
            Floor area (m<sup>2</sup>)
          </th>
        </tr>
        <tr className='table-body-row'>
          <td className='table-checkbox'>
            <input type='checkbox' />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr className='table-body-row'>
          <td className='table-checkbox'>
            <input type='checkbox' />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr className='table-body-row'>
          <td className='table-checkbox'>
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
