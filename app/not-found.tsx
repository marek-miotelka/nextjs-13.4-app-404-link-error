import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href={'/'}>
        Back to Home
      </Link>
    </div>
  );
}
