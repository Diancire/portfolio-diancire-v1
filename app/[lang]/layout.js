import { Oswald, Permanent_Marker } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layout/Main-Layout";
import { getDictionary } from "./dictionaries";
import site_bg from '../../public/site-bg.jpg'

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

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}


export default async function RootLayout({ children, params }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  
  return (
    <html lang={lang} className={`${oswald.variable} ${permanent_marker.variable}`}>
      <body style={{ backgroundImage: `url(${site_bg.src})`}} className="bg-no-repeat bg-cover">
        <MainLayout dict={dict} lang={lang}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
