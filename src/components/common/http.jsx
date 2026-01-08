export const apiUrl = "https://tosintech-website-backend.onrender.com/api";
export const fileUrl = "https://tosintech-website-backend.onrender.com/";
export const token = () => {
  const adminInfo = localStorage.getItem("adminInfo");
  const data = JSON.parse(adminInfo);
  return data.token;
};
