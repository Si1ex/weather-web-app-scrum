import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Käyttäjä: {session.user.email}</p>
        <button
          className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500 mx-1"
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
        >
          Kirjaudu ulos
        </button>
      </>
    );
  }
  return (
    <button
      className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500 mx-1"
      onClick={() =>
        signIn({
          callbackUrl: '/',
        })
      }
    >
      Kirjaudu sisään
    </button>
  );
}
