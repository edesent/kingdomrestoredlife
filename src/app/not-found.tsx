import Link from "next/link";
import Mark from "@/components/Mark";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <Mark id="nf" className="h-20 w-16" />
      <h1 className="display mt-8 text-5xl">Not here.</h1>
      <p className="mt-4 text-lg text-ink/70">That page has moved or never was. The door is still open.</p>
      <Link href="/" className="btn btn-green mt-8">
        Back home
      </Link>
    </section>
  );
}
