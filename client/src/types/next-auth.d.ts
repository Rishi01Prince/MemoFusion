import 'next-auth';
import 'next-auth/jwt';


declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        email: string;
        firstname?: string;
        lastname?: string;
    }

    interface Session {
        user: User;
        expires: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user?: User;
    }
}
