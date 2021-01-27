exports.testGet = (req, res) => {
  return res.send('Received a GET HTTP method!')
}

exports.testPost = (req, res) => {
  return res.send('Received a POST HTTP method!')
}

exports.testPut = (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource.`)
}

exports.testDelete = (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource.`)
}
