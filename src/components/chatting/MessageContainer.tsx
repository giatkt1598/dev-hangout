import { HTMLAttributes } from "react";
import MessageItem from "./MessageItem";
import Scrollbar from 'simplebar-react'
export default function MessageContainer({
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  const now = new Date();
  now.setHours(now.getHours() - 2);
  const messages = [
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'Alex',
      sentTime: now,
      messageRole: 'sender',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    },
    {
      avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
      username: 'You',
      sentTime: now,
      messageRole: 'receiver',
      message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.'
    }
  ]
  return (
    <div {...other} className={`${className ?? ''}
    p-2 
    `}>
      <Scrollbar style={{maxHeight: 600}}>
        {
          messages.map((message, idx) => (
            <MessageItem data={message} key={idx}/>
          ))
        }
      </Scrollbar>
    </div>
  )
}
