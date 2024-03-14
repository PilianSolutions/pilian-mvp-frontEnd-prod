export interface Clientes {
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: Address[];
    company: Company[];
}
export interface Address {
    city: string;
    geo: Geo[];
    street: string;
    suite: string;
    zipcode: string;
}
export interface Geo {
    lat?: string;
    lng?: string;
}
export interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}