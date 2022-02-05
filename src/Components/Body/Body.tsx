import './Body.css'
import PropertyTypes from './PropertyTypes/PropertyTypes'
import SearchBar from './SearchBar/SearchBar'
import SelectedProperties from './SelectedProperties/SelectedProperties'
import SearchResults from './SearchResults/SearchResults'

export default function Body() {
  return (
    <div className='flex-container-row'>
      <PropertyTypes />
      <div className='flex-container-column'>
        <SearchBar />
        <SelectedProperties />
        <SearchResults />
      </div>
    </div>
  )
}
