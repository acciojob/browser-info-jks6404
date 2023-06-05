//your JS code here. If required.
//your JS code here. If required.
let div = document.getElementById("browser-info");
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
const browserRegex = /(?:Chrome|Firefox|Safari|Opera|MSIE|Edge|Trident)\/([\d.]+)/;
const match = browserRegex.exec(userAgent);

  // Add code here to extract browserName and versionNumber from userAgent

  return {
    browserName: userAgent,
    versionNumber: match
  };
}
function browserinfo() {
  let { browserName, versionNumber } = getBrowserInfo();
  div.innerHTML = `You are using ${browserName} version ${versionNumber}`;
}

browserinfo();
let browserInfo = getBrowserInfo();
 div.innerHTML = `You are using ${browserInfo.browserName} version ${browserInfo.versionNumber}`;

	

