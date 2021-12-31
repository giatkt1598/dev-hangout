import { fToNow } from "../../utils/dateFormat";

interface MessageItemProps {
    data: {
        avatarUrl: string,
        username: string,
        sentTime: Date,
        message: string,
        messageRole: 'sender' | 'receiver' | string,
    }
}
export default function MessageItem({
  data: {
    avatarUrl,
    message,
    sentTime,
    username,
    messageRole
  }
}: MessageItemProps) {
  const isSender = messageRole == 'sender';
  return (
    <div className={`flex flex-row gap-2 mb-6 ${!isSender && 'justify-end items-end'}`}>
      {
        isSender && <div>
          <img className="w-10 object-cover rounded-full"
            src={avatarUrl} />
        </div>
      }
      <div className="flex flex-col gap-2">
        <div className={`text-gray-400 text-xs ${!isSender && 'text-right'}`}>
          {isSender ? `${username}, ${fToNow(sentTime, true)}`
            : fToNow(sentTime, true)}
        </div>

        <div className={`rounded-xl p-3 max-w-xs text-sm tracking-wide
        ${isSender ? 'bg-zinc-100' : 'bg-green-200'}`}>
          {message}
        </div>
      </div>
    </div>
  )
}
