import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Registration, Login, Auth } from "@pages/auth";
import { AuthProvider, useAuth } from "@context/auth/AuthContext";
import { Dashboard } from "@pages/dashboard";

const ProtectedRoute = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/auth" />;
  }

  return <Dashboard />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/registration" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
