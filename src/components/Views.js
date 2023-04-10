import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoggingInForm from "./LogIn";
import ForgotPassword from "./PasswordReset";
import CreateNewUser from "./Register";
import WelcomeBack from "./LandingPage";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggingInForm />} />
        <Route path="register" element={<CreateNewUser />} />
        <Route path="reset" element={<ForgotPassword />} />
        <Route path="landing" element={<WelcomeBack />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
