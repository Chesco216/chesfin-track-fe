import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuItem } from "@/components/ui/sidebar"

export const AppSideBar = () => {
  return (
    <Sidebar className="bg-red-300 ">
      {/* <SidebarHeader /> */}
      <SidebarContent>
        <SidebarMenuItem>Pipipi 1</SidebarMenuItem>
        <SidebarMenuItem>Pipipi 2</SidebarMenuItem>
        <SidebarMenuItem>Pipipi 3</SidebarMenuItem>
      </SidebarContent>
    </Sidebar>
  )
}

