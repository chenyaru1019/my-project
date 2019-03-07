export default {
    getUserInfo: () => {
        return {
            code: "0",
            message: "访问成功",
            data: [{
                    id: 1,
                    licNumber: '陕A79898',
                    color: 1,
                    buyTime: '2017-04-01'
                },
                {
                    id: 2,
                    licNumber: '陕A2222',
                    color: 1,
                    buyTime: '2017-04-01'
                },
                {
                    id: 3,
                    licNumber: '陕A3333',
                    color: 1,
                    buyTime: '2017-04-01'
                }
            ]
        }
    }
}