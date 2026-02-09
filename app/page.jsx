'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#1C1C1C', color: '#E6D8B8', minHeight: '100vh' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid #B08D57'
        }}
      >
        <h1 style={{ fontSize: '18px', letterSpacing: '1px' }}>
          Neighborhood Barber Shop Co.
        </h1>
        <Menu color="#E6D8B8" />
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '48px 20px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
          A Better Barbershop Experience
        </h2>
        <p style={{ maxWidth: '420px', margin: '0 auto', color: '#B08D57' }}>
          Classic cuts, modern style, and barbers you actually get to know.
        </p>

        <button
          style={{
            marginTop: '32px',
            padding: '12px 24px',
            backgroundColor: '#B08D57',
            border: 'none',
            color: '#1C1C1C',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Book an Appointment
        </button>
      </motion.section>

      {/* Meet Your Barbers */}
      <section style={{ padding: '32px 20px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
          Meet Your Barbers
        </h3>

        <div style={{ display: 'grid', gap: '16px' }}>
          {['Steven', 'Alex', 'Mike'].map((name) => (
            <div
              key={name}
              style={{
                border: '1px solid #B08D57',
                padding: '16px'
              }}
            >
              <strong>{name}</strong>
              <p style={{ fontSize: '14px', color: '#E6D8B8' }}>
                10+ years experience • Classic & modern styles
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section
        style={{
          padding: '32px 20px',
          backgroundColor: '#111'
        }}
      >
        <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>
          Why People Come Back
        </h3>
        <p style={{ color: '#B08D57', maxWidth: '480px' }}>
          No rush jobs. No mystery pricing. Just good haircuts and a shop that feels
          like the neighborhood spot it’s supposed to be.
        </p>
      </section>
    </div>
  );
}
