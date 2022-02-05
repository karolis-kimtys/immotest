import './SelectedProperties.css'

export default function SelectedProperties() {
  return (
    <div className='selected-properties'>
      <h3>Selected Properties</h3>
      <table>
        <tr className='table-header'>
          <th>Address</th>
          <th>Postcode</th>
          <th>Number of rooms</th>
          <th>
            Floor area (m<sup>2</sup>)
          </th>
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
        <tr className='table-body-row'>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  )
}
