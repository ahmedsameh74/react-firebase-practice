import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const {user, authIsReady} = useAuthContext()
  return (
    <div className="App">
    {authIsReady && (
      <BrowserRouter>
      {user && <Sidebar/>}
        <div className="container">
        <Navbar/>
          <Switch>
            <Route exact path='/'>
            {user ? <Dashboard/> : <Redirect to='/signin'/>}
            </Route>
            <Route path='/create'>
            {user ? <Create/> : <Redirect to='/signin'/>}
            </Route>
            <Route path='/signin'>
            {!user ? <Signin/> : <Redirect to='/'/>}
            </Route>
            <Route path='/signup'>
            {!user ? <Signup/> : <Redirect to='/'/>}
            </Route>
            <Route path='/projects/:id'>
            {user ? <Project/> : <Redirect to='/signin'/>}
            </Route>
          </Switch>
        </div>
        {user && <OnlineUsers/>}
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
