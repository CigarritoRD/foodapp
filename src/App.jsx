import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout/Layout'
import CartContextProvider from './context/cartContext'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <CartContextProvider>
      <Layout />
      <ToastContainer autoClose={3000} />
    </CartContextProvider>
  )
}
export default App
