

# v-bind

  v-bind:a="type"  // 属性a，值为data.type
  v-bind:[attr]="type"  // 属性data.attr，值为data.type
  - 简写v-bind: -> :
  - 动态绑定 v-bind:[attr]="value"
  - 同时多个属性
    v-bind="{name: xx, age: 18, height='163cm'}"
    > 此时不能用来绑定class和style
  - 绑定class和style时 值 可以使用对象或数组
    - class
      - <div :class="{red: true, big: isBig}"></div>
      - <div :class="[isRed ? res : '', 'big']"></div>
      - <div :class="[{red: isRed, blue: isBLue} : '', 'big']"></div>
    - style
      - <div :style="{color: 'red', width: '100px'}"></div>
      - <div :style="[stylesObj1, stylesObj2]"></div>
  - modifier 修饰符 v-bind.xx
    .camel  将 view-box 转换成 viewBox  即转换成小驼峰格式(html的特性：将属性中大写字母转换成小写字母,.camel就是处理这个问题的)
    .prop 用于绑定dom属性 让这个属性成为dom的属性(:text-content.prop="abc", 此时发挥dom.textContent的作用)
    .sync
# v-on
  绑定属性
  v-on:click="addCounter"
  v-on:click="addCounter(5)" //传入参数
  v-on:click="addCounter(5, $event)" //传入参数，和原事件对象
  - v-on[event]=""  //动态绑定事件
  - v-on="{click: addConuner, ...}" //同时绑定多个事件，此时不能传参
  - 简写 v-on -> @
  - 修饰符
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
  


