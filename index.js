const jwt = require("jsonwebtoken")

const payload = {
  id: 3412,
  username: "miledavis",
}

const secret = "p@s$w0rD"

const token = jwt.sign({
  data: payload,
}, secret, {
  expiresIn: "1h"
})

console.log(token)
