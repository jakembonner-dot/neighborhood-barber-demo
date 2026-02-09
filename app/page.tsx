import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, Scissors, Users, ShieldCheck } from "lucide-react";

// Single-file, previewable mock homepage.
// Colors (as requested):
// - #1C1C1C (charcoal)
// - #E6D8B8 (warm parchment)
// - #B08D57 (antique gold)

const COLORS = {
  bg: "#1C1C1C",
  paper: "#E6D8B8",
  gold: "#B08D57",
};

const barbers = [
  { name: "Steven", specialty: "Fade Specialist" },
  { name: "Josh", specialty: "Men’s Cuts Expert" },
  { name: "Ricky", specialty: "Beard Grooming Pro" },
];

export default function NeighborhoodBarbershopHomepage() {
  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-[#E6D8B8]">
      {/* Subtle texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(230,216,184,0.10), transparent 55%), radial-gradient(circle at 80% 30%, rgba(176,141,87,0.12), transparent 60%), radial-gradient(circle at 40% 85%, rgba(230,216,184,0.07), transparent 55%)",
        }}
      />

      {/* Top utility bar */}
      <header className="relative z-10 border-b border-[#B08D57]/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-4 text-[#E6D8B8]/90">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#B08D57]" />
              219 Culver Blvd, Playa Del Rey, CA 90293
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#B08D57]" />
              Tues-Sat 9am-6pm
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="rounded-xl px-3 py-2 text-sm font-semibold text-[#1C1C1C] shadow-sm"
              style={{ backgroundColor: COLORS.gold }}
            >
              Book Now
            </a>
            <a
              href="tel:+13104370244"
              className="hidden items-center gap-2 rounded-xl border border-[#B08D57]/40 px-3 py-2 text-sm font-semibold text-[#E6D8B8] sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-[#B08D57]" />
              (310) 437-0244
            </a>
          </div>
        </div>
      </header>

      {/* Main nav - minimal options */}
      <nav className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <div
              className="grid h-9 w-9 place-items-center rounded-2xl"
              style={{ backgroundColor: "rgba(176,141,87,0.18)", border: "1px solid rgba(176,141,87,0.35)" }}
              aria-hidden
            >
              <Scissors className="h-5 w-5 text-[#B08D57]" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-wide text-[#E6D8B8]">Neighborhood Barber Shop Co.</div>
              <div className="text-xs text-[#E6D8B8]/70">Playa Del Rey</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#barbers"
              className="rounded-xl px-3 py-2 text-sm text-[#E6D8B8]/85 hover:text-[#E6D8B8]"
            >
              Barbers
            </a>
            <a
              href="#info"
              className="rounded-xl px-3 py-2 text-sm text-[#E6D8B8]/85 hover:text-[#E6D8B8]"
            >
              Info
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-[28px] border border-[#B08D57]/25 bg-[#141414] shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-7 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#B08D57]/35 bg-[#1C1C1C] px-3 py-1 text-xs text-[#E6D8B8]/80">
                  <Star className="h-4 w-4 text-[#B08D57]" />
                  4.8 rating • 60+ reviews
                </div>

                <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#E6D8B8] sm:text-4xl">
                  Neighborhood barbershop in <span className="text-[#B08D57]">Playa Del Rey</span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#E6D8B8]/80">
                  Men’s haircuts, fades, and beard trims in a relaxed, friendly shop. Walk-ins welcome — appointments
                  preferred.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[#1C1C1C] shadow-sm"
                    style={{ backgroundColor: COLORS.gold }}
                  >
                    Book a Haircut
                  </a>
                  <div className="text-sm text-[#E6D8B8]/70">
                    Prefer to call? <a className="text-[#E6D8B8] underline underline-offset-4" href="tel:+13104370244">(310) 437-0244</a>
                  </div>
                </div>

                {/* Small trust row */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <Stat label="Typical cut" value="30 min" />
                  <Stat label="Popular" value="Fades" />
                  <Stat label="Kid-friendly" value="Yes" />
                </div>
              </div>

              {/* Hero image placeholder */}
              <div className="relative min-h-[240px]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.2) 40%, rgba(20,20,20,0.0) 55%), url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=60')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.85)",
                  }}
                />
                <div className="absolute bottom-4 right-4 rounded-2xl border border-[#B08D57]/30 bg-[#1C1C1C]/80 p-4 backdrop-blur">
                  <div className="text-xs text-[#E6D8B8]/70">Near you</div>
                  <div className="mt-1 text-sm font-semibold text-[#E6D8B8]">Matilla Village Center</div>
                  <div className="mt-2 text-xs text-[#E6D8B8]/70">Parking nearby • Easy walk-in</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet your barbers */}
      <section id="barbers" className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#E6D8B8]">Meet Your Barbers</h2>
            <p className="mt-3 text-base text-[#E6D8B8]/70">Pick a barber — or book with “No Preference” and we’ll match you.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {barbers.map((b) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[26px] border border-[#B08D57]/25 bg-[#141414]"
              >
                <div className="relative aspect-[4/3]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1593702289698-5a4c78a2f7d1?auto=format&fit=crop&w=1200&q=60')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(0.15) contrast(1.05)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xl font-semibold text-[#E6D8B8]">{b.name}</div>
                  <div className="mt-1 text-sm text-[#E6D8B8]/70">{b.specialty}</div>

                  <div className="mt-4 flex gap-2">
                    <a
                      href="#book"
                      className="flex-1 rounded-2xl px-4 py-2 text-center text-sm font-semibold text-[#1C1C1C]"
                      style={{ backgroundColor: COLORS.gold }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Added: info section (not more buttons) */}
          <div id="info" className="mt-10 overflow-hidden rounded-[28px] border border-[#B08D57]/25 bg-[#141414]">
            <div className="grid gap-6 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#E6D8B8]">What to book (quick guide)</h3>
                <p className="mt-3 text-base leading-relaxed text-[#E6D8B8]/75">
                  New here? Keep it simple. Choose a service, pick a barber if you have one in mind, or select “No
                  Preference” and we’ll pair you with whoever’s best for what you want.
                </p>

                <div className="mt-6 grid gap-3">
                  <InfoRow title="Men’s Haircut" desc="Classic cut, scissor work, or clipper work. Great default choice." />
                  <InfoRow title="Fade / Taper" desc="Precision fade or taper with clean blending and neckline detail." />
                  <InfoRow title="Beard Trim" desc="Shape, line-up, and tidy. Add-on or standalone." />
                  <InfoRow title="Kids Cut" desc="For kids 10 and under. Patient, quick, and clean." />
                </div>

                <div className="mt-6 text-sm text-[#E6D8B8]/70">
                  Pricing and exact timing vary by service. If you’re unsure, book a standard haircut and tell us what you
                  want when you arrive.
                </div>
              </div>

              <div className="rounded-[24px] border border-[#B08D57]/25 bg-[#1C1C1C] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#B08D57]" />
                  <div>
                    <div className="text-lg font-semibold text-[#E6D8B8]">First-time customer promise</div>
                    <div className="mt-2 text-sm leading-relaxed text-[#E6D8B8]/75">
                      Tell us your goal ("tight fade", "clean up the beard", "professional cut"). We’ll confirm the plan before
                      we start.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-[#B08D57]" />
                  <div>
                    <div className="text-lg font-semibold text-[#E6D8B8]">Walk-ins & appointments</div>
                    <div className="mt-2 text-sm leading-relaxed text-[#E6D8B8]/75">
                      Walk-ins are welcome when we have availability. For guaranteed time, book ahead.
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#B08D57]/25 bg-[#141414] p-4">
                  <div className="text-sm font-semibold text-[#E6D8B8]">Best single CTA</div>
                  <div className="mt-1 text-sm text-[#E6D8B8]/70">One button, one path — reduces decision fatigue.</div>
                  <a
                    href="#book"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[#1C1C1C]"
                    style={{ backgroundColor: COLORS.gold }}
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking anchor section */}
          <div id="book" className="mt-10">
            <div className="rounded-[28px] border border-[#B08D57]/25 bg-[#141414] p-7 sm:p-10">
              <h3 className="text-2xl font-semibold text-[#E6D8B8]">Book Your Appointment</h3>
              <p className="mt-2 max-w-2xl text-base text-[#E6D8B8]/70">
                This is a mockup. In a real build, this block would embed your unified scheduling (Square, Fresha, etc.)
                on the shop domain.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <MiniCard title="Step 1" body="Choose a service (Haircut, Fade, Beard Trim, Kids Cut)." />
                <MiniCard title="Step 2" body="Choose a barber or select “No Preference.”" />
                <MiniCard title="Step 3" body="Pick a time and confirm. You’ll get a text/email confirmation." />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[#1C1C1C]"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  Launch Booking Widget (demo)
                </a>
                <span className="text-sm text-[#E6D8B8]/70">
                  Or call <a className="text-[#E6D8B8] underline underline-offset-4" href="tel:+13104370244">(310) 437-0244</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#B08D57]/25">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-[#E6D8B8]/75">© {new Date().getFullYear()} Neighborhood Barber Shop Co.</div>
            <div className="text-sm text-[#E6D8B8]/75">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#B08D57]" />
                Playa Del Rey, CA
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#B08D57]/25 bg-[#1C1C1C] p-4">
      <div className="text-xs text-[#E6D8B8]/65">{label}</div>
      <div className="mt-1 text-sm font-semibold text-[#E6D8B8]">{value}</div>
    </div>
  );
}

function InfoRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[#B08D57]/20 bg-[#1C1C1C] p-4">
      <div className="text-sm font-semibold text-[#E6D8B8]">{title}</div>
      <div className="mt-1 text-sm text-[#E6D8B8]/70">{desc}</div>
    </div>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[#B08D57]/20 bg-[#1C1C1C] p-5">
      <div className="text-xs font-semibold tracking-wide text-[#B08D57]">{title}</div>
      <div className="mt-2 text-sm text-[#E6D8B8]/75">{body}</div>
    </div>
  );
}
