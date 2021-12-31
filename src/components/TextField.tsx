import { InputHTMLAttributes, ReactNode } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    prefixIcon?: ReactNode,
    suffixIcon?: ReactNode,
    label?: string,
}
export default function TextField({
  className,
  prefixIcon,
  suffixIcon,
  label,
  ...other
}: Props) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm
      border-solid border-x border-y
      ">
        {
          prefixIcon && <div className="absolute inset-y-0 left-0 pl-2
          flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{prefixIcon}</span>
          </div>
        }
        <input
          type="text"
          className={`
           block ${prefixIcon ? 'pl-8' : 'pl-2'}
           w-full ${suffixIcon ? 'pr-8': 'pr-2'} 
           sm:text-sm border-gray-300 rounded-md
           py-2 focus:outline-none
          `}
          {...other}
        />
        {
          suffixIcon && <div className="absolute inset-y-0 right-0 flex items-center">
            {suffixIcon}
          </div>
        }
      </div>
    </div>
  )
}
