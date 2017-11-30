import db from '../db'

export default function getRestaurantById(restaurantId) {
  return db.one('SELECT * FROM restaurants WHERE id = $1', [restaurantId])
}
