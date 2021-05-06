export default {
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
        // setAccessToken(accessToken)
    },
    username(state, username) {
        state.username = username
    },
    permissions(state, permissions) {
        state.permissions = permissions
    },
}
