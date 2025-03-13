import { Outlet } from "react-router-dom";
import LangButton from "./src/components/LangButton/LangButton.jsx";

const SharedLayout = () => {
  return (
    <div>
      <LangButton/>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
