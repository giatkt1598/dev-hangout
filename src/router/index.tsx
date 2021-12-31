import { useRoutes } from "react-router";
import Chatting from "../pages/Chatting";
import LoginPage from "../pages/LoginPage";
import TravelPage from "../pages/TravelPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <TravelPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }, {
      path: "/chat",
      element: <Chatting />
    }
  ])
}