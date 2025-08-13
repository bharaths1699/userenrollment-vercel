const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin6.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw95clNlFbcZovu7E8p3oNdNnyfm4JJET9z0w%2BB7%2BSMjjBOBpZyNazLtFRB%2BHc%2Frq6W6S3AbfO0ZslOsM8%2FUrl6ExwGRFdCV48btXTsT%2F8Mg%2FYn%2B9I%3D&templateToken=a8d59181fa12dd197c2460ec76a55143"}]}'
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
