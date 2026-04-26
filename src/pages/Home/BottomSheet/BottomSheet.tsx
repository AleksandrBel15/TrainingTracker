import { useEffect, useRef, type JSX } from "react";
import type { IBottomSheet } from "./BottomSheet";
import styles from "./BottomSheet.module.css";

export function BottomSheet({ onClose, children }: IBottomSheet): JSX.Element {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return;

    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentY = e.touches[0].clientY;

      const diff = currentY - startY;

      if (diff > 0) {
        el.style.transform = `translateY(${diff}px)`;
      }
    };

    const handleTouchEnd = () => {
      const diff = currentY - startY;

      if (diff > 250) {
        onClose();
      } else {
        el.style.transform = "translateY(0)";
      }
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onClose]);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />

      <div ref={sheetRef} className={styles.sheet}>
        <div className={styles.handle} />
        {children}
      </div>
    </>
  );
}
