import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {TestingContext} from "./components/testing/TestContext";
import {Register, PasswordReset} from "./components/userAuth";
import {About, Contact, Home, LandingPage} from "./pages";


const App =()=> {
              
  return (
              
              // <TestingContext />
              
    <Router>
      <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/resetpassword" component={PasswordReset} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/home" component={Home} />
      </Switch>
    </Router>

              
                
          
        )
          }
        
            

export default App;
