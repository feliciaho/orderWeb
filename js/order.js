const App = {
  data() {
    return {
      iceType: ["正常冰", "少冰", "微冰", "去冰", "熱"],
      sugarType: ["全糖", "七分", "半糖", "三分", "無糖"],
      toppingsType: ["珍珠", "粉條", "小粉圓", "椰果", "芋頭"],
      products: [
        {
          name: "珍珠鮮奶茶",
          engName: "Pearl Milk Tea",
          price: 60,
        },
        {
          name: "鮮奶茶",
          engName: "Milk Tea",
          price: 50,
        },
        {
          name: "古意冬瓜茶(糖固定)",
          engName: "Winter Melon Drink",
          price: 30,
        },
        {
          name: "蜜香紅茶",
          engName: "Black Tea",
          price: 30,
        },
        {
          name: "包種青茶",
          engName: "Black Tea",
          price: 35,
        },
        {
          name: "檸檬烏龍",
          engName: "Lemon Oolong Tea",
          price: 55,
        },
        {
          name: "薑母茶(熱飲)",
          engName: "Ginger Tea",
          price: 55,
          iceType:"熱",
        },
        {
          name: "青草茶",
          engName: "Herbal Tea",
          price: 35,
        },
        {
          name: "金桔檸檬",
          engName: "Kumquat Lemonade",
          price: 40,
        },
        {
          name: "柳澄青茶",
          engName: "Orange Mountain Tea",
          price: 45,
        },
      ],
      selectedItem: {},
      addToCart: [],
      sum: 0,
    };
  },
  methods: {
    // select item
    selectedItemFunc(product) {
      this.selectedItem = {
        // 用淺拷貝可以直接取值 部會包在變數裡
        ...product,
        count: 1,
        ice: "正常冰",
        sugar: "半糖",
        topping: [],
        psText: "",
      };
      switch (product.name) {
        case"薑母茶(熱飲)":
          this.selectedItem.ice = "熱";
          break;
        case"古意冬瓜茶(糖固定)":
          this.selectedItem.sugar = "七分";
          break;
      };
    },
    // add to cart
    addToCartFunc() {
      // 使用淺拷貝不讓跟新的值連動
      this.addToCart.push({ ...this.selectedItem });
      this.calculateFunc();
      this.resetFunc();
    },
    // count price
    calculateFunc(){
      let total = 0;
      this.addToCart.forEach((element) => {
        total += (element.price + element.topping.length * 5) * element.count;
      });
      // 必須放在forEach外面才能讓addToCart陣列為空時也可以繼續計算
      this.sum = total;
    },
    // cancel button
    resetFunc() {
      this.selectedItem = {};
    },
    // confirm button
    confirmFunc() {
      this.addToCart = [];
      this.selectedItem = {};
      this.sum = 0;
      alert("已收到您的訂單");
      this.sum=0;
    },
    // delete one
    deleteOneFunc(num) {
      this.addToCart.splice(num, 1);
      this.calculateFunc();
    },
  },
};

Vue.createApp(App).mount("#app");
