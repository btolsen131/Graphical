import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage.tsx";
import LoginPage from "../../pages/LoginPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/login",
    element: <LoginPage/>,
  }

]);

