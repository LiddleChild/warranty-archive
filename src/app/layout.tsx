import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin", "thai"] });

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className={notoSansThai.className}>
        <div className="w-screen h-screen bg-n-white">{children}</div>
      </body>
    </html>
  );
}
