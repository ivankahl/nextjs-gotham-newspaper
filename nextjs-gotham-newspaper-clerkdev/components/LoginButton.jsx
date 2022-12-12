import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const LoginButton = ({ size, signInOnly }) => {
  const { isLoaded, isSignedIn, signOut } = useAuth();

  const padding = size === "large" ? "py-2 px-4" : "py-1 px-2";

  if (isLoaded && isSignedIn && !signInOnly) {
    return (
      <button
        className={`${padding} rounded bg-red-600 text-sm font-bold text-white`}
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    );
  }

  return (
    <Link
      className={`${padding} my-1 rounded bg-red-600 text-sm font-bold text-white`}
      href="/login"
    >
      Sign In
    </Link>
  );
};

export default LoginButton;
