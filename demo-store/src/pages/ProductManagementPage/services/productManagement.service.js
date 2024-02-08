export class ProductService {
  static getProducts(text) {
    const dummyServiceResponse = [
      {
        id: 1,
        name: "Aceite de oliva",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00841001080200L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "750ml",
        price: 44,
        productStock: 100,
      },

      {
        id: 2,
        name: "Pasta Penne",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00807680958065L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        productSize: "500g",
        price: 30,
        productStock: 5,
      },
      {
        id: 3,
        name: "Prego Sauce",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750101139049L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "630g",
        price: 70,
        productStock: 30,
      },
      {
        id: 4,
        name: "Jugo del Valle",
        imageUrl:
          "https://www.benavides.com.mx/media/catalog/product/cache/1e14d9bf4283b604380ef95a7c475a07/1/0/1046576_2.jpg",
        productSize: "250ml",
        price: 10,
        productStock: 30,
      },
      {
        id: 5,
        name: "Pan Bimbo",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100011120L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        productSize: "G",
        price: 55,
        productStock: 20,
      },

      {
        id: 6,
        name: "Mayonesa Heinz",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00060887500822L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "300g",
        price: 31,
        productStock: 5,
      },
      {
        id: 7,
        name: "Catsup Heinz",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00060887500845L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "320ml",
        price: 25,
        productStock: 30,
      },
      {
        id: 8,
        name: "Coca cola",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00000007500761L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        productSize: "600ml",
        price: 20,
        productStock: 30,
      },

      {
        id: 9,
        name: "Medias Noches",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100011150L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "8pzas",
        price: 43,
        productStock: 30,
      },

      {
        id: 10,
        name: "Papel Higiénico Regio",
        imageUrl:
          "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750103662206L.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productSize: "18pzas",
        price: 190,
        productStock: 30,
      },
    ];

    if (text) {
      return dummyServiceResponse.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      return dummyServiceResponse;
    }
  }
}
