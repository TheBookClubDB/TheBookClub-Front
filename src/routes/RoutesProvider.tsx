import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormAutor from '../pages/FormAutor';
import Sidebar from '../components/Sidebar';
import NaoEncontrada from '../pages/NaoEncontrada';
import Tabela from '../components/Tabela/table';

function RoutesProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Sidebar pagina='' />,
    },
    {
      path: '/devolver',
      element: <div>Devolver</div>, 
    },
    {
      path: '/alugar',
      element: <div>Alugar</div>, 
    },
    {
      path: '/historico',
      element: <div>Histórico</div>, 
    },
    {
      path: '/adm',
      element: <div>Administrador</div>,
    },
    {
      path: '/criar-autor',
      element: <FormAutor />,
    },
    {
      path: '/criar-locatario',
      element: <div>Criar Locatário</div>, 
    },
    {
      path: '/criar-livro',
      element: <div>Criar Livro</div>, 
    },
    {
      path: '/geren-autor',
      element: <Tabela />,
    },
    {
      path: '/geren-locatario',
      element: <div>Gerenciar Locatários</div>, 
    },
    {
      path: '/geren-livro',
      element: <div>Gerenciar Livros</div>, 
    },
    {
      path: '*',
      element: <NaoEncontrada />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RoutesProvider;
