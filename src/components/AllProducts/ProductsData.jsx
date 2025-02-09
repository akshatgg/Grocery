import cld from '../../cloudinaryConfig';

const ProductsData = [
  {
    id: 1,
    Category: "Vegetables",
    target: [
      {
        uid: 100,
        vegetablesDetails: {
          name: "Carrot",
          photo_url: cld.image('Grocery/Vegetables/uqg3oyhtsqiiwgspl32k').toURL(),
          price: 2.5,
        },
      },
      {
        uid: 101,
        vegetablesDetails: {
          name: "Broccoli",
          photo_url: cld.image('Grocery/Vegetables/jyrtatcewf0vzws8mf7y').toURL(),
          price: 3.0,
        },
      }
    ],
  },
  {
    id: 2,
    Category: "Fruits",
    target: [
      {
        uid: 102,
        fruitDetails: {
          fruitName: "Apple",
          photo_url: cld.image('Grocery/Fruits/sujj0ppijzu7ayllhziy').toURL(),
          price: 1.2,
        },
      },
      {
        uid: 103,
        fruitDetails: {
          fruitName: "Banana",
          photo_url: cld.image('LMS/m8fwpdjo2kuguzaldvxz').toURL(),
          price: 0.8,
        },
      },
    ],
  },
  {
    id: 3,
    Category: "Grain and Pulses",
    target: [
      {
        uid: 104,
        strMeal: "Black Beans",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 5.0,
      },
      {
        uid: 105,
        strMeal: "Kidney Red Bean",
        photo_url: cld.image('Grocery/Grain and Pulses/qkfsglm4luo0ltokrt7e').toURL(),
        price: 6.5,
      },
      {
        uid: 106,
        strMeal: "Black Gram",
        photo_url: cld.image('Grocery/Grain and Pulses/xykvqd2kid3axqoiv0d7').toURL(),
        price: 6.5,
      },
    ],
  },
  {
    id: 4,
    Category: "Beverages",
    target: [
      {
        uid: 107,
        strDrink: "Coke",
        photo_url: cld.image('Grocery/Beverages/lrys9hfimfzecbforiig').toURL(),
        price: 2.0,
      },
      {
        uid: 108,
        strDrink: "Mango Juice",
        photo_url: cld.image('Grocery/Beverages/zpaeci8u74wounq2puko').toURL(),
        price: 1.5,
      },
    ],
  },
  {
    id: 5,
    Category: "Snaks & Namkeen",
    target: [
      {
        uid: 109,
        name: "Lays",
        photo_url: cld.image('Grocery/Snaks and Namkeen/aigums0f7p67z4cu0rf7').toURL(),
        price: 1.0,
      },
      {
        uid: 110,
        name: "Kurkure",
        photo_url: cld.image('Grocery/Snaks and Namkeen/naj340drclocypy5g0vp').toURL(),
        price: 1.0,
      },
    ],
  },
  {
    id: 6,
    Category: "Biscuits & Cookies",
    target: [
      {
        uid: 111,
        name: "Oreo",
        photo_url: cld.image('Grocery/Biscuits and cookies/v0ry40asu4sbz64fvf0t').toURL(),
        price: 2.0,
      },
      {
        uid: 112,
        name: "Parle-G",
        photo_url: cld.image('Grocery/Biscuits and cookies/txn0flgbnujeknohvpw7').toURL(),
        price: 1.5,
      },
    ],
  },
  {
    id: 7,
    Category: "Can & Jarred Food",
    target: [
      {
        uid: 113,
        name: "Maggi",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 1.0,
      },
      {
        uid: 114,
        name: "Pickle",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 2.0,
      },
    ],
  },
  {
    id: 8,
    Category: "Chocolate & Sweets",
    target: [
      {
        uid: 115,
        name: "Dairy Milk",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 1.5,
      },
      {
        uid: 116,
        name: "Munch",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 1.0,
      },
    ],
  },
  {
    id: 9,
    Category: "Ketchup & Sauces",
    target: [
      {
        uid: 117,
        name: "Tomato Ketchup",
        photo_url: cld.image('Grocery/Dairy Products/MILK_Whole-64oz-1_vml4xm').toURL(),
        price: 1.0,
      },
      {
        uid: 118,
        name: "Soya Sauce",
        photo_url: cld.image('Grocery/Dairy Products/MILK_Whole-64oz-1_vml4xm').toURL(),
        price: 2.0,
      },
    ],
  },
  {
    id: 10,
    Category: "Dairy Products",
    target: [
      {
        uid: 119,
        name: "Milk",
        photo_url: cld.image('Grocery/Dairy Products/MILK_Whole-64oz-1_vml4xm').toURL(),
        price: 1.5,
      },
      {
        uid: 120,
        name: "Cheese",
        photo_url: cld.image('Grocery/Dairy Products/81teXkjiJTL_edbxx0').toURL(),
        price: 1.0,
      },
    ],
  },
  {
    id: 11,
    Category: "Masaale & Spices",
    target: [
      {
        uid: 121,
        name: "Turmeric",
        photo_url: cld.image('Grocery/Masaala and spices/vbceziwxwttq5bvxnffu').toURL(),
        price: 1.0,
      },
      {
        uid: 122,
        name: "Chilli Powder",
        photo_url: cld.image('Grocery/Masaala and spices/khn6dhpplxmzdgbgiqbc').toURL(),
        price: 2.0,
      },
    ],
  }
];

export default ProductsData;
