import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { MailProvider, useMailer } from "./Context/MailProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { useMailer };

root.render(
  <StrictMode>
    <Router>
      <MailProvider>
        <App />
      </MailProvider>
    </Router>
  </StrictMode>
);
