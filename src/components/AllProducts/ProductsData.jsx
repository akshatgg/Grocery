import { AdvancedImage } from '@cloudinary/react';
import cld from '../../cloudinaryConfig';

const ProductsData = [
  {
      id: 1, // Vegetables Category
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
      id: 2, // Fruits Category
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
      target: [
        {
          strMeal: "Black Beans",
          photo_url: cld.image('Grocery/Grain and Pulses/uwrc4owghvkgpgw0eab1').toURL(),        
          price: 5.0,
        },
        {
          strMeal: "Kidney Red Beam",
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
      id: 4, // Drinks Category
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
  ];
  
  export default ProductsData;

  