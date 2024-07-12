import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';
import { Auth } from './auth';
//import AxiosDigestAuth from '@mhoc/axios-digest-auth';

// const fetcher = axios.get('https://api.avt-spb.keenetic.pro/rci/', {
//   headers: {
//     Authorization: 'Digest',
//   },
// });

// const digestAuth = new AxiosDigestAuth({
//   username: 'api', //env.user,
//   password: 'password', // process.env.MY_DIGEST_PASSWORD,
// });

// const MakeARequest = async () => {
//   const response = await digestAuth.request({
//     headers: { Accept: 'application/json' },
//     method: 'GET',
//     url: 'https://cloud.mongodb.com/api/atlas/v1.0/groups',
//   });
// };

// Auth();
// fetch('https://ifconfig.co/json');

createRoot(document.getElementById('container')).render(<Demo />);
