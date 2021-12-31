import UserItem from "./UserItem";
import SimplebarReact from 'simplebar-react'

export default function UserList() {
  return (
    <div className="flex-1 ">
      <SimplebarReact style={{maxHeight: 600}}>
        {
          Array.from({length: 20}).map((_, idx) => (
            <UserItem key={idx}/>
          ))
        }
      </SimplebarReact>
    </div>
  )
}
