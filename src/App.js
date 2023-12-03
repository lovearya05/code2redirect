import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesServer from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesServer/>
    </BrowserRouter>
  );
}

export default App;
