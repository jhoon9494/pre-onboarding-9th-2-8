import { Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route path={'/main'} element={<Main />} />
    </Routes>
  );
};

export default Router;
