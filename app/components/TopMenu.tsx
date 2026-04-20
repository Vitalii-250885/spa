import Link from 'next/link'
import { Logo } from './icons/Logo'
import { SearchIcon } from './icons/SearchIcon'
import { CurrentDate } from './Date'

export const TopMenu = () => {
  return (
    <header className='navbar navbar-expand-lg bg-body-tertiary header'>
      <div className='container-fluid header__container-fluid'>
        <Link className='navbar-brand' href='/'>
          <Logo className='header__logo' />
          <span className='header__logo--text'>Flower SPA</span>
        </Link>
        <button
          className='header__search--button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <SearchIcon className='header__searchIcon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form className='d-flex' role='search'>
            <input
              className='form-control header__input'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
      <CurrentDate />
    </header>
  )
}
