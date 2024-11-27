import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import CredentialSearch from "./components/CredentialSearch/CredentialSearch";
import LoginForm from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const noHeaderRoutes = ["/login", "/register"];

  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CredentialSearch />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
