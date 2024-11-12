import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormAutor from '../pages/FormAutor';
import Sidebar from '../components/Sidebar';
import NaoEncontrada from '../pages/NaoEncontrada';
import Tabela from '../components/Tabela/table';

        
function RoutesProvider(){
  const router = createBrowserRouter([{
    path:'/',
    element:<Sidebar pagina=''/>
  },
  {
    path:'/devolver',
    element:<NaoEncontrada/>
  },
  {
    path:'/alugar',
    element:<NaoEncontrada/>
  },
  {
    path:'/historico',
    element:<NaoEncontrada/>
  },
  {
    path:'/adm',
    element:<NaoEncontrada/>
  },
  {
    path:'/criar-autor',
    element:<FormAutor/>
  },
  {
    path:'/criar-locatario',
    element:<NaoEncontrada/>
  },
  {
    path:'/criar-livro',
    element:<NaoEncontrada/>
  },
  {
    path:'/geren-autor',
feat/Tabela
    element:<Tabela/>
  },
  {
    path:'/geren-locatario',
    element:<NaoEncontrada/>
  },
  {
    path:'/geren-livro',
    element:<NaoEncontrada/>
  },
  {
    path:'*',
    element:<NaoEncontrada/>
  }])

  return(
    <RouterProvider router={router}/>
  )
}

export default RoutesProvider;