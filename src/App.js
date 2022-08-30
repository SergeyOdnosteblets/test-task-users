import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllUsersId } from './components/AllUsersId';
import { User } from './pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<AllUsersId />} />
          <Route path="/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
