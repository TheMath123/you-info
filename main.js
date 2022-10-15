const spanIp = document.getElementById("#ip");
const spanCountry = document.getElementById("#country");

fetch("https://api.myip.com").then(function (response) {
  const { ip, country } = response;

  const nodeIp = document.createTextNode(ip);
  const nodeCountry = document.createTextNode(country);

  spanIp.appendChild(nodeIp);
  spanCountry.appendChild(nodeCountry);
});
