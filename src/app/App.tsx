import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Welcome from '../pages/Welcome';
import SecureRoutes from '../secure/SecureRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/" element={<SecureRoutes page={<Welcome />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
