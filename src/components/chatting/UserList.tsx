import UserItem from "./UserItem";

export default function UserList() {
  return (
    <div className="overflow-y-auto flex-1">
      {
        Array.from({length: 8}).map((_, idx) => (
          <UserItem key={idx}/>
        ))
      }
    </div>
  )
}
