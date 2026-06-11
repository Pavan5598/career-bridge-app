const ROLES = [
  "Counsellor",
  "Tutor",
  "Placement Officer",
  "Content Manager",
  "Student Support",
];

const PERMISSIONS = [
  "dashboard",
  "users",
  "courses",
  "enquiries",
  "students",
  "reports",
  "settings",
];

export default function CreateUserModal({
  show,
  formData,
  setFormData,
  selectedTabs,
  setSelectedTabs,
  onSave,
  onClose,
}) {
  if (!show) return null;

  const togglePermission = (tab) => {
    if (selectedTabs.includes(tab)) {
      setSelectedTabs(selectedTabs.filter((t) => t !== tab));
    } else {
      setSelectedTabs([...selectedTabs, tab]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white w-[500px] p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Create User</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-2"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full mb-2"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <select
          className="border p-2 w-full mb-4"
          value={formData.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
        >
          <option value="">Select Role</option>

          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <h3 className="font-semibold mb-2">Permissions</h3>

        {PERMISSIONS.map((tab) => (
          <label key={tab} className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={selectedTabs.includes(tab)}
              onChange={() => togglePermission(tab)}
            />
            {tab}
          </label>
        ))}

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2">
            Cancel
          </button>

          <button
            onClick={() => {
              if (!formData.name || !formData.email || !formData.role) {
                alert("Name, Email and Role are required");
                return;
              }

              onSave();
            }}
            className="bg-green-600 text-white px-4 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
