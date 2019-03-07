const name = '这是一个测试';
class people {
    constructor(basePro = name) {
        console.log(basePro)
        this.basePro = basePro
        this.age = 27
    }
    sayhello() {
        console.log(this.basePro)
    }
}

export default people