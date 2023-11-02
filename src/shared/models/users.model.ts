export interface Users {
    userId?: number,
    firstName: string,
    lastName: string,
    contact: number, 
    gender: string,
    age: number,
    email: string
}

export interface Login{
    email: string;
    password: string;
}
