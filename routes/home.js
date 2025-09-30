const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://kavi-17730-osv.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw5s55AwQbfYou5v0pz09AMPiaZy9RMRG981FSG6eWJiTAeVcUgYayb5wEXpStt86vGuSjIOfC%2FPM4f7J09CbwgRhwGRFdCV48btXTsS6lYgfAt%2BoM%3D&templateToken=3493d80dc5fda4cdc6b4499fc4c816d9"}]}'
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  res.write(inputStream);
  res.end();
});

module.exports = router;
