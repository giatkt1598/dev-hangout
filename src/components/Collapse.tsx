import { ReactNode, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import arrowRightIcon from '@iconify/icons-ic/baseline-keyboard-arrow-right';
import arrowDownIcon from '@iconify/icons-ic/baseline-keyboard-arrow-down';


interface CollapseProps {
    title: string,
    children?: ReactNode
}
export default function Collapse({
  title,
  children
}: CollapseProps) {
  const [collapse, setCollapse] = useState(false);
  const contentRef = useRef<any>();
  const [baseHeight, setBaseHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current && contentRef.current.clientHeight > 0) {
      setBaseHeight(contentRef.current.clientHeight)
    }
  }, [contentRef.current]);
  useEffect(() => {
    if (baseHeight > 0 && contentRef.current) {
      contentRef.current.style.maxHeight = baseHeight + "px";
    }
  }, [baseHeight, contentRef.current]);
  useEffect(() => {
    if (contentRef.current) {
      if (collapse) {
        contentRef.current.style.maxHeight = '0px';
      } else if (baseHeight > 0){
        contentRef.current.style.maxHeight = `${baseHeight}px`;
      }
    }
  }, [collapse]);
  return (
    <div>
      <div className={`
      flex overflow-hidden whitespace-nowrap 
            text-ellipsis gap-2 flex-nowrap cursor-pointer
            items-center justify-between px-2 hover:bg-gray-100
            p-2 border-t border-gray-200
            ${collapse ? 'border-b' : ''}`}
      onClick={() => setCollapse(p => !p)}>
        <span className="text-gray-500 text-xs tracking-wide"
          style={{fontWeight: 530}}>{title}</span>
        <Icon icon={collapse ? arrowRightIcon : arrowDownIcon} />
      </div>
      <div ref={contentRef} className="overflow-hidden transition-all duration-300"
      >
        {children}
      </div>
    </div>
  )
}
