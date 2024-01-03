import fetchData from '@utils/fetchData';
import OperationTileList from './components/operation-tile-list';

const apiData = fetchData('/operations');
const Home = () => {
  const ops = apiData.read();
  return <OperationTileList list={ops} />;
};

export default Home;
