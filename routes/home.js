const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin6.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw45c8dllSNP4m%2F60x739AKaHzLz4YfFmgghAmH6OnaijBMU8cjMqnKtVQX%2BXdu9KvA6XydbfHnbZRPvMxtD%2BshQBwGRFdCV48btXTsTa1fg%2FQu%2Fg%3D%3D&templateToken=c194b8cb9428f3840a687e8025a8ff56"}]}'
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
