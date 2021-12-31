import { HTMLAttributes } from "react";

export default function MessageContainer({
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...other} className={`${className ?? ''}
    p-2
    `}>
            container
    </div>
  )
}
