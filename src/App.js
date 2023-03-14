import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './screens/adminLogin';
import StudentLogin from './screens/studentLogin';
import SignUp from './screens/register';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import AddQuestion from './screens/addQuestion';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='adminLogin' element={<AdminLogin />} />
        <Route path='studentLogin' element={<StudentLogin />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='dashboard'>
          <Route index element={<Dashboard />} />
          <Route path='addQuestion' element={<AddQuestion />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
