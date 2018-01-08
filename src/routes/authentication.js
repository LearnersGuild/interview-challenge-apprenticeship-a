import express from 'express'

import { signUp, signIn, getRestaurants } from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const user = req.body
  signUp(user)
  .then( user => {
    req.session.user = user
    res.redirect('/')
  })
  .catch(next)
})

router.get('/sign-in', (req, res, next) => {
  res.render('authentication/sign-in');
})

router.post('/sign-in', (req, res, next) => {
  const { username, password } = req.body
  signIn(username, password)
  .then( user => {
    if(!user) {
      res.redirect('/sign-in')
    } else {
      req.session.user = user
      console.log(req.session.redir)
      if (req.session.redir){
        res.redirect(req.session.redir)
      }else{
        res.redirect('/restaurants');
      }

    }
  })
  .catch(next);
})

router.get('/sign-out', (req, res, next) => {
  req.session.destroy()
  res.redirect('/sign-in');
});

export default router
