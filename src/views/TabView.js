import View from "./View.js";

const TabView = Object.create(View);

TabView.setup = function(el) {
  this.init(el);
  this.bindClick();
  return this;
};

TabView.setActiveTab = function(tabName) {
  Array.from(this.el.querySelectorAll("li")).forEach(li => {
    li.className = li.innerHTML === tabName ? "active" : "";
  });
  this.show();
};

TabView.bindClick = function() {
  Array.from(this.el.querySelectorAll("li")).forEach(li => {
    li.addEventListener("click", e => this.onClickTab(li.innerHTML));
  });
};

TabView.onClickTab = function(tabName) {
  this.setActiveTab(tabName);
  this.emit("@change", { tabName });
};

export default TabView;
