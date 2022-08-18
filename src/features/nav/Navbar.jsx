import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinksRef = useRef();
  const showNavLinks = () => {
    navLinksRef.current.classList.toggle('-translate-x-full');
  };
  return (
    <>
      <nav className='flex justify-between items-center py-2 px-5 bg-cyan-300'>
        <NavLink
          className='font-bold text-sky-900 text-xl cursor-pointer underline hover:underline-offset-4 decoration-sky-500'
          to='/'
          exact
        >
          Revents
        </NavLink>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 stroke-sky-700 sm:hidden'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={showNavLinks}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        <ul
          ref={navLinksRef}
          className='fixed top-0 left-0 h-screen w-screen bg-cyan-300 flex flex-col gap-y-5 justify-center items-center -translate-x-full transition duration-300 sm:relative sm:flex-row sm:gap-x-5 sm:bg-inherit sm:h-auto sm:justify-end sm:translate-x-0'
        >
          <li className='cursor-pointer' onClick={showNavLinks}>
            <NavLink
              to='/create-event'
              exact
              activeClassName='underline underline-offset-4 decoration-sky-500'
            >
              Create Event
            </NavLink>
          </li>
          <li className='cursor-pointer' onClick={showNavLinks}>
            <NavLink
              to='/login'
              exact
              activeClassName='underline underline-offset-4 decoration-sky-500'
            >
              Login
            </NavLink>
          </li>
          <li className='cursor-pointer' onClick={showNavLinks}>
            <NavLink
              to='/register'
              exact
              activeClassName='underline underline-offset-4 decoration-sky-500'
            >
              Register
            </NavLink>
          </li>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 mt-5 sm:hidden'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            onClick={showNavLinks}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
