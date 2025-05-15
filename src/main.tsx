import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./data/store.ts";
import { Provider } from "react-redux";
import Modal from "./components/Dialog/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </StrictMode>
);
