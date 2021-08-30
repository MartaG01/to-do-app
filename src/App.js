import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {About, Contact, Home, LandingPage, PasswordReset, Register, Policyterms} from "./pages";


const App =()=> {
              
  return (
              
    <Router>
      <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/resetpassword" component={PasswordReset} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/register/policyterms" component={Policyterms} />
      </Switch>
    </Router>

              
                
          
        )
          }
        
            

export default App;
