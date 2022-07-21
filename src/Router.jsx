import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Auth/LoginForm";
import PasswordLostForm from "./Components/Auth/PasswordLostForm";
import PasswordResetForm from "./Components/Auth/PasswordResetForm";
import SinginForm from "./Components/Auth/SinginForm";
import Feed from "./Components/Feed/Feed";
import Photo from "./Components/Feed/Photo/Photo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import PhotoPostForm from "./Components/User/PhotoPostForm";
import Statistics from "./Components/User/Statistics/Statistics";
import UserProfile from "./Components/User/UserProfile";
import { UserStorage } from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

export default function Router() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <section className="content flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />}>
              <Route path="" element={<LoginForm />} />
              <Route path="singin" element={<SinginForm />} />
              <Route path="lost" element={<PasswordLostForm />}/>
              <Route path="reset" element={<PasswordResetForm />}/>
            </Route>
            <Route path="account" element={<ProtectedRoute element={<User />} />}>
              <Route path="" element={<Feed />} />
              <Route path="post" element={<PhotoPostForm />} />
              <Route path="analytics" element={<Statistics />} />
            </Route>
            <Route path="/photo/:id" element={<Photo />} />
            <Route path="/profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
