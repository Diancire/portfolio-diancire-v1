import { Oswald, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const oswald = Oswald({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-oswald",
});

export const permanent_marker = Permanent_Marker({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-permanent_marker",
  weight: ['400']
});

export const metadata = {
  title: "Dianciré | Web Developer",
  description: "Welcome to my portfolio! I am Dianciré, a web developer with a passion for creating dynamic and responsive web applications. Explore my projects, learn more about my skills and background, and feel free to get in touch through the contact section.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${permanent_marker.variable}`}>
      <body style={{backgroundImage: "url('/site-bg.jpg')"}} className="bg-no-repeat bg-cover">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
