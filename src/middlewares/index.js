const ensureLoggedIn = (req, res, next) => {
  if(!req.session.user) {
    return res.redirect('/sign-in')
  }
  next()
}

export { ensureLoggedIn }
