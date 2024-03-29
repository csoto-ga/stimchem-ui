import { Loading } from 'react-daisyui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Suspense, lazy } from 'react';
import CorrosionCreate from '@pages/experiments/corrosion/Create';

const Home = lazy(() => import('@pages/Home'));
const RequestForm = lazy(() => import('@pages/RequestForm'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="w-auto h-80 flex items-center justify-center">
            <Loading size="lg" variant="ring" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/experiment/corrosion/create" element={<CorrosionCreate />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
