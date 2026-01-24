import Image from "next/image";
import { resolve } from "styled-jsx/css";

export default async function Home() {
  await new Promise((resolve)=>setTimeout(resolve, 2000))
  return (
    <>
      Home
    </>
  );
}
