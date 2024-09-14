const { CallTracker } = require("assert");
const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieTokens");
const { sign } = require("crypto");
const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide all fields");
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    next(error); // Pass the error to the next middleware for proper error handling
  }
};

module.exports = { signup };
