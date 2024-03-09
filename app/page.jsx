import Image from "next/image";
import { Header } from "./ui/landing-page/Header";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
    </main>
  );
}
