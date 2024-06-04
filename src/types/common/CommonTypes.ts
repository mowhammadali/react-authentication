export type UserFormTypes  = {
    name: string;
    email: string;
    password: string;
}

export type AuthContextType = {
    auth: {
        email: string,
        password: string,
        accessToken: string,
    } | undefined,

    setAuth: () => void | undefined;
} 