export const apiUrl = "https://tosintech-website-backend.onrender.com/api";
export const fileUrl = "https://tosintech-website-backend.onrender.com/";
export const SUPABASE_BUCKET_URL =
  "https://csddxfqqzdegygaormqm.supabase.co/storage/v1/object/public";
export const token = () => {
  const adminInfo = localStorage.getItem("adminInfo");
  const data = JSON.parse(adminInfo);
  return data.token;
};
