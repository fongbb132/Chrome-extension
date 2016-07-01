// the fiel that executes in teh context of a page that's been loaded into the browser. 


chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="grey"'
  });
  chrome.tabs.insertCSS(specTab.id, {file:"styles.css"});
  chrome.tabs.executeScript(specTab.id, {file:"script.js"});
});