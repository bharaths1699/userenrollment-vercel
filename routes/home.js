const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmenroll-lin1.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxo581PwFfQZt7tv0x4gNEMbX2azNoWFT50hVWCv73b2DBLUM11P%2FvJs1MTqSg8r%2F%2BSuXjNafCwa50YuZ9oD%2B8hRBwGRFdCV48btXTsGKkNifJ9%2FIU%3D&templateToken=ea9250b9291bc1f5d7c863efae0b76e3"}]}'
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
