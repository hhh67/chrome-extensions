document
  .getElementById("openAllComments")
  .addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab[0].id },
        function: () => {
          const d = document.getElementsByClassName("Details-element");
          Array.prototype.filter.call(d, (el) => {
            el.open = true;
          });
        },
      });
    });
  });

document
  .getElementById("closeAllComments")
  .addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab[0].id },
        function: () => {
          const d = document.getElementsByClassName("Details-element");
          Array.prototype.filter.call(d, (el) => {
            el.open = false;
          });
        },
      });
    });
  });
