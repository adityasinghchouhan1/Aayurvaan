import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { TbLayoutDashboardFilled } from 'react-icons/tb'
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaSignOutAlt,
  FaEnvelope,
  FaClipboardList,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaImages,
} from 'react-icons/fa'
import { FaUserShield } from 'react-icons/fa'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleProductMenu = () => {
    setIsProductOpen(!isProductOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-16' : 'w-64'
        } bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white fixed h-full shadow-lg transition-all duration-300`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-5 shadow-md">
                <FaUserShield size={36} />
              </div>
              <h1 className="text-xl font-semibold mt-2">Admin Panel</h1>
            </div>
          )}
          <button onClick={toggleSidebar}>
            <FaBars size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6 space-y-2">
          {/* Dashboard */}
          <Link
            to="dashboardCards"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <TbLayoutDashboardFilled size={20} />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>

          {/* Registered Users */}
          <Link
            to="registered-users"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <FaUsers size={20} />
            {!isCollapsed && <span className="ml-3">Registered Users</span>}
          </Link>

          {/* Orders */}
          <Link
            to="order"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <FaShoppingCart size={20} />
            {!isCollapsed && <span className="ml-3">Orders</span>}
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={toggleProductMenu}
              className="flex items-center justify-between w-full px-4 py-3 hover:bg-teal-500 rounded-lg transition"
            >
              <div className="flex items-center">
                <FaBoxOpen size={20} />
                {!isCollapsed && <span className="ml-3">Products</span>}
              </div>
              {!isCollapsed &&
                (isProductOpen ? <FaChevronUp /> : <FaChevronDown />)}
            </button>

            {/* Dropdown Items */}
            {isProductOpen && !isCollapsed && (
              <div className="ml-10 mt-2 space-y-2">
                <Link
                  to="ProductUpload"
                  className="block py-2 hover:text-teal-400 transition"
                >
                  ➤ Upload Product
                </Link>
                <Link
                  to="ProductManage"
                  className="block py-2 hover:text-teal-400 transition"
                >
                  ➤ Manage Products
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            to="contect"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <FaEnvelope size={20} />
            {!isCollapsed && <span className="ml-3">Contact Data</span>}
          </Link>

          {/* Therapy */}
          <Link
            to="UploadServices"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <FaClipboardList size={20} />
            {!isCollapsed && <span className="ml-3">Therapy</span>}
          </Link>

          {/* Slider */}
          <Link
            to="SliderUpload"
            className="flex items-center px-4 py-3 hover:bg-teal-500 rounded-lg transition"
          >
            <FaImages size={20} />
            {!isCollapsed && <span className="ml-3">Slider Upload</span>}
          </Link>

          {/* Logout */}
          <Link
            to="/"
            className="flex items-center px-4 py-3 hover:bg-red-500 rounded-lg transition mt-6"
          >
            <FaSignOutAlt size={20} />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-grow ${
          isCollapsed ? 'ml-16' : 'ml-64'
        } transition-all duration-300`}
      >
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Sidebar
