import { createBrowserRouter } from "react-router-dom";
import DropzoneArea from "../components/DropZoneArea";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DropzoneArea />,
  },
  
]);

export default router;
