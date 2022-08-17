import { Navigate, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsAuth } from "../store/slices/authSlice";

// import Login from "../pages/Login";
import Chat from "../pages/Chat";

// import RightColumn from "../components/RightColumn";

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isAuth ? (
          <Route path="/chat" element={<Chat />}>
            <Route path=":chatId" element={<RightColumn />} />
          </Route>
        ) : null}
        <Route
          path="*"
          element={<Navigate to={isAuth ? "/chat" : "/login"} />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
