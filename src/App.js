import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import ErrorBoundTest from "./Components/ErrorBoundTest";
import Counter from "./Components/Counter";
import NotFound from "./Components/NotFound";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/test">Test Error Boundary</NavLink>
            </li>
            <li>
              <NavLink to="/error">Error 404</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/test" element={<ErrorBoundTest />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
