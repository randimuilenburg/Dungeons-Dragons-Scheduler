import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoggingInForm from "./LogIn";
import ForgotPassword from "./PasswordReset";
import CreateNewUser from "./Register";
import WelcomeBack from "./LandingPage";
import MainPage from "./MainPage";
// import LandingPage from "./LandingPage";
import Profile from "./Profile";
import Friends from "./Friends";
import UpcomingSessions from "./UpcomingSessions";
import LogOut from "./LogOut";
import Spenser from "./Spenser";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="profile" element={<Profile />} />
        <Route path="login" element={<LoggingInForm />} />
        <Route path="register" element={<CreateNewUser />} />
        <Route path="reset" element={<ForgotPassword />} />
        <Route path="landing" element={<WelcomeBack />} />
        {/* <Route path="/main" element={<LandingPage />} /> */}
        <Route path="home" element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="friends" element={<Friends />} />
        <Route path="upcomingsessions" element={<UpcomingSessions />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="/profiles/2" element={<Spenser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
