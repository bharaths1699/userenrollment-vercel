const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw45MIdxFvcN4286U980YYHai%2FLy9NNEDkhhFjRv%2BrYhTBLUZF1Y63IvwIWqCs89KzHsivPOaC2bZ8bucs6DL8uRxwGRFdCV48btXTsF6wOh6Esr4Y%3D&templateToken=305fb183777f9270ec6a55502e34346b"}]}'
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
