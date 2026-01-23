import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/app-layout.tsx";
import Home from "../pages/home.tsx";
import Experience from "../pages/experience.tsx";
import About from "../pages/about.tsx";
import Contact from "../pages/contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/experience", element: <Experience /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
