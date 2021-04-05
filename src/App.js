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

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
      {!user ? (
        <Fscreen />
      ) : (
        <Switch>
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
