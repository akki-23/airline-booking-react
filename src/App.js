import './App.css';
import Dashboard from './component/Dashboard';
import LoginPage from './component/LoginPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Admin from './component/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import EditUser from "./component/EditUser"
import BookedDetails from './component/BookedDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path to="/" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bookingdetails" component={BookedDetails}/>
          <Route path to="/admin" component={Admin} />
          <Route path="/users/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
