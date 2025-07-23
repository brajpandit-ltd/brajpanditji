import React from "react";
import { StoreProvider, ThemeProvider } from "@/providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <StoreProvider>{children}</StoreProvider>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default RootProvider;
