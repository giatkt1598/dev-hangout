import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
}
export default function PrimaryButton({
  children,
  className,
  ...other
}: PrimaryButtonProps) {
  return (
    <button className={
      `
      ${styles.primaryButton}
      ${className ?? ''}`
    } {...other}>{children}</button>
      
  )
}
