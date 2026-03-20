import { NavLink } from 'react-router';

const ActiveRoutes = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-700 underline'
          : 'text-black hover:text-indigo-700 hover:underline'
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoutes;
