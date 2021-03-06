import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    spacing?: number,
    orientation?: "vertical" | "horizontal"
}
export default function Divider({
  spacing,
  orientation,
  className,
  style,
  ...other
}: DividerProps) {
  return (
    <div className={`bg-gray-300
    ${orientation === 'vertical' ? '' : 'w-11/12 px-2'}
    ${className ?? ''}`} style={{
      ...orientation !== 'vertical' && {
        height: 1,
        margin: `${spacing}px auto`,
      },
      ...orientation === 'vertical' && {
        width: 1,
        height: 'inherit',
        margin: `auto ${spacing}px`,
      },
      ...style
    }} {...other}/>
            
  )
}
