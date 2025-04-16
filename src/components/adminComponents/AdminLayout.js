import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSiderbar";
const AdminLayout = () => {
 return <> 
 <AdminSidebar/>
 <Outlet/>
 </>
} 

export default AdminLayout;