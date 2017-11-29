import db from '../db'

export default function signUp(user) {
  return db.one('INSERT into users VALUES (${username},  ${email}, ${password} ) RETURNING *', user);
}
