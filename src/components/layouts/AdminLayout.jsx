import { SidebarProvider, SidebarTrigger } from "../ui/sidebar.jsx"
import  AppSidebar  from "../custom/AppSidebar.jsx"

const AdminLayout = ({children}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="sm:m-10">{children}</div>
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout