import { Routes, Route  } from 'react-router-dom';
import { AuthProvider } from './Context/AppContext';
import './App.css';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import LinkPage from './Components/Dashboard/LinkPage';
import Socials from './Components/Dashboard/Socials';
import Links from './Pages/Links';
import Appearance from './Components/Dashboard/Appearance';
import Settings from './Components/Dashboard/Settings';
import Preview from './Pages/Preview';
import PrivateRoutes from './Routes/PrivateRoutes';


const App = () => {
  
  return (
  <div className='bg-gray-100 h-full'>
      <AuthProvider>
    <Routes>
    
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='login' element={<Login />} />
      <Route exact path='/:name' element={<Profile />} />
      <Route element={<PrivateRoutes />}>
      <Route exact path='preview' element={<Preview  />} />
      <Route exact path='dashboard' element={ <Dashboard   />}>
       
        <Route  path='links' element={<Links />} >
        <Route  index element={<LinkPage />} />
        <Route path='socials' element={<Socials />} />
        </Route>
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
