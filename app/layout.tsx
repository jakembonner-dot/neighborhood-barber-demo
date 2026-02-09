export const metadata = {
  title: "Neighborhood Barber Shop Co.",
  description: "Neighborhood barbershop in Playa Del Rey — men’s haircuts, fades, and beard trims."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
