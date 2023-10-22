import "../globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata = {
  title: "Incommsec",
  description: "Helping you communicate more securely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
