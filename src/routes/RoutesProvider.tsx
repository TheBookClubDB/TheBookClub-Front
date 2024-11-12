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
      element: <div>Devolver</div>, // substituído <text> por <div>
    },
    {
      path: '/alugar',
      element: <div>Alugar</div>, // substituído <text> por <div>
    },
    {
      path: '/historico',
      element: <div>Histórico</div>, // substituído <text> por <div>
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
      element: <div>Criar Locatário</div>, // substituído <text> por <div>
    },
    {
      path: '/criar-livro',
      element: <div>Criar Livro</div>, // substituído <text> por <div>
    },
    {
      path: '/geren-autor',
      element: <Tabela />,
    },
    {
      path: '/geren-locatario',
      element: <div>Gerenciar Locatários</div>, // substituído <text> por <div>
    },
    {
      path: '/geren-livro',
      element: <div>Gerenciar Livros</div>, // substituído <text> por <div>
    },
    {
      path: '*',
      element: <NaoEncontrada />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RoutesProvider;