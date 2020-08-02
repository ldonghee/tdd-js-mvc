import View from "./View.js";

const KeywordView = Object.create(View);

KeywordView.setup = function(el) {
  this.init(el);
  return this;
};

KeywordView.render = function(data = []) {
  this.el.innerHTML = data.length
    ? this.getKeywordHtml(data)
    : this.messages.NO_RESULT;

  this.bindClickEvent();
  this.show();
  return this;
};

KeywordView.getKeywordHtml = function(data) {
  return (
    data.reduce((html, item, index) => {
      html += `<li data-keyword="${item.keyword}">
        <span class="number">${index + 1}</span>
        ${item.keyword}
      </li>`;
      return html;
    }, "<ul class='list'>") + "</ul>"
  );
};

KeywordView.bindClickEvent = function() {
  Array.from(this.el.querySelectorAll("li")).forEach(li => {
    li.addEventListener("click", e => this.onClickKeyword(e));
  });
};

KeywordView.onClickKeyword = function(event) {
  const { keyword } = event.currentTarget.dataset;
  this.emit("@click", { keyword });
};

KeywordView.messages = {
  NO_RESULT: "검색 결과가 없습니다."
};

export default KeywordView;
