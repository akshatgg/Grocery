import cld from '../../cloudinaryConfig';

const ProductsData = [
  {
    id: 1,
    Category: "Vegetables",
    target: [
      {
        vegetablesDetails: {
          name: "Carrot",
          photo_url: cld.image('Grocery/Vegetables/uqg3oyhtsqiiwgspl32k').toURL(),
          price: 2.5,
        },
      },
      {
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
        fruitDetails: {
          fruitName: "Apple",
          photo_url: cld.image('Grocery/Fruits/sujj0ppijzu7ayllhziy').toURL(),
          price: 1.2,
        },
      },
      {
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
        strMeal: "Black Beans",
        photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),
        price: 5.0,
      },
      {
        strMeal: "Kidney Red Bean",
        photo_url: cld.image('Grocery/Grain and Pulses/qkfsglm4luo0ltokrt7e').toURL(),
        price: 6.5,
      },
      {
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
        strDrink: "Coke",
        photo_url: cld.image('Grocery/Beverages/lrys9hfimfzecbforiig').toURL(),
        price: 2.0,
      },
      {
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
        name: "Lays",
        photo_url: cld.image('Grocery/Snaks and Namkeen/aigums0f7p67z4cu0rf7').toURL(),
        price: 1.0,
      },
      {
        name: "Kurkure",
        photo_url: cld.image('Grocery/Snaks and Namkeen/naj340drclocypy5g0vp').toURL(),
        price: 1
      }
    ],
  },
  {
    id: 6,
    Category: "Biscuits & Cookies",
    target: [
      {
        name: "Oreo",
        photo_url: cld.image('Grocery/Biscuits and cookies/v0ry40asu4sbz64fvf0t').toURL(),
        price: 2.0,
      },
      {
        name: "Parle-G",
        photo_url: cld.image('Grocery/Biscuits and cookies/txn0flgbnujeknohvpw7').toURL(),
        price: 1.5,
      }
    ],
  },
  {
    id: 7,
    Category: "Masaale & Spices",
    target: [
      {
        name: "Turmeric",
        photo_url: cld.image('Grocery/Masaala and spices/vbceziwxwttq5bvxnffu').toURL(),
        price: 1.0,
      },
      {
        name: "Red Chilli",
        photo_url: cld.image('Grocery/Masaala and spices/khn6dhpplxmzdgbgiqbc').toURL(),
        price: 1.5,
      }
    ],
  },
  {
    id: 8,
    Category: "Dairy Products",
    target: [
      {
        name: "Milk",
        photo_url: cld.image('Grocery/Dairy Products/MILK_Whole-64oz-1_vml4xm').toURL(),
        price: 1.0,
      },
      {
        name: "Cheese",
        photo_url: cld.image('Grocery/Dairy Products/81teXkjiJTL_edbxx0').toURL(),
        price  : 1.5,
      }
    ],
  }
];

export default ProductsData;
