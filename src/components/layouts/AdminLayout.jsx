import { SidebarProvider, SidebarTrigger } from "../ui/sidebar.jsx"
import  AppSidebar  from "../custom/AppSidebar.jsx"

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/* {children} */}
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout