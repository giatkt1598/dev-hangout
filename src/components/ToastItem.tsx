import { HTMLAttributes } from "react";
import CloseIcon from "@iconify/icons-ic/close";
import { Icon } from "@iconify/react";
import IconButton from "./IconButton";
export default function ToastItem({
  message,
  title,
  className,
  onClose,
  ...other
}: {
    message?: string,
    title?: string,
    onClose?: () => void,
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`py-2 px-4 relative shadow-lg rounded-md ${className}`} {...other}>
      <div className="font-medium text-sm">
        {title}
      </div>
      <div className="text-xs text-gray-400">
        {message}
      </div>
      <div className="absolute top-2 right-2">
        <IconButton onClick={onClose}>
          <Icon icon={CloseIcon} width={16} height={15} />
        </IconButton>
      </div>
    </div>
  )
}
