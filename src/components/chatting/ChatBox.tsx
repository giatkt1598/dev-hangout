import EmojiIcon from '@iconify/icons-ic/baseline-emoji-emotions';
import SendIcon from '@iconify/icons-ic/baseline-send';
import CloseIcon from '@iconify/icons-ic/close';
import ImageIcon from '@iconify/icons-ic/round-image';
import { Icon } from "@iconify/react";
import { createRef, useEffect, useState } from "react";
import IconButton from "../IconButton";
import EmojiPicker, { IEmojiData } from "emoji-picker-react";
import Popover from '../Popover';

const getBase64 = async (file: File)
  : Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  })
}

export default function ChatBox() {
  const [message, setMessage] = useState('');
  const fileInputRef = createRef<HTMLInputElement>();
  const messageInputRef = createRef<HTMLInputElement>();
  const [images, setImages] = useState<File[]>([]);
  
  const handleInputImageChange = (fileList: FileList | null) => {
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        setImages(p => [...p, fileList.item(i)!])
      }
    }
  }

  const handleRemoveImage = (idx: number) => {
    setImages(p => {
      p.splice(idx, 1);
      return [...p];
    })
  }

  const handleChooseEmoji = (e: any, data: IEmojiData) => {
    setMessage(p => {
      return p += data.emoji;
    })
    messageInputRef.current?.focus();
  }
  return (
    <div className="flex flex-col border-t border-gray-300">
      <div className="flex gap-4 p-2">
        {
          images.map((item, idx) => {
            return <ImageShow file={item} key={idx} 
              onRemove={() => handleRemoveImage(idx)}/>
          })
        }
      </div>
      <div className="flex gap-2 px-2 py-1">
        
        <Popover trigger={
          <IconButton>
            <Icon icon={EmojiIcon} width={24} height={24} />
          </IconButton>
        } position='top'
        onBeforeClose={() => messageInputRef.current?.focus()}
        >
          <EmojiPicker onEmojiClick={handleChooseEmoji} />
        </Popover>
        <input placeholder="Type a message"
          value={message}
          ref={messageInputRef}
          onChange={(e) => setMessage(e.target.value)}
          className="focus:outline-none w-full" />
        <input type="file" className="hidden"
          accept="image/*"
          multiple
          onChange={(e) => handleInputImageChange(e.target.files)}
          ref={fileInputRef} />
        <IconButton onClick={() => fileInputRef.current?.click()}>
          <Icon icon={ImageIcon} width={24} height={24} />
        </IconButton>
        <div className="border-l border-gray-200 pl-2">
          <IconButton>
            <Icon icon={SendIcon} width={24} height={24}
              className={`${message && 'text-purple-500'}`} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

const ImageShow = ({file, onRemove}: {
  file: File,
  onRemove:() => void}) => {
  const [src, setSrc] = useState<any>('');
  useEffect(() => {
    getBase64(file).then(rs => {
      setSrc(rs);
    })
  }, [file]);
  return <div className="relative">
    <img src={src} className="w-20 h-20 object-cover
              rounded-md"/>
    <IconButton className="absolute top-0 right-0"
      onClick={onRemove}>
      <Icon icon={CloseIcon} />
    </IconButton>
  </div>
}