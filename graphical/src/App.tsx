import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router.tsx";
import { Footer } from './components/footer.tsx'

function App() {

  return (
    <>
    <RouterProvider router={router} />
    <Footer/>
    </>
  )
}

export default App;
