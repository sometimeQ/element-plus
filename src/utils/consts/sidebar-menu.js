export default [
  {
    icon: "ios-cart",
    name: "products",
    title: "商品管理",
    children: [
      {
        title: "商品列表",
        route: "/products/products/list"
      },
      {
        title: "商品分类",
        route: "/products/products/categories"
      }
    ]
  },
  {
    icon: "md-person",
    name: "orders",
    title: "订单管理",
    children: [
      {
        title: "订单列表",
        route: "/orders/orders/index"
      }
    ]
  },
  {
    icon: "md-person",
    name: "ads",
    title: "轮播广告管理",
    children: [
      {
        title: "轮播广告列表",
        route: "/ads/ads/index"
      }
    ]
  },
  {
    icon: "md-person",
    name: "articles",
    title: "文章管理",
    children: [
      {
        title: "文章列表",
        route: "/articles/articles/index"
      }
    ]
  },
  {
    icon: "md-person",
    name: "wxUsers",
    title: "微信用户管理",
    children: [
      {
        title: "微信用户列表",
        route: "/wxUsers/wxUsers/index"
      }
    ]
  }
];
