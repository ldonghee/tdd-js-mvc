export default {
  data: [
    { keyword: "파스타" },
    { keyword: "햄버거" },
    { keyword: "피자" },
    { keyword: "옥수수" }
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data);
      }, 200);
    });
  }
};
