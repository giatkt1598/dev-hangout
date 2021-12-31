import { HTMLAttributes } from "react";
import IntroCard from "./IntroCard";

export default function LoginIntro({
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...other} className={`${className}
    h-full bg-slate-600 relative`}>
      <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_502964352_128031.jpg"
        className="h-full object-cover" />
      <IntroCard />
    </div>
  )
}
