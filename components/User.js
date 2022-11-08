import { useSession, signIn, signOut } from "next-auth/react";

export default function User({className}) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <picture>
          <source srcSet={session.user.image} type="image/webp" />
          <img
            onClick={signOut}
            src={session.user.image}
            alt="user-img"
            className={`h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1 ${className}`}
          />
        </picture>
      </>
    );
  }

  return (
    <>
      <button onClick={signIn} className={`bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md ${className}`}>sign in</button>
    </>
  );
}
