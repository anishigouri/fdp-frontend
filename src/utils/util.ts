import jwtDecode from 'jwt-decode';

interface IUser {
  id: string;
  email: string;
}

interface IJWT {
  iat: string;
  uid: string;
  data: IUser;
}

export function getUser(): IUser | null {
  const token: string | null = localStorage.getItem('token');
  if (token) {
    const tokenDecode = jwtDecode<IJWT>(token);
    return tokenDecode.data;
  }

  return null;
}
