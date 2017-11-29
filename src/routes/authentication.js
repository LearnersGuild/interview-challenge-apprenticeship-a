import express from 'express'

import { signUp, signIn, getAlbums } from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const user = req.body
  signUp(user)
  .then( user => {
    res.redirect('/')
  })
  .catch(next)
})

export default router
