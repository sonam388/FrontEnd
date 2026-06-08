import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import { getContacts } from "../../services/adminService";

const Contacts = () => {

  const [contacts, setContacts] =
    useState([]);

  useEffect(() => {

    fetchContacts();

  }, []);

  const fetchContacts = async () => {

    try {

      const data =
        await getContacts();

      setContacts(
        data.contacts
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-[#1B5E20] mb-10">
        Contact Messages
      </h1>

      <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

        <table className="w-full">

          <thead className="bg-[#1B5E20] text-white">

            <tr>
              <th className="p-5">
                Name
              </th>

              <th className="p-5">
                Mobile
              </th>

              <th className="p-5">
                Email
              </th>

              <th className="p-5">
                Message
              </th>
            </tr>

          </thead>

          <tbody>

            {
              contacts.map(
                (item) => (
                  <tr
                    key={item._id}
                    className="border-b"
                  >

                    <td className="p-5">
                      {item.name}
                    </td>

                    <td className="p-5">
                      {item.mobile}
                    </td>

                    <td className="p-5">
                      {item.email}
                    </td>

                    <td className="p-5">
                      {item.message}
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

export default Contacts;