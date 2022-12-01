import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import routes from "./routers/routes";

function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
