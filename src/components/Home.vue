<template>
  <div id="example">
    <span>{{getName}}</span>
    <span>{{getTest}}</span>
    <img :src="getSrc" alt="">
    <button @click="cs">按钮</button>
     <!-- <router-link to='/HelloWorld' tag='a'>page1</router-link>
    <router-link to='/test' tag='a'>page2</router-link> -->
  </div>

</template>

<script>
import { mapState } from 'vuex'
// import { name } from '../api/cyr'

export default {
    name: 'Home',
    data() {
        return {
            //  getName: this.$store.state.name
            // name:'chenyaru'
        }
    },
    computed: {  
        getTest() {
            // return this.$store.commit('routers')
        },
        getName() {
        //    return this.user.name
        },
        getSrc() {
            // return this.user.id
        },
        ...mapState(['user']),
    },
    mounted () {
        // this.esTest()
    },
    methods: {
        
        test() {
            // console.log(this.user)
        },
        cs() {
            var list = []
            const state = [
    {
        key1:'value1',
        key2:'value2'
    },
    {
         key3:'value3',
         key4:'value4'   
    },
      {
        key1:'value1',
        key2:'value2'
    },
    {
         key3:'value3',
         key4:'value4'   
    }
]

let aa = [1,2,3]
let bb = [...aa]

const arr = [1, 2, 3, 4];
const [first, second] = arr;

const cc = {age:3};
 cc.age = 27;
            list.push(...state)
            // let obj = { ...state, c:2};
            // console.log(arr)
            // this.$store.commit('setUser')
        },
        esTest() {
            // console.log(this.$route)
            class father {
                constructor() {
                    this.x = 1
                    this.y = 2
                }

                add() {
                    // console.log(this.x,this.y)
                }
            }

            class son extends father {
                constructor() {
                    super()
                    // this.x = 2
                    // this.y = 3
                }
                getAdd() {
                    super.add()
                }
            }

            let ab = new son();
            // console.log(ab.getAdd())
             function person(name){
                 this.name = name
             }
            function work(){
                
            }

            person.prototype.sayHi = function(){
                // console.log(this.name +'sayHi')
            }
            
            work.prototype.sayHello = function(){
                // console.log('sayHello')
            }
            person.constructor = work()
            work.prototype = new person();
             var cyr = new work('ccc')
            //  console.log(person.constructor === work())
            //  console.log(cyr.sayHi())

        }
    },
    watch: {
        $route() {
            // this.con()
        }
    },
}
</script>

