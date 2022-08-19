import { Route, Routes } from "react-router-dom";

import ChatPage from "../../pages/ChatPage";
import LoginPage from "../../pages/LoginPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat/*" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
