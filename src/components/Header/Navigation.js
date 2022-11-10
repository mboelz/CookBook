import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burgerMenue from '../../Assets/img/burger-menu.png';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isOpen = showMenu ? '' : 'hidden';

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div>
        <img
          onClick={clickHandler}
          src={burgerMenue}
          alt="Menue"
          className="w-10"
        />
      </div>

      <div
        className={`fixed ${isOpen} left-6 top-6 w-2/3 bg-black text-white text-xl font-bold border-solid border-2 border-[#E27396]`}
      >
        <div className="text-right mt-4">
          <span className="text-xl p-4" onClick={clickHandler}>
            X
          </span>
        </div>
        <ul>
          <li className="p-4">
            <Link onClick={clickHandler} to="/">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link onClick={clickHandler} to="/recipes">
              Alle Rezepte
            </Link>
          </li>
          <li className="p-4">
            <Link onClick={clickHandler} to="/impressum">
              Impressum
            </Link>
          </li>
          <li className="p-4">
            <Link onClick={clickHandler} to="contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

{
  /* wider screens */
}
{
  /* <div className="flex hidden">
        <Link to="/">Home</Link>
        <Link to="/recipes">Alle Rezepte</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="contact">Kontakt</Link>
      </div> */
}
