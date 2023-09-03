import React, { useEffect, useState } from "react";
import { data } from "../utils/data";
import NavLinkChlid from "./NavLinkChlid";
const NavLink = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <ul
      className="navbar-nav me-auto my-2 my-lg-0"
      style={{ "--bs-scroll-height": "100px" }}
    >
      {items &&
        items.length > 0 &&
        items.map((el) => {
            if (el.child.length > 0) {
              return <NavLinkChlid child={el.child} link={el.link} title={el.title} />;
          } else {
            return (
              <li className="nav-item me-3  ">
                <a className="nav-link active fs-5" aria-current="page" href={el.link}>
                  {el.title}
                </a>
              </li>
            );
          }
        })}
    </ul>
  );
};

export default NavLink;
