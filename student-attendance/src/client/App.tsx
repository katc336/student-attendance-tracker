import "./App.css";
import { useSelector } from "react-redux";
import NavBar from "./components/AppBar/NavBar";
import AdminNav from "./components/AppBar/AdminNav";

const App: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  return (
    <div className="App">
      {
        !token ? (<NavBar />) : (<AdminNav />)
      }
    </div>
  );
}

export default App;
