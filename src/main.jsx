import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")).render(


  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />

  </ErrorBoundary>

);
