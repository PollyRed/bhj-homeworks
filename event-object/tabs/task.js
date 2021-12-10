"use strict";

const tabsArray = Array.from(document.querySelectorAll(".tabs"));

for (let tabs of tabsArray) {
  const tabArray = Array.from(tabs.querySelectorAll(".tab"));
  const tabContents = Array.from(tabs.querySelectorAll(".tab__content"));

  function tabsHandler() {
    const activeTab = tabs.querySelector(".tab_active");
    activeTab.className = "tab";
    this.className = "tab tab_active";
    tabContents[tabArray.indexOf(activeTab)].className = "tab__content";
    tabContents[tabArray.indexOf(this)].className = "tab__content tab__content_active";
  }

  for (let tab of tabArray) {
    tab.addEventListener("click", tabsHandler);
  }
}