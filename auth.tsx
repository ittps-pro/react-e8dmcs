// const fetcher = axios.get('https://api.avt-spb.keenetic.pro/rci/', {
//   headers: {
//     Authorization: 'Digest',
//   },
// });

import AxiosDigestAuth from '@mhoc/axios-digest-auth/dist';
import axios, { AxiosInstance } from 'axios';

const digestAuth = new AxiosDigestAuth({
  username: 'api', //env.user,
  password: 'password', // process.env.MY_DIGEST_PASSWORD,
});

export const Auth = async (creds: any, cb: any) => {
  const response = await axios.request({
    headers: { Accept: 'application/json' },
    auth: {
      username: 'tpa',
      password: '',
    },
    method: 'GET',
    url: 'https://api.avt-spb.keenetic.pro/rci/',
  });

  console.log(response);
};
