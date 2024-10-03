import { HomeIcon, CameraIcon, ImageIcon, PhoneIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Tjanster from "./pages/Tjanster.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Kontakt from "./pages/Kontakt.jsx";

export const navItems = [
  {
    title: "Hem",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Tjänster",
    to: "/tjanster",
    icon: <CameraIcon className="h-4 w-4" />,
    page: <Tjanster />,
  },
  {
    title: "Portfolio",
    to: "/portfolio",
    icon: <ImageIcon className="h-4 w-4" />,
    page: <Portfolio />,
  },
  {
    title: "Kontakt",
    to: "/kontakt",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Kontakt />,
  },
];