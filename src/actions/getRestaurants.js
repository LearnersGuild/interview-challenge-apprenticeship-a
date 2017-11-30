import db from '../db'

export default function getRestaurants() {
  return db.any('SELECT * FROM restaurants')
}
