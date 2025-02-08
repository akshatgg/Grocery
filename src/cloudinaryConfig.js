// cloudinaryConfig.js
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'deor01if5', // Your Cloudinary cloud name
  },
});

export default cld;
