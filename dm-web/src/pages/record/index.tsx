import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RecodeHome() {
  return (
    <h1 className={`text-3xl font-bold mt-10 text-center`}>record/indexです</h1>
  );
}
