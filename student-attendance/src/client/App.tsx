import "./App.css";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import NavBar from "./components/AppBar/NavBar";
import AdminNav from "./components/AppBar/AdminNav";
import TeacherNav from "./components/AppBar/TeacherNav";

const App: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  let role = '';

  if (token) {
    const decodedToken: any = jwtDecode(token);
    role = decodedToken.role; // Access role information from decoded token
  }
  return (
    <div className="App">
      {
        !token ? (<NavBar />) : (
          role === 'admin' ? <AdminNav /> : (
            role === 'teacher' ? <TeacherNav /> : <NavBar />
          )
        )
      }
    </div>
  );
}

export default App;
