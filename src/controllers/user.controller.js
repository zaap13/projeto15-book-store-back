export function getUser(req, res) {
  const profile = { user: req.user, products: req.products };
  res.status(200).send(profile);
}
