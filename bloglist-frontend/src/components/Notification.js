import React from 'react'

const Notification = ({ message, tyyppi }) => {
  if (message === null) {
    return null
  }

  if (tyyppi === "error") {
    return (
      <div className="error">
        {message}
      </div>
    )  
  } else {
    return (
      <div className="messu">
        {message}
      </div>
    )  
  }
}

export default Notification