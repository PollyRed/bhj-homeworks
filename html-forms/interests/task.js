const allInterests = Array.from(document.querySelectorAll(".interests"));
const activeInterests = Array.from(document.querySelectorAll(".interests_active"));

for (interests of activeInterests) {
  const closestInterest = interests.closest(".interest");
  const innerInterest = Array.from(closestInterest.querySelectorAll(".interest"));

  closestInterest.querySelector(".interest__check").addEventListener("change", function(){
    for (interest of innerInterest) {
        interest.querySelector(".interest__check").checked = this.checked;
    }
  })
}