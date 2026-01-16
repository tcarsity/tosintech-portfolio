import imageCompression from "browser-image-compression";

export async function resizeImage(file, maxSize) {
  return await imageCompression(file, {
    maxWidthOrHeight: maxSize,
    initialQuality: 0.85,
    useWebWorker: true,
  });
}
