const google = require('googleapis')
const OAuth2Client = google.auth.OAuth2

function googleLogin() {
  const oauth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);
  return oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: 'https://www.googleapis.com/auth/userinfo.email' // can be a space-delimited string or an array of scopes
  });
}

function googleOAuthHandshake(code, callback){
  const oauth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);
  oauth2Client.getToken(code, function (err, tokens) {
    if (err) {
      return callback(err);
    }
    // set tokens to the client and session
    oauth2Client.setCredentials(tokens);
    callback(tokens);
  });
}

module.exports = {
  googleLogin,
  googleOAuthHandshake
}