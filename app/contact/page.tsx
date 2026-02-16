"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import HeroJustText from "../components/HeroJustText";

// Change this to your email sending endpoint
const FORM_ENDPOINT = "/api/contact"; // You must implement the /api/contact endpoint in your project (using Next.js API routes or a service like Formspree, EmailJS, etc)

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                throw new Error("Failed to send message. Please try again later.");
            }
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <HeroJustText
                text="GET IN TOUCH WITH US"
            />
            <section className={styles.contactSection}>
                <header className={styles.header}>
                    <p className={styles.subtitle}>
                        Have a question? We’d love to hear from you.
                    </p>
                </header>

                <div className={styles.wrapper}>
                    {/* Contact Info */}
                    <div className={styles.info}>
                        <h2 className={styles.infoTitle}>Alpine Sports Andermatt</h2>

                        <p className={styles.infoItem}>
                            📍 Andermatt, Switzerland
                            Gotthardstrasse 63
                            <br />
                            6490 Andermatt
                        </p>
                        <p className={styles.infoItem}>
                            📞 +41 00 000 0000
                        </p>
                        <p className={styles.infoItem}>
                            ✉️ info@alpinesportsandermatt.com
                        </p>
                    </div>

                    {/* Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label}>Name *</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={submitting}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Email *</label>
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={submitting}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Message *</label>
                            <textarea
                                className={styles.textarea}
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={submitting}
                            />
                        </div>

                        <button
                            className={styles.submitButton}
                            type="submit"
                            disabled={submitting}
                        >
                            {submitting ? "Sending..." : "Send Message"}
                        </button>
                        {success && (
                            <p className={styles.successMsg} style={{ color: "green", marginTop: 10 }}>
                                Thank you! Your message has been sent.
                            </p>
                        )}
                        {error && (
                            <p className={styles.errorMsg} style={{ color: "red", marginTop: 10 }}>
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </>

    );
}
