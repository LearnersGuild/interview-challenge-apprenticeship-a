const ensureLoggedIn = (req, res, next) => {
  if(!req.session.user) {
    return res.redirect('/sign-up')
  }
  next()
}

export { ensureLoggedIn }
