import { NavLink } from 'react-router-dom'

const NavItem = ({ children, link }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          'hover:text-yellow-400 duration-150 cursor-pointer active:font-bold ' +
          (isActive ? 'font-bold text-yellow-400' : '')
        }
        to={link}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem
