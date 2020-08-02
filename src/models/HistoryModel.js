export default {
  data: [
    { keyword: "피자", date: "12.03" },
    { keyword: "옥수수", date: "12.02" },
    { keyword: "바나나", date: "12.01" }
  ],

  list() {
    return Promise.resolve(this.data);
  },

  add(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword);
    }

    const date = "12.31";
    this.data = [{ keyword, date }, ...this.data];
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword);
  }
};
