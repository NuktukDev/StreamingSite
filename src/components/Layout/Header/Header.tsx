import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import imgUrl from 'src/assets/images/profile-placeholder.jpg';
import './Header.css';

function Header() {
  const [sideMenuToggled, setSideMenuToggled] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());
  const formattedTime = time.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
  const menuIcon = sideMenuToggled ? faX : faBars;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* Methods */
  const handleSideMenuButtonClick = () => {
    setSideMenuToggled((prev) => !prev);
  };

  return (
    <header className="header text-center">
      <span className="header__currentTime fs-lg weight-300">{formattedTime}</span>
      <nav className="header__nav">
        <div className="header__nav__sideMenuContainer">
          <button
            type="button"
            className="fs-xl btn--clear color-accent"
            aria-expanded={sideMenuToggled}
            aria-label="side menu toggle"
            onClick={handleSideMenuButtonClick}
          >
            <FontAwesomeIcon icon={menuIcon} />
          </button>
          <aside
            className={`header__nav__sideMenu ${
              sideMenuToggled ? 'header__nav__sideMenu--active' : ''
            } z-index-1`}
          ></aside>
        </div>
        <ul className="header__nav__list text-center fs-md" role="list">
          <li role="listitem">
            <a href="#">Home</a>
          </li>
          <li role="listitem">
            <a href="#">TV Shows</a>
          </li>
          <li role="listitem">
            <a href="#">Movies</a>
          </li>
          <li role="listitem">
            <a href="#">My List</a>
          </li>
        </ul>
        <button
          type="button"
          className="header__nav__profileMenuButton btn--clear"
          aria-expanded="false"
          aria-label="profile menu toggle"
        >
          <img alt="profile picture" className="header__nav__profileImage" src={imgUrl} />
        </button>
      </nav>
    </header>
  );
}

export { Header };
