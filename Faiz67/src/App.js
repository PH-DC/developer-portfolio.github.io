import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Projects } from "./components/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Acadamics } from './components/Acadamics';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar />
            <Main />
          </Route>
          <Route exact path="/projects">
            <Navbar/>
            <Projects />
          </Route>
          <Route exact path="/acadamics">
            <Navbar/>
            <Acadamics/>
          </Route>
          <Route exact path="/contact">
            <Navbar/>
            <Contact/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
