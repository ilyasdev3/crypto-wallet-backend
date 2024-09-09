import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "doo90wesa",
  api_key: "375892526598345",
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Upload an image
const uploadResult = cloudinary.uploader;

const uploadToCloudinary = async (file: any) => {
  return new Promise((resolve, reject) => {
    const stream = uploadResult.upload_stream((error, result) => {
      if (result) {
        resolve(result.secure_url);
      } else {
        reject(error);
      }
    });
    file.createReadStream().pipe(stream);

    stream.on("error", (error) => {
      reject(error);
    });
  });
};

export { uploadToCloudinary };
