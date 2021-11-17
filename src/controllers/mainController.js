module.exports = {
  root(req, res) {
    res.redirect('/home')
  },
  home(req, res) {
    res.render('index')
  },
  user(req, res) {
    res.render('users')
  },
}
