import { Icon } from "@iconify/react";
import IconButton from "../IconButton";
import UserAvatar from "./UserAvatar";
import CallIcon from '@iconify/icons-ic/baseline-call'
import VideoIcon from '@iconify/icons-ic/baseline-videocam'
import MenuIcon from '@iconify/icons-ic/baseline-more-vert'

export default function ChatHeader() {
  return (
    <div className="border-b border-solid border-gray-300 w-full px-4 py-2
    flex flex-row justify-between">
      <div className="flex flex-row gap-4">
        <UserAvatar className="w-10" />
        <div className="flex flex-col justify-between">
          <div className="font-medium">
                  Deja Brady
          </div>
          <div className="text-sm text-gray-400">
                  Online
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div>
          <IconButton>
            <Icon icon={CallIcon} width={24} height={24} />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon icon={VideoIcon} width={24} height={24} />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon icon={MenuIcon} width={24} height={24} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
