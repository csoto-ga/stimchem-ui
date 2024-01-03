import { createContext, useState } from 'react';

const OperationTileListCtx = createContext();

export const TOGGLE_TYPES = {
  CLOSE: '+',
  OPEN: '-',
};

export function OperationTileListProvider({ children }) {
  const [value, setValue] = useState(TOGGLE_TYPES.CLOSE);
  const [active, setActive] = useState(null);

  const toggle = () => {
    setValue(value === TOGGLE_TYPES.CLOSE ? TOGGLE_TYPES.OPEN : TOGGLE_TYPES.CLOSE);
  };

  return (
    <OperationTileListCtx.Provider value={{ value, active, setActive, toggle }}>
      {children}
    </OperationTileListCtx.Provider>
  );
}

export default OperationTileListCtx;
