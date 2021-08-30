import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/App";
import "./css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./store";
import "moment/locale/fr";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="bottom-center"
    >
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
