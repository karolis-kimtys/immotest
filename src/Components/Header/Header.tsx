import './Header.css'
import immoLogo from '../../Assets/immo-logo.svg'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <img src={immoLogo} alt='logo' data-testid='logo' />
        <h1 data-testid='title'>Property search tool</h1>
      </div>
    </div>
  )
}
