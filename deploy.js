var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,  // NOTE that this was username in 1.x 
  password: process.env.FTP_PASSWORD, // optional, prompted if none given
  host: "buff.elastictech.org",
  port: 21,
  localRoot: __dirname,
  remoteRoot: process.env.FTP_PATH,
  include: ['/build/**/*'],
  exclude: []   // e.g. exclude sourcemaps
}

// use with promises
ftpDeploy.deploy(config)
  .then(res => console.log('finished'))
  .catch(err => console.log(err))
  
// use with callback
// ftpDeploy.deploy(config, function(err) {
//   if (err) console.log(err)
//   else console.log('finished');
// });