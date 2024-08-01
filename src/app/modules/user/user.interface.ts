
// role type
type TRole = {
    role: 'admin' | 'user';
};

// user type for sign up
export type TUserSignup = {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: TRole;
    isDeleted: boolean;
};


// user type for login
export type TUserLogin = {
    email: string;
    password: string;
}