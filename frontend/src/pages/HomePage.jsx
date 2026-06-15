import React from 'react'
import toast from 'react-hot-toast'

export const HomePage = () => {
  const handleToast = () => toast.success('Working 🎉')

  return (
    <div className="btn btn-outline">
      <button onClick={handleToast} className="px-4 py-2 bg-blue-600 text-white rounded">
        Show toast
      </button>
    </div>
  )
}   