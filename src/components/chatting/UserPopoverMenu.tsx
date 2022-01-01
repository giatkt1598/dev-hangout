import Popover from "../Popover";
import UserAvatar from "./UserAvatar";
import { Icon } from "@iconify/react";
import powerIcon from '@iconify/icons-ic/baseline-power-settings-new';
import IconButton from "../IconButton";
import Divider from "../Divider";
import { useNavigate } from "react-router";
import { PATH } from "../../router/path";

export default function UserPopoverMenu() {
  const navigate = useNavigate();
  const logout = () => {
    navigate(PATH.login);
  }
  return (
    <Popover trigger={<UserAvatar />}>
      <div className="flex flex-row gap-2 justify-between items-center
        " style={{minWidth: 200}}>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold tracking-wide">
              username
          </div>
          <div className="text-xs tracking-wide text-gray-400">
              user@example.com
          </div>
        </div>
        <div>
          <IconButton onClick={logout}>
            <Icon icon={powerIcon} color="red"/>
          </IconButton>
        </div>
      </div>

      <Divider spacing={16}/>
    </Popover>
  )
}
