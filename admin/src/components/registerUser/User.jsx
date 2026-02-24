import React, { useEffect, useState } from 'react'
import adminAxios from '../../utils/adminAxios'
import SummaryApi from '../../common/SummaryAPI'

const User = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    try {
      const res = await adminAxios.get(SummaryApi.registerUser.url)
      setUsers(res.data)
    } catch (err) {
      setError('Failed to fetch users')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Registered Users
        </h2>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-md">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && (
          <div className="text-gray-500 text-center py-8">
            No users found.
          </div>
        )}

        {/* Table */}
        {!loading && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                  <th className="p-3">ID</th>
                  <th className="p-3">Username</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium">{user.id}</td>
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      {user.is_staff ? (
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                          Admin
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                          User
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {new Date(user.date_joined).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default User