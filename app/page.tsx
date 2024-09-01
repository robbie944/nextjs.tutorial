import Image from "next/image";
import Link from "next/link";
import ProductCard from "./componets/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
