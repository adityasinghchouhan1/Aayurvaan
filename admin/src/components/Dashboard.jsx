import React, { useEffect, useState } from 'react'
import adminAxios from '../utils/adminAxios'
import SummaryApi from '../common/SummaryAPI'
import {
  FaShoppingCart,
  FaUsers,
  FaBoxOpen,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelopeOpenText,
  FaClock,
} from 'react-icons/fa'

const Dashboard = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    try {
      const res = await adminAxios.get(SummaryApi.dashboardStats.url)
      setStats(res.data)
    } catch (err) {
      console.error('Failed to fetch dashboard stats', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="animate-spin h-12 w-12 border-b-4 border-blue-600 rounded-full"></div>
      </div>
    )

  return (
    <div className="p-6 space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Orders"
          value={stats?.total_orders}
          icon={<FaShoppingCart />}
          color="from-purple-500 to-indigo-500"
        />

        <StatCard
          title="Total Users"
          value={stats?.total_users}
          icon={<FaUsers />}
          color="from-blue-500 to-cyan-500"
        />

        <StatCard
          title="Total Products"
          value={stats?.total_products}
          icon={<FaBoxOpen />}
          color="from-green-500 to-emerald-500"
        />
      </div>

      {/* Product Section */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Product Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MiniStat
            label="Active Products"
            value={stats?.active_products}
            icon={<FaCheckCircle className="text-green-500" />}
          />

          <MiniStat
            label="Deactive Products"
            value={stats?.deactive_products}
            icon={<FaTimesCircle className="text-red-500" />}
          />
        </div>
      </div>

      {/* Contact Query Section */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Contact Queries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MiniStat
            label="Total Queries"
            value={stats?.total_queries}
            icon={<FaEnvelopeOpenText className="text-blue-500" />}
          />

          <MiniStat
            label="Pending Queries"
            value={stats?.pending_queries}
            icon={<FaClock className="text-yellow-500" />}
          />
        </div>
      </div>
    </div>
  )
}

/* Reusable Large Card */
const StatCard = ({ title, value, icon, color }) => (
  <div
    className={`bg-gradient-to-r ${color} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition`}
  >
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
  </div>
)

/* Small Card */
const MiniStat = ({ label, value, icon }) => (
  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm">
    <div>
      <p className="text-gray-600">{label}</p>
      <h4 className="text-2xl font-bold">{value}</h4>
    </div>
    <div className="text-3xl">{icon}</div>
  </div>
)

export default Dashboard
