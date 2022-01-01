import Collapse from "../Collapse";
import UserInfoPreview from "./UserInfoPreview";
import { Icon } from "@iconify/react";
import emailIcon from '@iconify/icons-ic/baseline-email';
import phoneIcon from '@iconify/icons-ic/baseline-local-phone';

export default function SenderPreview() {
  return (
    <div className="w-60 border-l border-gray-300">
      <div className="mt-6">
        <UserInfoPreview />
      </div>
      <br />
      <Collapse title="INFORMATION">
        <div className="p-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Icon icon={emailIcon} className="mt-1 "/>
            <div>
            milo.farrell@hotmail.com
            </div>
          </div>
          <div className="flex gap-2">
            <Icon icon={phoneIcon} className="mt-1 "/>
            <div>
             399-757-9909
            </div>
          </div>
        </div>
      </Collapse>

      <Collapse title="ATTACHMENT (0)">

      </Collapse>
    </div>
  )
}
