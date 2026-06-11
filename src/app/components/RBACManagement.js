"use client";

import { useEffect, useState } from "react";
import CreateUserModal from "./CreateUserModal";

export default function RBACManagement({ currentUser }) {
  const [users, setUsers] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [selectedTabs, setSelectedTabs] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users");

    const data = await res.json();

    setUsers(data.users || []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [editId, setEditId] = useState(null);

  const editUser = (user) => {
    setEditId(user._id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });

    setSelectedTabs(user.permissions || []);

    setShowCreateModal(true);
  };

  const handleCreate = async () => {
    const url = editId ? `/api/admin/users/${editId}` : "/api/admin/users";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        permissions: selectedTabs,
      }),
    });

    fetchUsers();

    setEditId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
    });

    setSelectedTabs([]);

    setShowCreateModal(false);
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");

    if (!confirmDelete) return;

    await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
    });

    fetchUsers();
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold">RBAC Management</h2>

        <button
          onClick={() => {
            setEditId(null);

            setFormData({
              name: "",
              email: "",
              phone: "",
              role: "",
            });

            setSelectedTabs([]);

            setShowCreateModal(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create User
        </button>
      </div>

      <table className="w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.role}</td>

                <td>{u.permissions?.join(", ") || "None"}</td>

                <td>
                  {currentUser?.role === "Admin" && (
                    <>
                      <button
                        onClick={() => editUser(u)}
                        className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteUser(u._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <CreateUserModal
        show={showCreateModal}
        formData={formData}
        setFormData={setFormData}
        selectedTabs={selectedTabs}
        setSelectedTabs={setSelectedTabs}
        onSave={handleCreate}
        onClose={() => setShowCreateModal(false)}
      />
    </>
  );
}
