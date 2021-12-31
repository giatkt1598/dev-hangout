import SearchBox from "./SearchBox";
import SidebarHeader from "./SidebarHeader";
import UserList from "./UserList";

export default function ChattingSidebar() {
  return (
    <div className="h-full border-r-2 w-72 flex flex-col gap-4">
      <SidebarHeader />
      <SearchBox />
      <UserList />
    </div>
  )
}
