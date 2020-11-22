const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const db = require('../../models')
// const user = require('../../controllers/user')

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "FinAlPRojecTcoDeCAmP",
  // secretOrKey: process.env.SECRET_OR_KEY, // not working // npm install dotenv
}; 

// check correct token by pull from payload 
  const jwtStrategy = new Strategy(option, async (payload, done) => {
  // check user exist.
    
    const targerUser = await db.User.findOne({where: { UserId: payload.id}})
    console.log("targerUser", targerUser);
    if (targerUser) {
      done(null, targerUser);
    } else [done(null, false)];
  
  })
  passport.use("jwt", jwtStrategy);
