import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-center text-blue-500 text-3xl mt-10 ">
        Welcome to Profanity Checker Integration
      </h1>

      <p className="text-center text-xl">
        Monitor and filter out offensive language from messages in real-time.
      </p>

      <Link href="/api/integration" className="underline text-blue-500 text-xl">
        View JSON
      </Link>

      <h1 className="text-center text-blue-500 text-5xl font-bold">
        Author: LAYOBRIGHT
      </h1>
    </div>
  );
}
