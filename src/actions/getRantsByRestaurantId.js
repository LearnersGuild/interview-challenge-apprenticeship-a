import db from '../db'

export default function getRantsByRestaurantId(restaurantId) {
  return db.any('SELECT * FROM rants WHERE restaurant_id = $1', [restaurantId]);
}
