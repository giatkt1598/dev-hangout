import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children?: ReactNode,
}
export default function IconButton({
  className,
  children,
  ...other
}: IconButtonProps) {
  return (
    <button className={`${className}
    rounded-full p-2
        hover:bg-black hover:bg-opacity-5`} {...other}>
      {children}
    </button>
  )
}
