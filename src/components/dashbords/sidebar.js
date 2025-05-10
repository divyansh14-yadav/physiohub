// import { LogOut } from "lucide-react";
// import { useEffect, useState } from "react";
// import { FaHome, FaCompass, FaUser, FaBlog } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";

// const Sidebar = (sidebar) => {
//   console.log(sidebar, "sidebar");

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("authId");
//     localStorage.removeItem("firstName");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");
//     setRole(role);
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   return (
//     <>
//       {sidebar?.user?.role === "user" ? (
//         <div className="w-[18%] min-h-screen bg-white border-r border-neutral-200 flex flex-col justify-between">
//           <div>
//             <div className="p-6 font-bold text-2xl flex items-center gap-2 text-gray-800">
//               <span className="text-purple-600">
//                 <FaHome size={28} />
//               </span>
//               PhysioHub
//             </div>
//             <nav className="mt-8">
//               <ul>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 bg-purple-100 text-purple-700 rounded-l-full font-semibold"
//                   to={"/dashboard"}
//                 >
//                   <FaHome /> My Dashboard
//                 </NavLink>

//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/discover"}
//                 >
//                   <FaCompass /> Discover
//                 </NavLink>

//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to="/profile"
//                 >
//                   <FaUser /> Profile
//                 </NavLink>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/blogs"}
//                 >
//                   <FaBlog /> Blogs
//                 </NavLink>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/"}
//                   onClick={handleLogout}
//                 >
//                   {/* <LogOut size={24} className="text-red-500 cursor-pointer" /> Logout */}
//                   <LogOut /> Logout
//                 </NavLink>
//               </ul>
//             </nav>
//           </div>

//           <div className="p-6 border-t border-neutral-200 flex items-center gap-3">
//             <img
//               src="https://randomuser.me/api/portraits/men/33.jpg"
//               alt="avatar"
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <div className="text-sm font-semibold">
//                 {sidebar?.user?.name}
//               </div>
//               <div className="text-xs text-gray-500">
//                 {sidebar?.user.email}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-[18%] min-h-screen bg-white border-r border-neutral-200 flex flex-col justify-between">
//           <div>
//             <div className="p-6 font-bold text-2xl flex items-center gap-2 text-gray-800">
//               <span className="text-purple-600">
//                 <FaHome size={28} />
//               </span>
//               PhysioHub
//             </div>
//             <nav className="mt-8">
//               <ul>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 bg-purple-100 text-purple-700 rounded-l-full font-semibold"
//                   to={"/dashboard"}
//                 >
//                   <FaHome /> Blogs
//                 </NavLink>

//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/discover"}
//                 >
//                   <FaCompass /> Rehab Protocol
//                 </NavLink>

//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to="/profile"
//                 >
//                   <FaUser /> Quiz
//                 </NavLink>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/blogs"}
//                 >
//                   <FaBlog /> FlashCard
//                 </NavLink>
//                 <NavLink
//                   className="flex items-center gap-3 px-6 py-3 hover:bg-purple-50 cursor-pointer"
//                   to={"/"}
//                   onClick={handleLogout}
//                 >
//                   <FaBlog /> Logout
//                 </NavLink>
//               </ul>
//             </nav>
//           </div>

//           <div className="p-6 border-t border-neutral-200 flex items-center gap-3">
//             <img
//               src="https://randomuser.me/api/portraits/men/33.jpg"
//               alt="avatar"
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <div className="text-sm font-semibold">{sidebar?.user?.name}</div>
//               <div className="text-xs text-gray-500">
//                 {sidebar?.user?.email}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;



import { LogOut } from "lucide-react";
import { FaHome, FaCompass, FaUser, FaBlog } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const user = localStorage.getItem("role")
  console.log(user);
  

  const navItems =
    user?.role === "Teacher"
      ? 
      
      [
        { to: "/createBlogs", icon: <FaHome />, label: "Blogs" },
        { to: "/", icon: <FaCompass />, label: "Rehab Protocol" },
        { to: "/", icon: <FaUser />, label: "Quiz" },
        { to: "/", icon: <FaBlog />, label: "FlashCard" },
      ]

  
      :     [
        { to: "/dashboard", icon: <FaHome />, label: "My Dashboard" },
        { to: "/discover", icon: <FaCompass />, label: "Discover" },
        { to: "/blogs", icon: <FaBlog />, label: "Blogs" },
        { to: "/quiz", icon: <FaBlog />, label: "Quiz" },
        { to: "/flashcard", icon: <FaBlog />, label: "Flashcard" },
        { to: "/userCourse", icon: <FaBlog />, label: "Course" },
        { to: "/profile", icon: <FaUser />, label: "Profile" },
      ]

  return (
    <div className="w-[18%] min-h-screen bg-white border-r border-neutral-200 flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-2xl flex items-center gap-2 text-gray-800">
          <span className="text-purple-600">
            <FaHome size={28} />
          </span>
          PhysioHub
        </div>
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
      </div>

      <div className="p-6 border-t border-neutral-200 flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/33.jpg"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold">{user?.name}</div>
          <div className="text-xs text-gray-500">{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
