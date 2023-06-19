import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next();

  console.log('FOO:', process.env.NEXT_PUBLIC_FOO);

  return response;
}
