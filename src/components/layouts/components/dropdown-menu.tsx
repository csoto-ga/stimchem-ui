import { Button, Dropdown } from 'react-daisyui';

const DropdownMenu = () => {
  return (
    <Dropdown>
      <Button tag="label" color="ghost" shape="circle" tabIndex={0}>
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
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </Button>
      <Dropdown.Menu className="menu-sm w-52 mt-3 z-[10]">
        <Dropdown.Item href="/home">Home</Dropdown.Item>
        <Dropdown.Item href="/request">Request</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
