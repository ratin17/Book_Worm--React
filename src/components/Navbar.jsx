import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  function navStyle({ isActive}) {
    // Define your class conditionally based on the isActive prop.
    return isActive ? "bg-green-300 font-bold px-8 rounded" : "font-medium p-2";
  }

  const links = (
    <>
      <li>
        <NavLink to="/" className={navStyle}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks" className={navStyle}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages" className={navStyle}>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        
        <Link to="/" className="btn btn-ghost text-xl">Book Worm</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        <button className=" rounded-lg px-5 py-2 bg-green-500 text-white font-bold " >Sign In</button>
        <button className=" rounded-lg px-5 py-2 bg-cyan-400 text-white font-bold " >Sign Up</button>
      </div>

    </div>
  );
};

export default Navbar;
