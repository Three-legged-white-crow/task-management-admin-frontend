import setting from '../config/setting'

/**
 * @author
 * @description 获取accessToken
 * @returns
 */
export function getAccessToken() {
    if (setting.storage) {
        if ('localStorage' === setting.storage) {
            return localStorage.getItem(setting.tokenTableName)
        } else if ('sessionStorage' === setting.storage) {
            return sessionStorage.getItem(setting.tokenTableName)
        } else {
            return localStorage.getItem(setting.tokenTableName)
        }
    } else {
        return localStorage.getItem(setting.tokenTableName)
    }
}

/**
 * @author
 * @description 存储accessToken
 * @param accessToken
 * @returns 
 */
export function setAccessToken(accessToken) {
    if (setting.storage) {
        if ('localStorage' === setting.storage) {
            return localStorage.setItem(setting.tokenTableName, accessToken)
        } else if ('sessionStorage' === setting.storage) {
            return sessionStorage.setItem(setting.tokenTableName, accessToken)
        } else {
            return localStorage.setItem(setting.tokenTableName, accessToken)
        }
    } else {
        return localStorage.setItem(setting.tokenTableName, accessToken)
    }
}

/**
 * @author
 * @description 移除accessToken
 * @returns 
 */
export function removeAccessToken() {
    if (setting.storage) {
        if ('localStorage' === setting.storage) {
            return localStorage.removeItem(setting.tokenTableName)
        } else if ('sessionStorage' === setting.storage) {
            return sessionStorage.clear()
        } else {
            return localStorage.removeItem(setting.tokenTableName)
        }
    } else {
        return localStorage.removeItem(setting.tokenTableName)
    }
}
