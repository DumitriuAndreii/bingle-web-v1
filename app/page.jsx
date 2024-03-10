import Image from "next/image";
import { Header, Navbar } from "./ui/navbar/Navbar";
import { Carousel } from "./ui/carousel/Carousel";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Carousel />
      <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
    </main>
  );
}
