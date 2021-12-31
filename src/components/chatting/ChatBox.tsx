import IconButton from "../IconButton";
import { Icon } from "@iconify/react";
import EmojiIcon from '@iconify/icons-ic/baseline-emoji-emotions'
import SendIcon from '@iconify/icons-ic/baseline-send'
import ImageIcon from '@iconify/icons-ic/round-image';
import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState('');
  return (
    <div className="flex gap-2 border-t border-gray-300 px-2 py-1">
      <IconButton>
        <Icon icon={EmojiIcon} width={24} height={24} />
      </IconButton>
      <input placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="focus:outline-none w-full" />
      <IconButton>
        <Icon icon={ImageIcon} width={24} height={24} />
      </IconButton>
      <div className="border-l border-gray-200 pl-2">
        <IconButton>
          <Icon icon={SendIcon} width={24} height={24}
            className={`${message && 'text-purple-500'}`} />
        </IconButton>
      </div>
    </div>
  )
}
