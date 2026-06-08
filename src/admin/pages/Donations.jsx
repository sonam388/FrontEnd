import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import { getDonations } from "../../services/adminService";

const Donations = () => {

  const [donations, setDonations] =
    useState([]);

  useEffect(() => {

    fetchDonations();

  }, []);

  const fetchDonations = async () => {

    try {

      const data =
        await getDonations();

      setDonations(
        data.donations
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <AdminLayout>

      <h1 className="mb-10 text-3xl font-bold text-(--primary) sm:text-4xl">
        Donations
      </h1>

      <div className="surface-card overflow-x-auto rounded-3xl">

        <table className="w-full">

          <thead className="bg-(--accent) text-white">

            <tr>

              <th className="p-5">
                Donor
              </th>

              <th className="p-5">
                Amount
              </th>

              <th className="p-5">
                Mobile
              </th>

              <th className="p-5">
                Email
              </th>

              <th className="p-5">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              donations.map(
                (item) => (
                  <tr
                    key={item._id}
                    className="border-b"
                  >

                    <td className="p-5">
                      {
                        item.donorName
                      }
                    </td>

                    <td className="p-5">
                      ₹{item.amount}
                    </td>

                    <td className="p-5">
                      {item.mobile}
                    </td>

                    <td className="p-5">
                      {item.email || "-"}
                    </td>

                    <td className="p-5 font-semibold text-green-600">
                      {
                        item.paymentStatus
                      }
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
};

export default Donations;
