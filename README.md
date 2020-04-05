# v-bind

  v-bind:a="type"  // 属性a，值为data.type
  v-bind:[attr]="type"  // 属性data.attr，值为data.type

  + 简写v-bind: -> :
  + 动态绑定 v-bind:[attr]="value"
  + 同时多个属性

    v-bind="{name: xx, age: 18, height='163cm'}"
    > 此时不能用来绑定class和style

  + 绑定class和style时 值 可以使用对象或数组
    - class
      - <div :class="{red: true, big: isBig}"></div>
      - <div :class="[isRed ? res : '', 'big']"></div>
      - <div :class="[{red: isRed, blue: isBLue} : '', 'big']"></div>
    - style
      - <div :style="{color: 'red', width: '100px'}"></div>
      - <div :style="[stylesObj1, stylesObj2]"></div>
  + modifier 修饰符 v-bind.xx

    .camel  将 view-box 转换成 viewBox  即转换成小驼峰格式(html的特性：将属性中大写字母转换成小写字母,.camel就是处理这个问题的)
    .prop 用于绑定dom属性 让这个属性成为dom的属性(:text-content.prop="abc", 此时发挥dom.textContent的作用)
    .sync

# v-on

  绑定属性
  v-on:click="addCounter"
  v-on:click="addCounter(5)" //传入参数
  v-on:click="addCounter(5, $event)" //传入参数，和原事件对象

  + v-on[event]=""  //动态绑定事件
  + v-on="{click: addConuner, ... }" //同时绑定多个事件，此时不能传参
  + 简写 v-on -> @
  + 修饰符

    .stop     // 阻止冒泡
    .prevent  // 阻止默认事件
    .capture  // 捕获事件
    .self     // 只执行自己的触发的事件（比如 如果冒泡，不会触发事件）
    > .prevent.self != .self.prevent
    .once     // 只会触发一次回调
    .passive   // 不阻止默认事件（告诉浏览器不会组使默认事件，可以立刻默认事件）
    > .passive 与 .prevent 不能一起使用
    > ↓↓↓↓↓按键修饰符↓↓↓↓↓↓↓
    .esc .enter .13 ...
    > @keyup.caps-lock="" @keyup.left=""

    - 设置别名  Vue.config.KeyCodes.v = 36;

# v-for

  列表循环

# v-model

# 计算属性
  *计算属性会被缓存*; 
  当依赖的数据变化了的时候，会重新设置XXX
  computed：{

    XXX:function(){
      return xxxx...;
    },
    XXX2:{
      get(){  // 相当于直接写成function

      },
      set(){

      }
    }

  }

# 侦听器

  > key 两种类型  data中的变量名。或字符串
  > value 4中类型 字符串、函数、对象、数组
  watch:{

    // 字符串类类型，执行methods里的方法
    person: 'handlePerson' //
    person: function(newValue, oldValue){
      // msg的值改变时执行
    }
    // 写成对象的形式
    person: {
      handler: function 
      deep: Boolean //是否深度监听，即如果是对象监听每一层
      immediate：Boolean // 回调将会在侦听开始之后立刻被调用。而不是等待侦听的数据更改后才会调用。
    }
    // 写成数组
    person: [
      'msgChange'
      function () {},
      {
        handler () {},
        deep: true,
        immediate: true
      }
    ]
    // 监听对象中的某个属性
    'person.name': function() {};

  }

$watch()
  参数

    1. 三个参数

    监听的属性，执行的方法，配置的选项（deep: true, mmediate: true）

    2. 两个参数

    监听的属性， {handler(){}, deep: true, mmediate: true}
    

# vue-resource

  在vue之后引入
  会在vue上挂在一个$http, 其中有网络请求方法方法; 

# axios

  axios({}).then()
  axios(url, {}).then()
  axios.get(url); 
  ... 
  **并发**
  axios.all([

    axios.get(),
    axios.get(),
    ...

  ]).then(axios.spread((get1, get2) => {}))
  **拦截器**
  axios.interceptors

  axios.interceptors.request.use((config) => {

    console.log(config);
    return config;

  })

  axios.interceptors.response.use((response) => {

    console.log(response);

  })

# template

  1. new Vue()
  2. 看是否指定了el -- 如果指定了el，看是否有temlate；没有el时,等待vm.$mount(el)时，再检查是否有temlate
  3. 有telplate时使用template，如果没有，使用el得到模板
  4. 渲染
  5. 挂载

  el -> 获取el.outerHTML  -> 得到模板 => render渲染 -> 替换$el -> 变成真正的el

  **template**

# 生命周期

1. new vue()  初始化vue和生命周期，此时只有vue本身有的事件和生命周期函数
2. 初始化     初始化vue的注入（data, template, computed ,...）
3. 编译模板    查看el和template 否则等待$mount(el)时查看template，没有template时检查el指向的dom元素，生成template
4. 挂载 通过render(template)*重新*生成dom，创建$el并替换原来的el
5. 再data改变时，更新虚拟dom，重新渲染
6. $destory()   调用后 销毁子组件、接触监听器；
7. the end

生命周期钩子，是在vm的生命周期内留给使用者的展示身手的时间

1. beforeCreate

  vm有了自身的属性，

2. created

  vm有了用户设置的注入    （发送ajax, 请求数据）

3. beforeMount

  模板已经生成，创建真实dom之前

4. mounted

  dom已经被挂载了, 页面渲染完成  (操作dom)

5. beforeUpdate

  数据改变了，即将要更新dom了

6. updated

  dom 更新完毕

7. beforeDestory();

  即将销毁, 可以清除*定时器*之类的, 

8. destoryed()

  已经销毁

# 组件

## 全局组件 

  Vue.component('component-name', {

    template:`
      <div>ccccc</div>
    `,
    props: ['videoList', 'abc']

  })
  组件名：使用*大驼峰式*或者*连字符式*
  props: 如果是小驼峰式属性名，应该使用连字符格式在行间传递

        v-bind=obj 会把obj的所有属性传入组件

  **props: 验证**

    props: {
      videolist: Array,
      abc: String
    }
    props: {
      videolist: {
        type: Array,          //类型
        required: true,       // 必穿
        default: function(){  // 默认值，引用类型需要用工厂函数返回，防止变量污染
          reruen [1,2]
        }，
        validator: function(){ // 自定义验证函数， 返回Boolean

        }
      }
      abc: String             
    }

  **单向数据流**
  父组件的prop改变可以影响子组件，但反过来则不行
  - 如果是数组、对象，子组件更改会影响到父组件，所以不要改变父组件传递进来的数据
  - 如果非要改变，把传进来的数据深度克隆一下。或者使用计算属性
  props: {array: Array},
  data(){
    return {
      myArray: [...this.array]
    }
  }
  **非prop特性**
  没有被注册的属性
  会被落到元素行间，会*替换*已有特性
  其中 *class style 会合并已有的特性*
  inheritAttrs: false  // 不继承非prop特性
  mounted 时， 通过this.$attrs 获取非prop特性

  **组件通讯**
  *$emit*
  $emit('event-name', arg)
  event-name 最好使用连字符格式
  *$listeners*
  绑定在改组件上的事件列表， 
  v-on="$listeners" // 一次性绑定所有事件，
  跨组件双向数据绑定
  v-model="abc"
  @update.sync="abc"
  
# 插槽
  <slot></slot>

  使用的时候
  <template v-slot:name></template>
  <template v-slot:default></template>
  使用组件内的数据
  <template v-slot:default="slotProps">
    <div>{{slotProps.user}}</div>
  </template>
   结构插槽属性
  <template v-slot:default="{user}">
    <div>{{user}}</div>
  </template>
  v-slot 简写 #


