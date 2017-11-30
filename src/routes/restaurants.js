import express from 'express'

import {
  getRestaurants,
  getRestaurantById,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getRestaurants()
    .then(restaurants => res.render('restaurants/index', {restaurants}))
    .catch(next)
})

router.get('/:restaurantID', (req, res, next) => {
  getRestaurantById(req.params.restaurantID)
    .then(restaurant => res.render('restaurants/restaurant', {restaurant}))
    .catch(next)
})

export default router
