import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children, team, techteam }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex">
       <div className="w-[50%] bg-amber-950 text-white" >{children}</div>
       <div className="w-[50%] bg-amber-300 text-black">{team}</div>
       <div className="w-[50%] bg-amber-600 text-black">{techteam}</div>
      </body>
    </html>
  );
}
