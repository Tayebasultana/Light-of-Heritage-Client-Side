import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import ArtifactDetail from "../pages/ArtifactDetail";
import Update from "../components/Update";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import History from "../pages/History";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/all-artifacts",
            element:<AllArtifacts></AllArtifacts>,
            loader: () => fetch('https://assignment-eleven-server-side-phi.vercel.app/artifacts')
        },
        {
            path:"/add-artifacts",
            element:<PrivetRoute><AddArtifacts></AddArtifacts></PrivetRoute>
        },
        {
            path: "/bangladesh-history",
            element: <History></History>
        },
        {
            path:"/my-artifacts",
            element:<PrivetRoute><MyArtifacts></MyArtifacts></PrivetRoute>
        },
        {
            path:"/liked-artifacts",
            element:<PrivetRoute><LikedArtifacts></LikedArtifacts></PrivetRoute>,
            loader:({params}) => fetch(`https://assignment-eleven-server-side-phi.vercel.app/liked-artifacts/${params.email}`)
        },
        {
            path:"/artifacts/:id",
            element:<PrivetRoute><ArtifactDetail></ArtifactDetail></PrivetRoute>,
            loader:({params}) => fetch(`https://assignment-eleven-server-side-phi.vercel.app/artifacts/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<Update></Update>,
            loader: ({params}) => fetch(`https://assignment-eleven-server-side-phi.vercel.app/artifacts/${params.id}`)
        },
      ]
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    }
  ]);

  export default router;