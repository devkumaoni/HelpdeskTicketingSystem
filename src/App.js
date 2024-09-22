import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyEngineer from "./pages/ApplyEngineer";
import NotificationPage from "./pages/NotificationPage";
<<<<<<< HEAD
import Users from "./pages/admin/Users";
import Engineers from "./pages/admin/Engineers";
=======
>>>>>>> 219f30bae00aef90703c01fd1c9a7feb7a638dbf
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apply-engineer"
              element={
                <ProtectedRoute>
                  <ApplyEngineer />
                </ProtectedRoute>
              }
            />{" "}
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
<<<<<<< HEAD
              <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
             <Route
              path="/admin/engineers"
              element={
                <ProtectedRoute>
                  <Engineers />
                </ProtectedRoute>
              }
            />
=======
>>>>>>> 219f30bae00aef90703c01fd1c9a7feb7a638dbf
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />{" "}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
