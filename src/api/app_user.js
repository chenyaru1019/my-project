import * as API from './'

export const login = (params) => {
    return API.POST('/api/v1/users/login', params)
}

export const user = () => {
    return API.get('/api/v1/books')
}