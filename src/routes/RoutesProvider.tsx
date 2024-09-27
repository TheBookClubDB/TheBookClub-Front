import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormAutor from "../pages/FormAutor";

function RoutesProvider (){
    const router = createBrowserRouter([{
        path:"/", 
        element:<><text>Home</text></>
    },
    {
        path:"/sobre",
        element:<>Sobre</>
    },
    {
        path:"/contato",
        element:<text>Contato</text>
    },
    {
        path:"/adm",
        element:<div>Administrador</div>
    },
    {
        path:"/criar-autor",
        element:<FormAutor/>
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