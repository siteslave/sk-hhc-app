export interface IHttpResult {
  ok: boolean;
  msg?: any;
  rows?: any;
  fullname?: string;
  token?: string;
  error?: string;
}

export interface IService {
  hn?: string;
  vn?: string;
  clinic_name?: string;
  ptname?: string;
  sex?: string;
  age?: number;
}