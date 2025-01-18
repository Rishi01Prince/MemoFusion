import { NextResponse } from 'next/server';

export function isPublicRoute(pathname: string) {
    return ['/auth/signin'].includes(pathname);
}

export function redirectToLogin(nextUrl: URL) {
    return NextResponse.redirect(new URL('/auth/signin', nextUrl.origin));
}

export function redirectToWelcome(nextUrl: URL) {
    return NextResponse.redirect(new URL('/', nextUrl.origin));
}
