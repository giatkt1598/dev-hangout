import { fToNow } from "../../utils/dateFormat";
import UserAvatar from "./UserAvatar";

export default function UserItem() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - 15);
  const unread = false;
  return (
    <div className="flex flex-row gap-2 p-2
    hover:bg-blue-50 hover:bg-opacity-80 cursor-pointer">
      <UserAvatar />
      <div className="flex flex-col gap-2 overflow-hidden ">
        <div className="font-medium text-sm">
                Lucian Obrien
        </div>
        <div className="text-gray-400 text-xs whitespace-nowrap
        overflow-hidden text-ellipsis
         ">
                You: Message for your, hello world.
        </div>
      </div>
      <div className="flex flex-col justify-around items-end gap-2">
        <div className="text-gray-400 text-xs whitespace-nowrap">
          {fToNow(date)}
        </div>
        {
          unread ? <div className="w-2 h-2 rounded-full bg-blue-500" />
            : <div />
        }      
      </div>
    </div>
  )
}
