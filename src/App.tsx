import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./routes/allRoutes";
import { AuthProvider } from "./contexts";

export function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </>
  );
}
