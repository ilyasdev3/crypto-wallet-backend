import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Upload an image
const uploadResult = cloudinary.uploader;

const uploadToCloudinary = async (base64Image: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `data:image/jpeg;base64,${base64Image}`,
      {
        resource_type: "image",
        folder: "wallet-app",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );
  });
};

export { uploadToCloudinary };
