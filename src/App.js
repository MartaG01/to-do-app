import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {TestingContext} from "./components/testing/TestContext";
import LandingPage from "./pages/landingPage/landingPage";
import {Register} from "./components/userAuth";
import About from "./pages/about/aboutPage";
import Contact from "./pages/contact/contactPage";
import PasswordReset from "./components/userAuth/PasswordReset";
import Home from "./pages/homePage/homePage";


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
