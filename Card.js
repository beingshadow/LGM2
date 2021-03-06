import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   //Checkif if is loading
          <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div className='row' id="main">
    
          {users.map(user =>
                      <div id="container"className="col-sm-6 col-md-4">
                        <div id="profile_container"className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: <span class="idno">{user.id}</span></p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users