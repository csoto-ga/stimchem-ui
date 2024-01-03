import { Badge, Button, Dropdown } from 'react-daisyui';

const ProfileControl = () => {
  return (
    <Dropdown end>
      <Button tag="label" tabIndex={0} color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </Button>
      <Dropdown.Menu className="w-52 menu-sm mt-3 z-[10] p-2">
        <li>
          <a href="/" className="justify-between">
            Profile
            <Badge>New</Badge>
          </a>
        </li>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileControl;
