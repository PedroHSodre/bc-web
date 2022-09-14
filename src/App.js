import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoute from "./routes";
import "./styles.css";

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
