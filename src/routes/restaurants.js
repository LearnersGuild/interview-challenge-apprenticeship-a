import express from 'express'

import {
  getRestaurants,
  getRestaurantById,
  getRantsByRestaurantId,
  addRant
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getRestaurants()
    .then(restaurants => res.render('restaurants/index', {restaurants}))
    .catch(next)
})

router.get('/:restaurantId', (req, res, next) => {
  // let rants = []; // TODO: fixme
  getRestaurantById(req.params.restaurantId)
    .then((restaurant) => {
      return getRantsByRestaurantId(restaurant.id)
        .then((rants) => {
          res.render('restaurants/restaurant', {restaurant, rants})
        })
    })
    .catch(next)
})

router.post('/:restaurantId/rants', (req, res, next) => {

  addRant(req.body.rant, req.user.id, req.params.restaurantId, req.body.title)
    .then(() => res.render('restaurants/restaurant'))
})
export default router
