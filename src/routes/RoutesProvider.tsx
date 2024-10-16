import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormAutor from '../pages/FormAutor';
import Sidebar from '../components/Sidebar';

function RoutesProvider(){
  const router = createBrowserRouter([{
    path:'/',
    element:<Sidebar pagina=''/>
  },
  {
    path:'/devolver',
    element:<text>Devolver</text>
  },
  {
    path:'/alugar',
    element:<text>Alugar</text>
  },
  {
    path:'/historico',
    element:<text>Histórico</text>
  },
  {
    path:'/adm',
    element:<div>Administrador</div>
  },
  {
    path:'/criar-autor',
    element:<FormAutor/>
  },
  {
    path:'/criar-locatario',
    element:<text>Criar Locatário</text>
  },
  {
    path:'/criar-livro',
    element:<text>Criar Livro</text>
  },
  {
    path:'/geren-autor',
    element:<text>Gerenciar Autores</text>
  },
  {
    path:'/geren-locatario',
    element:<text>Gerenciar Locatários</text>
  },
  {
    path:'/geren-livro',
    element:<text>Gerenciar Livros</text>
  },
  {
    path:'*',
    element:<text>Pagina não encontrada</text>
  }])

  return(
    <RouterProvider router={router}/>
  )
}

export default RoutesProvider;