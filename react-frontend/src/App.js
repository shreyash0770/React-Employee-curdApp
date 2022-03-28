import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderCompnent from './components/HeaderCompnent';
import FooterCompnent from './components/FooterCompnent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
       
        <HeaderCompnent/>
          <div className="container">
            <Switch>
                <Route path="/" exact component = {ListEmployeeComponent}></Route>
                <Route path="/employees" component = {ListEmployeeComponent}></Route>
                <Route path="/add-employee" component = {CreateEmployeeComponent}></Route>     
                <Route path="/update-employee/:id" component = {UpdateEmployeeComponent}></Route>   
                <Route path="/view-employee/:id" component = {ViewEmployeeComponent}></Route>     
            </Switch>
          </div>
        <FooterCompnent/>
        
      </Router>
    </div>

    
  );
}

export default App;
