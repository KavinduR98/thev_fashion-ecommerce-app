import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default Spinner