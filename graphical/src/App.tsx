import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router.tsx";
import { Menu } from "./components/menu.tsx"
import { Footer } from './components/footer.tsx'

function App() {

  return (
    <>
      <Menu/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App;
