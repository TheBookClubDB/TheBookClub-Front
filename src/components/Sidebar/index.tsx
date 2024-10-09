import { ConfigProvider, Menu, MenuProps } from 'antd';
import styles from './sidebar.module.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface paginaAtual {
    pagina: string
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Aluguéis',
    children: [
      { key: '1', label: (
        <NavLink to={'/devolver'}>
          Devolver 
        </NavLink>
      )},
      { key: '2', label: (
        <NavLink to={'/alugar'}>
          Alugar
        </NavLink>
      )},
      { key: '3', label: (
        <NavLink to={'/historico'}>
          Ver Histórico 
        </NavLink>
      )},
    ],
  },
  {
    key: 'sub2',
    label: 'Cadastros',
    children: [
      { key: '4', label: (
        <NavLink to={'/criar-autor'}>
          Autores 
        </NavLink>
      )},
      { key: '5', label: (
        <NavLink to={'/criar-locatario'}>
          Locatários
        </NavLink>
      )},
      { key: '6', label: (
        <NavLink to={'/criar-livro'}>
          Livros 
        </NavLink>
      )},
    ],
  },
  {
    key: 'sub3',
    label: 'Gerenciar',
    children: [
      { key: '7', label: (
        <NavLink to={'/geren-autor'}>
          Autores 
        </NavLink>
      )},
      { key: '8', label: (
        <NavLink to={'/geren-locat'}>
          Autores 
        </NavLink>
      )},
      { key: '9', label: (
        <NavLink to={'/geren-autor'}>
          Livros 
        </NavLink>
      )}
    ],
  }
];

const Sidebar = ({pagina}: paginaAtual) => {
  const [selectedTab, setSelectedTab] = useState('0')
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const paginaSelecionada = (pagina: string) => {
    switch (pagina) {
    case 'aDevol':
      setOpenKeys(['sub1'])
      setSelectedTab('1');
      break;
    case 'aAlug':
      setOpenKeys(['sub1'])
      setSelectedTab('2');
      break;
    case 'aHist':
      setOpenKeys(['sub1'])
      setSelectedTab('3');
      break;
    case 'cAutor':
      setOpenKeys(['sub2'])
      setSelectedTab('4');
      break;
    case 'cLocat':
      setOpenKeys(['sub2'])
      setSelectedTab('5');
      break;
    case 'cLivro':
      setOpenKeys(['sub2'])
      setSelectedTab('6');
      break;
    case 'gAutor':
      setOpenKeys(['sub3'])
      setSelectedTab('7');
      break;
    case 'gLocat':
      setOpenKeys(['sub3'])
      setSelectedTab('8');
      break;
    case 'gLivro':
      setOpenKeys(['sub3'])
      setSelectedTab('9');
      break;
    default:
      setOpenKeys([])
      setSelectedTab('0');
      break;
    }
  }

  useEffect(() => {
    paginaSelecionada(pagina)
  }, [pagina])

  return(
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorTextSecondary: '#ff3',
            itemSelectedBg: '#850F8D',
            itemSelectedColor: '#fff',
            itemColor: '#000',
            itemBg: '#fef3ff',        
          }
        }
      }}
    >
      <Menu
        className={styles.sidebarContainer}
        onOpenChange={setOpenKeys}
        openKeys={openKeys}
        selectedKeys={[selectedTab]}
        mode="inline"
        items={items}
      />
    </ConfigProvider>
  )
}

export default Sidebar;