import API from "./api";


// GET CONTACTS
export const getContacts = async () => {

  const adminInfo = JSON.parse(
    localStorage.getItem("adminInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${adminInfo.token}`,
    },
  };

  const { data } = await API.get(
    "/contact",
    config
  );

  return data;
};


// GET DONATIONS
export const getDonations = async () => {

  const adminInfo = JSON.parse(
    localStorage.getItem("adminInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${adminInfo.token}`,
    },
  };

  const { data } = await API.get(
    "/donation",
    config
  );

  return data;
};


// GET DASHBOARD STATS
export const getDashboardStats = async () => {

  const { data } = await API.get(
    "/dashboard"
  );

  return data;
};