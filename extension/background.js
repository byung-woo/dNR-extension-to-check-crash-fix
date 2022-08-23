

chrome.declarativeNetRequest.getAvailableStaticRuleCount(
  (count) => {
    console.error("Available static rules: " + count);

    console.error("disable ruleset_0");

    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [
        "ruleset_0",
      ],
      enableRulesetIds: []
    }, () => {
      chrome.declarativeNetRequest.getAvailableStaticRuleCount(
        (count) => {
          console.error("Available static rules after disable: " + count);
        });
    });
  });
