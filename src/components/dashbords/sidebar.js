import { LogOut, Menu, X } from "lucide-react";
import {
  FaHome,
  FaCompass,
  FaUser,
  FaBlog,
  FaBook,
  FaClipboardList,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");
  const [userData, setUserData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("role"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserRole(role);
    setUserData(userInfo);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const teacherNavItems = [
    { to: "/TeacherBlogs", icon: <FaBlog />, label: "Blogs" },
    { to: "/teacherCourse", icon: <FaBook />, label: "Courses" },
    { to: "/teacherQuiz", icon: <FaClipboardList />, label: "Quiz" },
    { to: "/teacherFlashCard", icon: <FaGraduationCap />, label: "FlashCards" },
    { to: "/teacherLesson", icon: <FaChalkboardTeacher />, label: "Lesson" },
  ];

  const studentNavItems = [
    { to: "/dashboard", icon: <FaHome />, label: "My Dashboard" },
    { to: "/discover", icon: <FaCompass />, label: "Discover" },
    { to: "/blogs", icon: <FaBlog />, label: "Blogs" },
    { to: "/userCourse", icon: <FaBook />, label: "Courses" },
    { to: "/userFlashCard", icon: <FaGraduationCap />, label: "FlashCards" },
    { to: "/userQuiz", icon: <FaClipboardList />, label: "Quiz" },
    { to: "/profile", icon: <FaUser />, label: "Profile" },
  ];

  const navItems = userRole === "Teacher" ? teacherNavItems : studentNavItems;

  const SidebarContent = () => (
    <>
      <nav className="mt-8">
        <ul className="flex flex-col gap-1">
          {navItems.map(({ to, icon, label }, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 rounded-l-full font-semibold ${
                  isActive
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-purple-50 text-gray-700"
                }`
              }
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {icon} {label}
            </NavLink>
          ))}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50 w-full text-left"
          >
            <LogOut /> Logout
          </button>
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-purple-600 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <SidebarContent />
          </div>
          <div className="p-6 border-t border-neutral-200 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-sm font-semibold">{userData?.name || "User"}</div>
              <div className="text-xs text-gray-500">{userData?.email || "user@example.com"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[18%] min-h-screen bg-white border-r border-neutral-200 flex flex-col justify-between">
        <div>
          <SidebarContent />
        </div>
        <div className="p-6 border-t border-neutral-200 flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-sm font-semibold">{userData?.name || "User"}</div>
            <div className="text-xs text-gray-500">{userData?.email || "user@example.com"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
