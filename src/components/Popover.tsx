import { createRef, ReactNode, useEffect, useState } from "react";
import styles from './Popover.module.css';

interface PopoverProps {
    trigger: ReactNode,
    children: ReactNode,
    position?: 'top' | 'bottom',
    onBeforeClose?: () => void,
}
export default function Popover({
  children,
  trigger,
  position = 'bottom',
  onBeforeClose,
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
  
  const handleClose = () => {
    onBeforeClose && onBeforeClose();
    setOpen(false);
  }
  return (
    <div className={styles.popover}>
      <span
        ref={triggerRef}
        onClick={() => setOpen(p => !p)}>
        {trigger}
      </span>
      {
        open && <>
          <div className={styles.popoverContent} style={{
            ...position === 'bottom' && {
              top: triggerSize.height / 2,
              left: triggerSize.width + 10,
            },
            ...position === 'top' && {
              top: triggerSize.height / 2,
              left: triggerSize.width + 10,
              transform: 'translateY(-100%)'
            }
          }}>
            {children}
          </div>
          <div className={styles.backdrop} onClick={handleClose} />
        </>
      }
    </div>
  )
}
