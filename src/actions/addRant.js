import db from '../db'

export default function addRant(rant, userId, restaurantId, title) {
  return db.one('INSERT INTO rants(user_id, restaurant_id, title, body)  VALUES ($1, $2, $3, $4) RETURNING *', [userId, restaurantId, title, rant])
}
