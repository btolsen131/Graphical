import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router.tsx";

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;