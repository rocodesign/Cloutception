import React from 'react'

const User = ({ username, image = null }) => {
  return (
    <a
      className="d-flex align-items-center link--unstyled"
      href={`/u/${username}`}
      target="_blank"
    >
      {image && (
        <div
          className="holdings__avatar"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      )}
      <div className="text-truncate holdings__name">
        <span>{username}</span>
      </div>
    </a>
  )
}

export default User
