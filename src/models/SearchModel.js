const data = [
  {
    id: 1,
    name: "[피자] 피자 후후",
    image: "./src/images/pizza.png"
  },
  {
    id: 2,
    name: "[파스타] 파스타 후후",
    image: "./src/images/pasta.png"
  },
  {
    id: 3,
    name: "[햄버거] 햄버거 후후",
    image: "./src/images/hambuger.png"
  },
  {
    id: 4,
    name: "[옥수수] 옥수수 후후",
    image: "./src/images/corn.png"
  }
];

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(() => {
        res(data);
      }, 200);
    });
  }
};
