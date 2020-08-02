import KeywordView from "./KeywordView.js";

const HistoryView = Object.create(KeywordView);

HistoryView.setup = function(el) {
  this.init(el);

  return this;
};

HistoryView.getKeywordHtml = function(data) {
  return (
    data.reduce((html, item, index) => {
      html += `<li data-keyword="${item.keyword}">
          ${item.keyword}
          <span class="date">${item.date}</span>
          <button class="btn-remove"></button>
        </li>`;
      return html;
    }, "<ul class='list'>") + "</ul>"
  );
};

HistoryView.bindRemoveBtn = function() {
  Array.from(this.el.querySelectorAll("button.btn-remove")).forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      this.onRemove(button.parentElement.dataset.keyword);
    });
  });
};

HistoryView.onRemove = function(keyword) {
  this.emit("@remove", { keyword });
};

export default HistoryView;
