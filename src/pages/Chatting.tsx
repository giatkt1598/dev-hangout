import { ChatBox, ChatHeader, ChattingSidebar, MessageContainer, SenderPreview } from "../components/chatting";

export default function Chatting() {
  return (
    <div className="flex flex-row m-auto max-w-7xl pt-32"
      style={{height: '90vh'}}>
      <ChattingSidebar />
      <div className="flex flex-col flex-1">
        <ChatHeader/>
        <div className="flex flex-row flex-1">
          <div className="flex-1 flex flex-col">
            <MessageContainer className="flex-1"/>
            <ChatBox />
          </div>
          <SenderPreview />
        </div>
      </div>
    </div>
  )
}
