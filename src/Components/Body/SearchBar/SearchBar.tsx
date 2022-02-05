import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <h3>Search</h3>
      <div className='search-bar-container'>
        <input type='search' placeholder='Address' />
        <button>Search</button>
      </div>
    </div>
  )
}
