import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LoginForm from "./Components/login/LoginForm";
import SinginForm from "./Components/login/SinginForm";
import { UserStorage } from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/user";

export default function Router() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="conta" element={<User />}>
              
            </Route>
            <Route path="login" element={<Login />}>
              <Route path="" element={<LoginForm />} />
              <Route path="criar" element={<SinginForm />} />
            </Route>
            <Route
              path="*"
              element={
                <h1 className="mt-16 text-4xl">Página não encontrada</h1>
              }
            />
          </Routes>
        </section>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
