import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllUserIds } from './components/AllUserIds';
import { User } from './pages/User/User';
import { DAL } from './setupDAL';

function App() {
  DAL();
  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<AllUserIds />} />
          <Route path="/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
