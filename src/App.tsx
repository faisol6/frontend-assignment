import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/css/variable.css";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import UserGroup from "./views/UserGroup";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user-group" element={<UserGroup />} />
        </Route>
      </Routes>
      </HashRouter>
  );
}

export default App;
