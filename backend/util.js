const jwt = require("jsonwebtoken")

export function getUserIdFromToken(token) {
    const decoded = jwt.verify(token, 'secret')
    return decoded
}