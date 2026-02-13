"use client";

import { useState } from "react";
import styles from "./BookNow.module.css";
import HeroJustText from "../components/HeroJustText";

export default function BookNow() {

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    lessonType: "",
    students: "",
    ageGroup: "",
    level: "",
    instructors: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch("/api/book-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send booking request.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        startDate: "",
        endDate: "",
        lessonType: "",
        students: "",
        ageGroup: "",
        level: "",
        instructors: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <>
      <HeroJustText
        text="BOOK YOUR LESSON"
      />
      <section className={styles.bookSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.field}>
            <label htmlFor="name">Name & Surname *</label>
            <input
              className={styles.input}
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label className={styles.label}>Email *</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <label className={styles.label}>Mobile Number *</label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Dates */}
          <div className={styles.field}>
            <label className={styles.label}>Lesson Start Date</label>
            <input
              className={styles.input}
              type="date"
              name="startDate"
              value={formData.startDate}
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Lesson End Date</label>
            <input
              className={styles.input}
              type="date"
              name="endDate"
              value={formData.endDate}
              required
              onChange={handleChange}
            />
          </div>

          {/* Lesson Type */}
          <div className={styles.field}>
            <label className={styles.label}>Type of Lesson</label>
            <select
              className={styles.select}
              name="lessonType"
              value={formData.lessonType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="private">Private</option>
              <option value="group">Group</option>
              <option value="kids">Children</option>
            </select>
          </div>

          {/* Students */}
          <div className={styles.field}>
            <label className={styles.label}>Number of Students</label>
            <select
              className={styles.select}
              name="students"
              value={formData.students}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="More">More</option>
            </select>
          </div>

          {/* Level */}
          <div className={styles.field}>
            <label className={styles.label}>Ski Level</label>
            <select
              className={styles.select}
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit Request"}
          </button>

          {success && (
            <p className={styles.successMsg}>
              ✅ Thank you! Your booking request has been sent.
            </p>
          )}

          {error && (
            <p className={styles.errorMsg}>
              ❌ {error}
            </p>
          )}

        </form>
      </section>
    </>

  );
}
