import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoggingInForm from "./LogIn";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggingInForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
