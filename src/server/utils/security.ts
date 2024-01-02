import { verify, sign } from 'jsonwebtoken';
import { env } from '~/env';

export function encodeJwtToken(payload: string | object | Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    sign(payload, env.SECRET_KEY, { expiresIn: '30d' }, (err, token) => {
      if (err || !token) return reject(err || new Error('No token'));
      else return resolve(token);
    });
  });
}

export function decodeAndVerifyJwtToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    verify(token, env.SECRET_KEY, (err, decoded) => {
      if (err || !decoded) return reject(err || new Error('No decoded'));
      else return resolve(decoded as any);
    });
  });
}
