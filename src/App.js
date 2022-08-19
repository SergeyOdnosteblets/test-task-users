import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllUsersId } from './components/AllUsersId';
import { UserPage } from './pages/UserPage/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AllUsersId />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
