import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';


function Navbar() {

  const { user, logout } = useContext(AuthContext);
  const userCommunity = user?.community?.id || user?.community;

  return (
    <>
      <nav className="bg-white border-gray-500 dark:bg-gray-900 sticky top-0 z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {(user?.id) ? (
            <Link to={`/communities/${userCommunity}`} className="flex items-center">
              <img src="/images/vecinity-logo2.png" className="h-14 mr-3" alt="Vecinity Logo" />
              <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent">Vecinity App</span>
            </Link>

          ) : (
            <Link to="/" className="flex items-center">
              <img src="/images/vecinity-logo2.png" className="h-14 mr-3" alt="Vecinity Logo" />
              <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent">Vecinity App</span>
            </Link>
          )}
          {(user?.id) ? (
            <div className="flex items-center md:order-2 me-3">
              <img className="w-11 h-11 rounded-full" src={user.imageUrl} alt="userphoto" />
            </div>

          ) : (
            <>
            </>
          )}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {(user?.community) ? (
                <>
                  <li to="/profile" className="block py-2 px-10  mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    <h1>Welcome {user.name}</h1>
                  </li>
                  <NavLink to={`/communities/${userCommunity}`} className="block py-2  px-6 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    My community
                  </NavLink>
                  <li className="block py-2 px-6 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    <button onClick={() => logout()} >Log out</button>
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="block py-2 px-8 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    Log in
                  </NavLink>
                  <NavLink to="/signup" className="block py-2 px-8 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    Sign up
                  </NavLink>
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;




