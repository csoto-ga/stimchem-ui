import { Navbar, Button } from 'react-daisyui';
import DropdownMenu from './components/dropdown-menu';
import SearchControl from './components/search-control';
import ProfileControl from './components/profile-control';
import NotificationsControl from './components/notifications-control';

const Header = () => {
  return (
    <Navbar className="header">
      <Navbar.Start>
        <DropdownMenu />
      </Navbar.Start>
      <Navbar.Center>
        <Button tag="a" color="ghost" className="normal-case text-xl" href="/">
          StimChem Technology v0.1
        </Button>
      </Navbar.Center>
      <Navbar.End className="navbar-end">
        <SearchControl />
        <ProfileControl />
        <NotificationsControl />
      </Navbar.End>
    </Navbar>
  );
};

export default Header;
