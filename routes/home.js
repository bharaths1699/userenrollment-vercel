const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin6.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2F581IkwaJYtq%2B7E97gtYKO3%2BezoEbGz1yhA%2FVue3fjDBMA8MmYanMsFMTqH85pKPJ6H3KOfa3Z8pNusk9C%2BsrFxwGRFdCV48btXTsGqhch%2FJ%2BqtY%3D&templateToken=df3e9f2a715212766b1d9357926e727a"}]}'
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
