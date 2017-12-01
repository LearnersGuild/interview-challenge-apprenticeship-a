import express from 'express'

import {
  getRestaurants,
  getRestaurantById,
  getRantsByRestaurantId
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getRestaurants()
    .then(restaurants => res.render('restaurants/index', {restaurants}))
    .catch(next)
})

router.get('/:restaurantId', (req, res, next) => {
  getRestaurantById(req.params.restaurantId)
    .then(restaurant => res.render('restaurants/restaurant', {restaurant}))
    .catch(next)
})

export default router
