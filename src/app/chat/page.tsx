'use client';

import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || !isLoggedIn) {
    if (typeof window !== 'undefined') {
      router.push('/auth/signin');
    }
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome, {session.user.email}</h1>
      <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Sign out
      </button>
    </div>
  );
}
