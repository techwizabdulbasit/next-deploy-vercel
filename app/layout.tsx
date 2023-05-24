import "./globals.css";
// import "../assets/styles/app-theme.css";
import "@/public/assets/styles/main.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rentzo",
  description: "Rentzo Real Estate Application",
};

export default function RootLayout({
  children,
}
: {
  children: React.ReactNode;
}
)
 {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
