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
            loader: () => fetch('http://localhost:5000/artifacts')
        },
        {
            path:"/add-artifacts",
            element:<AddArtifacts></AddArtifacts>
        },
        {
            path:"/my-artifacts",
            element:<MyArtifacts></MyArtifacts>
        },
        {
            path:"/liked-artifacts",
            element:<LikedArtifacts></LikedArtifacts>,
            loader:({params}) => fetch(`http://localhost:5000/liked-artifacts/${params.email}`)
        },
        {
            path:"/artifacts/:id",
            element:<ArtifactDetail></ArtifactDetail>,
            loader:({params}) => fetch(`http://localhost:5000/artifacts/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<Update></Update>,
            loader: ({params}) => fetch(`http://localhost:5000/artifacts/${params.id}`)
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