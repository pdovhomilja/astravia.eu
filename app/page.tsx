import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="">
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          width={400}
          height={75}
        />
      </div>
    </main>
  );
}
