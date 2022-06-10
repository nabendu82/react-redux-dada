import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    },[])

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <>
            <h2>User List</h2>
            <>{userData.users && userData.users.map(user => <h5>{user.name}</h5>)}</>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)