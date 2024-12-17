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
          name: "古意冬瓜茶",
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
          name: "薑母茶",
          engName: "Ginger Tea",
          price: 55,
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
      selectedItem:{},
      addToCart:[],
      productsNum : 1,
      productsIce:'正常冰',
      productsSugar:'半糖'
    };
  },
  methods: {
    selectedItemFunc(product){
        this.selectedItem={...product}
        // this.selectedItem = product
    },
    addToCartFunc(){
        this.addToCart.push(this.selectedItem)
    }
  },
};

Vue.createApp(App).mount("#app");
