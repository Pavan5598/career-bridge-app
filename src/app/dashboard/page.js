
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const ADMIN_TABS = [
  "dashboard",
  "users",
  "courses",
  "enquiries",
  "students",
  "reports",
  "settings",
  "rbac",
];

const USER_PERMISSIONS = [
  "dashboard",
  "users",
  "courses",
  "enquiries",
  "students",
  "reports",
  "settings",
];
const ROLES = [
  "Counsellor",
  "Tutor",
  "Placement Officer",
  "Content Manager",
  "Student Support",
];

export default function AdminDashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("dashboard");

  // users
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/user/profile");

      const data = await res.json();

      if (data.success) {
        setCurrentUser(data.user);

        if (data.user?.permissions?.length) {
          setActiveTab(data.user.permissions[0]);
        }
      }
    } catch {
      toast.error("Profile load failed");
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchUsers();
  }, []);

  // create user modal
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Counsellor",
  });

  const [selectedTabs, setSelectedTabs] = useState([]);

  // permission modal
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editTabs, setEditTabs] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  // ---------------- FETCH USERS ----------------
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();

      if (data.success) setUsers(data.users || []);
    } catch (err) {
      toast.error("Failed to load users");
    }
  };
  const handleEditUser = (user) => {
    setFormData({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });

    setSelectedTabs(user.permissions || []);

    setIsEditMode(true);
    setShowCreateModal(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ---------------- CREATE USER ----------------
  const handleCreateUser = async () => {
    const loadingToast = toast.loading(
      isEditMode ? "Updating user..." : "Creating user...",
    );

    try {
      const url = isEditMode
        ? `/api/admin/users/${formData._id}`
        : "/api/admin/users";

      const method = isEditMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          permissions: selectedTabs,
        }),
      });

      const data = await res.json();

      // if (!data.success) {
      //   toast.error(data.message || "Operation failed", {
      //     id: loadingToast,
      //   });
      //   return;
      // }

      // toast.success(
      //   isEditMode ? "User updated successfully" : "User created successfully",
      //   {
      //     id: loadingToast,
      //   },
      // );

      if (!data.success) {
        toast.error(data.message || "Operation failed");
        return;
      }

      toast.success(
        data.message || (isEditMode ? "User updated" : "User created"),
      );

      setShowCreateModal(false);
      setIsEditMode(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "Counsellor",
      });

      setSelectedTabs([]);

      fetchUsers();
    } catch (error) {
      console.log(error);

      toast.error("Server error", {
        id: loadingToast,
      });
    }
  };
  const handleDeleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Delete failed");
        return;
      }

      toast.success(data.message || "User deleted");

      fetchUsers();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // ---------------- PERMISSION UPDATE ----------------
  const openPermissionModal = (user) => {
    setSelectedUser(user);
    setEditTabs(user?.permissions || []);
    setShowPermissionModal(true);
  };

  const togglePermission = (tab, setState, state) => {
    setState(
      state.includes(tab) ? state.filter((t) => t !== tab) : [...state, tab],
    );
  };

  const savePermissions = async () => {
    try {
      const res = await fetch("/api/admin/users/permissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: selectedUser?._id,
          permissions: editTabs,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Permissions updated");
        setShowPermissionModal(false);
        fetchUsers();
      } else {
        toast.error("Update failed");
      }
    } catch {
      toast.error("Server error");
    }
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    toast.success("Logged out");
    router.replace("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Career Bridge</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-3">
          {(currentUser?.role === "admin"
            ? ADMIN_TABS
            : currentUser?.permissions || []
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 py-3 rounded-lg cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>

          {activeTab === "rbac" && (
            <button
              onClick={() => {
                setIsEditMode(false);

                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  role: "Counsellor",
                });

                setSelectedTabs([]);

                setShowCreateModal(true);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              + Create User
            </button>
          )}
        </div>

        {/* USERS TABLE */}
        {/* STATIC MODULES */}
        {activeTab !== "rbac" && (
          <div className="bg-white p-6 rounded-xl shadow ">
            <h2 className="text-xl font-bold capitalize">{activeTab}</h2>

            <p className="text-gray-500 mt-2">
              {activeTab} module content will be added later.
            </p>
          </div>
        )}

        {/* RBAC MODULE */}
        {activeTab === "rbac" && (
          <div className="bg-white p-5 rounded-xl shadow">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="border-b text-left">
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
                    <td colSpan="6" className="p-10 text-gray-500">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u._id} className="bg-gray-50 shadow-sm rounded-lg">
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td>{u.role}</td>
                      <td>{u.permissions?.join(", ") || "None"}</td>

                      <td className="space-x-2">
                        <button
                          onClick={() => openPermissionModal(u)}
                          className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
                        >
                          Permissions
                        </button>

                        <button
                          onClick={() => handleEditUser(u)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteUser(u._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* CREATE USER MODAL */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-[420px]">
              <h2 className="text-xl font-bold mb-4">
                {isEditMode ? "Edit User" : "Create User"}
              </h2>

              <input
                placeholder="Name"
                className="w-full border p-2 mb-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                className="w-full border p-2 mb-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                placeholder="Phone"
                className="w-full border p-2 mb-2"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <select
                className="w-full border p-2 mb-3"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              <p className="font-semibold mb-2">Permissions</p>

              {USER_PERMISSIONS.map((tab) => (
                <label key={tab} className="flex gap-2 mb-1">
                  <input
                    type="checkbox"
                    checked={selectedTabs.includes(tab)}
                    onChange={() =>
                      togglePermission(tab, setSelectedTabs, selectedTabs)
                    }
                  />
                  {tab}
                </label>
              ))}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-3 py-1 bg-gray-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleCreateUser}
                  className="px-3 py-1 bg-green-600 text-white cursor-pointer"
                >
                  {isEditMode ? "Update User" : "Create User"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PERMISSION MODAL */}
        {showPermissionModal && selectedUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-96">
              <h2 className="text-lg font-bold mb-3">Assign Permissions</h2>

              {USER_PERMISSIONS.map((tab) => (
                <label key={tab} className="flex gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={editTabs.includes(tab)}
                    onChange={() =>
                      togglePermission(tab, setEditTabs, editTabs)
                    }
                  />
                  {tab}
                </label>
              ))}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowPermissionModal(false)}
                  className="px-3 py-1 bg-gray-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={savePermissions}
                  className="px-3 py-1 bg-blue-600 text-white cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
