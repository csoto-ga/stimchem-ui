import OperationTileList from './components/operation-tile-list';
import { useEffect, useState } from 'react';
import { Operation } from './types';

// const apiData = fetchData('/operations');
const Home = () => {
  const [ops, setOperations] = useState<Operation[]>([]);
  // const ops = apiData.read();
  useEffect(() => {
    const ops = getOperations();
    setOperations(ops);
  }, []);
  return <OperationTileList list={ops} />;
};

const getOperations = () => {
  return [
    {
      id: 1,
      name: 'Acidizing',
      processes: [
        'Corrosion',
        'Acid Dissolution',
        'Core Flood (PVBT)',
        'Acid Etching',
        'Sludge',
        'Emulsion Break',
        'Blend Compatibility',
      ],
    },
    {
      id: 2,
      name: 'Fluids',
      processes: [
        'Friction Reduction',
        'FR Viscosity',
        'Regainen Perm',
        'Break test',
        'Slot flow',
        'Scale loop',
        'Foam rheology',
        'Water analysis',
        'Hydration time',
        'Crossling test',
      ],
    },
    {
      id: 3,
      name: 'Sand Control',
      processes: [
        'Sieve Analysis',
        'Crush Resistance',
        'Sand Consolidation (UCS)',
        'PSD, sphericity, roundness',
      ],
    },
    {
      id: 4,
      name: 'Diverters',
      processes: ['Degradation Time', 'Fluid loss control', 'PSD'],
    },
    {
      id: 5,
      name: 'Surfactants',
      processes: ['Surface tension', 'Interfacial tension', 'Contact angle'],
    },
  ];
};

export default Home;
