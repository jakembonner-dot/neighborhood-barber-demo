"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#1C1C1C", color: "#E6D8B8", minHeight: "100vh" }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Neighborhood Barber Shop Co.</div>
        <Menu color="#E6D8B8" />
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>A Neighborhood Barbershop</h1>
        <p style={styles.heroSubtitle}>
          Classic men’s haircuts, fades, and beard trims in Playa Del Rey.
        </p>
        <button style={styles.primaryButton}>Book a Haircut</button>
      </section>

      {/* Meet Your Barbers */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet Your Barbers</h2>

        <div style={styles.barberGrid}>
          <BarberCard name="Steven" />
          <BarberCard name="Josh" />
          <BarberCard name="Ricky" />
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.infoSection}>
        <InfoRow
          title="New here?"
          desc="Book any haircut and we’ll match you with the right barber."
        />
        <InfoRow
          title="Walk-ins welcome"
          desc="Availability varies — booking ahead is recommended."
        />
        <InfoRow
          title="Located in Playa Del Rey"
          desc="219 Culver Blvd · Easy street parking nearby."
        />
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Neighborhood Barber Shop Co.</p>
        <p>219 Culver Blvd · Playa Del Rey, CA</p>
      </footer>
    </div>
  );
}

/* Components */

function BarberCard({ name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      style={styles.barberCard}
    >
      <div style={styles.barberPhoto} />
      <h3>{name}</h3>
      <button style={styles.secondaryButton}>View availability</button>
    </motion.div>
  );
}

function InfoRow({ title, desc }) {
  return (
    <div style={styles.infoRow}>
      <strong>{title}</strong>
      <span>{desc}</span>
    </div>
  );
}

/* Styles */

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid #B08D57",
  },
  logo: {
    fontWeight: 600,
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "42px",
    marginBottom: "12px",
  },
  heroSubtitle: {
    fontSize: "18px",
    marginBottom: "24px",
  },
  primaryButton: {
    backgroundColor: "#B08D57",
    color: "#1C1C1C",
    border: "none",
    padding: "14px 24px",
    fontSize: "16px",
    cursor: "pointer",
  },
  section: {
    padding: "60px 20px",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "32px",
    textAlign: "center",
  },
  barberGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  barberCard: {
    backgroundColor: "#262626",
    padding: "20px",
    textAlign: "center",
  },
  barberPhoto: {
    width: "100%",
    height: "180px",
    backgroundColor: "#333",
    marginBottom: "12px",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "#E6D8B8",
    border: "1px solid #B08D57",
    padding: "10px 16px",
    cursor: "pointer",
  },
  infoSection: {
    padding: "40px 20px",
    backgroundColor: "#262626",
  },
  infoRow: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "16px",
  },
  footer: {
    padding: "24px 20px",
    borderTop: "1px solid #B08D57",
    textAlign: "center",
    fontSize: "14px",
  },
};
