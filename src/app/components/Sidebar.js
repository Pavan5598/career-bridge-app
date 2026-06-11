"use client";

export default function Sidebar({
  currentUser,
  activeTab,
  setActiveTab,
}) {
  const adminTabs = [
    "dashboard",
    "users",
    "courses",
    "enquiries",
    "students",
    "reports",
    "settings",
    "rbac",
  ];

  const tabs =
    currentUser?.role === "Admin"
      ? adminTabs
      : currentUser?.permissions || [];

  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-5 border-b">
        <h1 className="text-xl font-bold">
          Career Bridge
        </h1>
      </div>

      <div className="p-4 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-3 rounded transition ${
              activeTab === tab
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() +
              tab.slice(1)}
          </button>
        ))}
      </div>
    </aside>
    
  );
}