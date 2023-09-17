import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api";

// Configure the Redux store with reducers and middleware
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Use the API slice reducer provided by Redux Toolkit
  },
  middleware: (getDefault) => getDefault().concat(api.middleware), // Add API middleware for handling asynchronous actions
});

// Set up listeners for Redux Toolkit's query actions
setupListeners(store.dispatch);

// Create a React root element and render the main application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provide the Redux store to the entire application using the Provider component */}
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
);
