const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://kavi-17730-osv.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxosMkal1WMNom4vE15gIoLbH3MmtIdFGx8ggqAurmIjzBJAswjMKCetAwS%2BX1iovqS6HHLPKe1OJ4a7J9oDr0rSRwGRFdCV48btXTsG6kPh6Z8%2FYE%3D&templateToken=b67a7619f0508d6b64ad4112ad201f3c"}]}'
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
