import { ChatBox, ChatHeader, ChattingSidebar, MessageContainer, SenderPreview } from "../components/chatting";

export default function Chatting() {
  return (
    <div className="flex flex-row m-auto"
      style={{height: '100vh'}}>
      <ChattingSidebar />
      <div className="flex flex-col flex-1">
        <ChatHeader/>
        <div className="flex flex-row flex-1">
          <div className="flex-1 flex flex-col" 
            style={{maxHeight: 'calc(100vh - 65px)' }}>
            <MessageContainer className="flex-grow"/>
            <ChatBox />
          </div>
          <SenderPreview />
        </div>
      </div>
    </div>
  )
}
