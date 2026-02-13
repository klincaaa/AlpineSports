'use client'

import styles from "./ProductCard.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";


export interface ProductCardProps {
    image: StaticImageData;
    label: string;
    href: string;
}

export default function ProductCard({ image, label, href }: ProductCardProps) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = cardRef.current;
        if (!node) return;
        let observer: IntersectionObserver;
        if (typeof window !== "undefined" && window.IntersectionObserver) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Only animate once
                    }
                },
                { threshold: 1 }
            );
            observer.observe(node);
        } else {
            // fallback: show by default on no IntersectionObserver
            setIsVisible(true);
        }
        return () => observer && observer.disconnect();
    }, []);

    return (
        <Link
            ref={cardRef}
            href={href}
            className={`${styles.gridItem} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
            tabIndex={0}
        >
            <Image src={image} alt={label} className={styles.image} />
            <span className={styles.label}>{label}</span>
        </Link>
    );
}
