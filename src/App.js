import "./styles.css";
import { Route, Routes } from "react-router-dom";
import InboxPage from "./Pages/Inbox";
import SpamPage from "./Pages/Spam";
import TrashPage from "./Pages/Trash";
import MailPage from "./Pages/Mail";
import Header from "./Components/Header";
// import Heading from "./Components/Heading";

export default function App() {
  return (
    <div className="App">
      {/* <h1 style={{ textAlign: "center" }}>NEOG-MAIL</h1> */}
      <div className="mail-box">
        <Header />
        <div>
          {/* <h1 style={{ color: "black", textAlign: "center" }}>TMail</h1> */}
          <Routes>
            <Route path="/" element={<InboxPage />} />
            <Route path="/spam" element={<SpamPage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/mail/:mailId" element={<MailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
