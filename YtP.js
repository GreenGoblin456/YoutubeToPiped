// url na ktere to bude reagovat
let pattern = "https://www.youtube.com/*";

// smerovaci funkce
function redirect(requestDetails) {
  //uloží před načtením url a změního na stejne  video jako v piped
  let kolo = requestDetails.url;
  var video = kolo.substring(24);
  // nastavi nove url
  url = "https://piped.kavin.rocks/" + video;
console.log(url);
  // navrati object s hodnotou `redirectURL`
  return {
    redirectUrl: url
    };
}

// přidat the listener,
browser.webRequest.onBeforeRequest.addListener(
  redirect,
{urls:[pattern]},
  // blokuji puvodni stranku "blocking"
  ["blocking"]
);