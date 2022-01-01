import { Icon } from "@iconify/react";
import arrowLeftIcon from '@iconify/icons-ic/baseline-arrow-back-ios-new';
import editIcon from '@iconify/icons-ic/baseline-edit';
import UserPopoverMenu from "./UserPopoverMenu";
import IconButton from "../IconButton";

export default function SidebarHeader() {
  return (
    <div className="mx-3 my-1 flex items-center">
      <UserPopoverMenu />
      <div className="flex-1" />
      <IconButton>
        <Icon icon={arrowLeftIcon} />
      </IconButton>
      <IconButton>
        <Icon icon={editIcon} />
      </IconButton>
    </div>
  )
}
