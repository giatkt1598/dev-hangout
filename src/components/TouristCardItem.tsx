import { HTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import StarIcon from "@iconify/icons-ic/round-star";
import { fNumber } from "../utils/numberFormat";
interface Props extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    title: string;
    score: number;
    review: number;
}
export default function TouristCardItem({
  imageUrl,review,
  score,
  title,
  className,
  ...other
}: Props) {
  return (
    <div {...other} className={`${className ?? ''}
    h-96 
    `}>
      <img src={imageUrl}
        className="w-full h-full object-cover rounded-2xl" />
      <h3 className="text-center mt-4 font-medium text-md">{title}</h3>

      <div className="flex justify-center mt-3">
        <div className="flex gap-1 justify-center bg-gray-100
            p-2 w-fit rounded-full">
          <Icon icon={StarIcon} style={{color: '#FFD336'}}/>
          <span className="font-semibold text-xs">{score}</span>
          <span className="text-gray-400 text-xs">{`(${fNumber(review)} Review)`}</span>
        </div>
      </div>
    </div>
  )
}
