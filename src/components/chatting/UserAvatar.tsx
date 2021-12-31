import { HTMLAttributes } from "react"

export default function UserAvatar({
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-12 relative cursor-pointer ${className ?? ''}`} {...other}>
      <img src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
        className=" object-cover rounded-full" style={{width: 'inherit'}} />
      <OnlineStatus online />
    </div>
  )
}

const OnlineStatus = ({online}: {online?: boolean}) => (
  <div className={`absolute bottom-1 right-0.5 w-2.5 h-2.5 
  rounded-full ${online ? 'bg-green-400' : 'bg-yellow-400'} z-10`} />
)