'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#1C1C1C", color: "#E6D8B8" }}>
      <header style={styles.header}>
        <div style={styles.brand}>Neighborhood Barber Shop Co.</div>
        <Menu size={22} color="#E6D8B8" />
      </header>

      <main style={{ padding: "28px 18px 56px" }}>
        <section style={styles.hero}>
          <h1 style={styles.h1}>Clean cuts. No bullshit.</h1>
          <p style={styles.sub}>
            A neighborhood barbershop in Playa Del Rey for fades, classic cuts, and beard work.
          </p>

          <button style={styles.cta}>Book an Appointment</button>
        </section>

        <section style={{ marginTop: 42 }}>
          <h2 style={styles.h2}>Meet Your Barbers</h2>

          <div style={styles.cards}>
            <BarberCard name="Steven" note="Fades, tapers, beard styling" />
            <BarberCard name="Josh" note="Classic cuts, scissor work" />
            <BarberCard name="Ricky" note="Lineups, fades, house calls" />
          </div>
        </section>

        <section style={styles.infoWrap}>
          <InfoRow title="Location" desc="219 Culver Blvd · Playa Del Rey, CA 90293" />
          <InfoRow title="Hours" desc="Tues-Sat 9am-6pm" />
          <InfoRow title="Parking" desc="Street parking nearby. Easy in/out." />
        </section>
      </main>

      <footer style={styles.footer}>
        <div>Neighborhood Barber Shop Co.</div>
        <div style={{ opacity: 0.85 }}>219 Culver Blvd · Playa Del Rey, CA</div>
      </footer>
    </div>
  );
}

function BarberCard({ name, note }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} style={styles.card}>
      <div style={styles.avatar} />
      <div style={{ fontWeight: 700, marginTop: 10 }}>{name}</div>
      <div style={{ fontSize: 13, marginTop: 6, opacity: 0.9 }}>{note}</div>
      <button style={styles.secondary}>View availability</button>
    </motion.div>
  );
}

function InfoRow({ title, desc }) {
  return (
    <div style={styles.infoRow}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ opacity: 0.9 }}>{desc}</div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 18px",
    borderBottom: "1px solid #B08D57"
  },
  brand: { fontWeight: 700, letterSpacing: 0.3 },
  hero: { paddingTop: 10 },
  h1: { fontSize: 36, lineHeight: 1.1, margin: "14px 0 10px" },
  sub: { color: "#B08D57", fontSize: 16, maxWidth: 520, margin: 0 },
  cta: {
    marginTop: 22,
    background: "#B08D57",
    color: "#1C1C1C",
    border: "none",
    padding: "12px 18px",
    fontSize: 16,
    cursor: "pointer",
    width: "100%",
    maxWidth: 320
  },
  h2: { fontSize: 22, marginBottom: 14 },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14
  },
  card: {
    border: "1px solid #B08D57",
    padding: 14,
    background: "rgba(255,255,255,0.03)"
  },
  avatar: { height: 140, background: "#2a2a2a" },
  secondary: {
    marginTop: 12,
    background: "transparent",
    color: "#E6D8B8",
    border: "1px solid #B08D57",
    padding: "10px 12px",
    cursor: "pointer",
    width: "100%"
  },
  infoWrap: {
    marginTop: 44,
    padding: 16,
    border: "1px solid #B08D57",
    background: "rgba(255,255,255,0.02)"
  },
  infoRow: { display: "grid", gap: 6, padding: "10px 0" },
  footer: {
    borderTop: "1px solid #B08D57",
    padding: "18px",
    textAlign: "center",
    fontSize: 13
  }
};
