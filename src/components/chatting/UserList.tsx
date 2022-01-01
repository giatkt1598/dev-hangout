import UserItem from "./UserItem";
import SimplebarReact from 'simplebar-react'

export default function UserList() {
  return (
    <div className="flex-1 ">
      <SimplebarReact style={{maxHeight: 'calc(100vh - 197px)'}}>
        {
          Array.from({length: 20}).map((_, idx) => (
            <UserItem key={idx}/>
          ))
        }
      </SimplebarReact>
    </div>
  )
}
