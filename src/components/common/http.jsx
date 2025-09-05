export const apiUrl = "https://web-production-d56e.up.railway.app/api";
export const fileUrl = "https://web-production-d56e.up.railway.app/";
export const token = () => {
  const adminInfo = localStorage.getItem("adminInfo");
  const data = JSON.parse(adminInfo);
  return data.token;
};
