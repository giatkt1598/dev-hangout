import { createRef, ReactNode, useEffect, useState } from "react";
import styles from './Popover.module.css';

interface PopoverProps {
    trigger: ReactNode,
    children: ReactNode,
}
export default function Popover({
  children,
  trigger,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = createRef<HTMLDivElement>();
  const [triggerSize, setTriggerSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerSize({
        height: triggerRef.current.children[0].clientHeight,
        width: triggerRef.current.children[0].clientWidth,
      })
    }
  }, [triggerRef.current])
  
  return (
    <div className={styles.popover}>
      <span
        ref={triggerRef}
        onClick={() => setOpen(p => !p)}>
        {trigger}
      </span>
      {
        open && <div className={styles.popoverContent} style={{
          top: triggerSize.height / 2,
          left: triggerSize.width + 10,
        }}>
          {children}
        </div>
      }
      {
        open && <div className={styles.backdrop} onClick={() => setOpen(false)} />
      }
    </div>
  )
}
