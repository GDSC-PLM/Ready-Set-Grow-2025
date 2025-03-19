import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomCursor from "../components/AnimatedCursor.jsx";

export const metadata = {
  title: "Ready Set Grow 2025",
  description: "Ready Set Grow 2025 is an event organized by the GDSC PLM.",
  image: "/images/assets/GDSC-Logo-Stylized.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/icons/RSG-icon.svg" type="image/svg" />
      <body className="flex flex-col antialiased min-h-screen">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
