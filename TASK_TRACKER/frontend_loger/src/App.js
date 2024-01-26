import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import ShowLogger from "./components/ShowLogger";
import CreateLogger from "./components/CreateLogger";
import PrivateRoutes from "./utils/ ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/show" element={<ShowLogger />} />
          <Route path="/add" element={<CreateLogger />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
