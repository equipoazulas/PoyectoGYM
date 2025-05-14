import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import MembershipForm from './components/MembershipForm';
import UserList from './components/UserList';
import MembresiaList from './components/MembresiaList';
import Home from './components/Home';
import './index.css'; // o './App.css', según donde tengas el CSS


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/MembershipForm" element={<MembershipForm />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/MembresiaList" element={<MembresiaList />} />
      </Routes>
    </Router>
  );
}

export default App;
