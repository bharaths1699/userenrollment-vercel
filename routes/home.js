const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://172.24.125.190:9384/mdm/client/v1/enroll?encapiKey=4a4e4857&templateToken=a0c85a1faf375eaa10d667ca9e6b9c2a"},{"Version":"mdm-adde","BaseURL":"https://172.24.125.190:9384/mdm/client/v1/enroll?encapiKey=4a4e4857&templateToken=a0c85a1faf375eaa10d667ca9e6b9c2a"}]}'
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
