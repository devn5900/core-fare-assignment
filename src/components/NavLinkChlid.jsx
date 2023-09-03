import React from 'react'

const NavLinkChlid = ({title,child,link}) => {
  return (
    <li className="nav-item dropdown me-3 fs-5">
      <a className="nav-link dropdown-toggle" href={link} role="button" data-bs-toggle="dropdown" >
      {title}
      </a>
      <ul className="dropdown-menu">
        {
            child&&child.length>0&&child.map((el)=>{
               return <li><a className="dropdown-item " href={el.link}>{el.title}</a></li>
            })
        }
         </ul>
    </li>
  )
}

export default NavLinkChlid