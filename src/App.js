import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Fscreen from './components/Screens/Fscreen';
import Profile from './components/Screens/Profile';
import NotAllowed from './components/Screens/NotAllowed';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import axios from './axios';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    }
    axios.get('/api/users', config)
      .then(res => {
        dispatch(Login({
          token: localStorage.getItem('token'),
          id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          imgURL: res.data?.imgURL
        }))
      })
      .catch(err => {
        console.log(err);
        dispatch(Logout());
        alert('You are having a problem please try again')
      })
  }, [dispatch])
  return (
    <div className="App">
      <Router>
      {!user ? (
        <Switch>
          <Route path="/profile">
            <NotAllowed />
          </Route>
          <Route path="/">
            <Fscreen />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/">
            <Header />
            <Body />
            <Footer />
          </Route>
        </Switch>
      )}
      </Router>
    </div>
  );
}

export default App;
