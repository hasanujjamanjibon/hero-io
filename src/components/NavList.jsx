import { Link } from 'react-router';
import ActiveRoutes from './ActiveRoutes';

const NavList = () => {
  const ListItem = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/apps',
      label: 'Apps',
    },
    {
      path: '/installation',
      label: 'Installation',
    },
  ];
  return (
    <>
      {ListItem.map((item) => (
        <ActiveRoutes key={item?.path} to={item?.path} className='font-medium'>
          {item?.label}
        </ActiveRoutes>
      ))}
    </>
  );
};

export default NavList;
