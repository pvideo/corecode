if (location.protocol("chrome-extension:") >= 0) {
  console.log("Hardline Active");
  chrome.runtime.reload()
}
