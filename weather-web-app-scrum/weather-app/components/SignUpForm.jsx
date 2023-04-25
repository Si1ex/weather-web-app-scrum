import React, { useState } from 'react';
import Link from 'next/link';
import { hashPassword } from '../utils/auth';
import { useRouter } from 'next/router';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailTaken, setEmailTaken] = useState(false);

  const url = 'http://localhost:4000/insert/user';

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlencodedUser = new URLSearchParams({
      email: username,
      password: await hashPassword(password),
    });

    // Add new user to database
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: urlencodedUser,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Check if email is already in use
    if (response.status === 400) {
      setEmailTaken(true);
    } else {
      setEmailTaken(false);
    }

    // If adding user is successfull -> redirect
    if (response.status === 200) {
      router.push('/auth/signin');
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-xl text-center p-3">Luo tili</h1>

      <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
        {emailTaken && <p className="m-0 p-1">Sähköposti on jo käytössä</p>}
        <input
          className="p-2 mb-2 rounded text-black"
          type="email"
          placeholder="Sähköposti"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="mb-2 p-2 rounded text-black"
          type="password"
          placeholder="Salasana"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex justify-between w-full">
          <button className="w-[45%] text-white p-2 rounded bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link href={'/auth/signin'}>Kirjaudu</Link>
          </button>
          <button
            className="w-[45%] text-white p-2 rounded bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Luo tili
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
