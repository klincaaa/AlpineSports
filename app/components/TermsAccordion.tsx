"use client";

import { useState } from "react";
import styles from "./TermsAccordion.module.css";

interface TermItem {
  title: string;
  content: string;
}

interface TermsAccordionProps {
  items: TermItem[];
}

export default function TermsAccordion({ items }: TermsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.header}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <span>{item.title}</span>
            <span className={styles.icon}>
              {openIndex === index ? "–" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className={styles.content}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
