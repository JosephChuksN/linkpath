import { Routes, Route  } from 'react-router-dom';
import { AuthProvider } from './Context/AppContext';
import './App.css';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import VerificationSuccess from './Pages/VerificationSuccess';
import FailedVerification from './Pages/FailedVerification';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import LinkPage from './Components/Dashboard/Links/LinkPage';
import Appearance from './Components/Dashboard/Appearance/Appearance';
import Settings from './Components/Dashboard/Settings/Settings';
import Preview from './Pages/Preview';
import PrivateRoutes from './Routes/PrivateRoutes';




const App = () => {
  // 
  return (
  <div className=''>
      <AuthProvider>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='login' element={<Login />} />
      <Route exat path='forgotpassword' element={<ForgotPassword />} />
      <Route exact path='resetpassword/:id/:token' element={<ResetPassword />} />
      <Route exact path='verify/:id/user/:token' element={<VerificationSuccess />} />
      <Route exact path='verify/invalid/:id/user/:token' element={<FailedVerification />} />
      <Route exact path='*' element={<FailedVerification />} />
      <Route exact path='/:username' element={<Profile />} />
      <Route element={<PrivateRoutes />}>
      <Route exact path='preview' element={<Preview  />} />
      <Route exact path='dashboard' element={ <Dashboard   />}>
        <Route  index element={<LinkPage />} />
        <Route  path='/dashboard/appearance' element={<Appearance />} />
        <Route  path='/dashboard/settings' element={<Settings />}/>
      </Route>
      </Route>
    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
