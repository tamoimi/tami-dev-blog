import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className="ml-auto text-sm font-medium space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
};
export default Navigation;
