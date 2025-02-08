// filepath: [cloudinaryConfig.js](http://_vscodecontentref_/3)
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});

export default cld;