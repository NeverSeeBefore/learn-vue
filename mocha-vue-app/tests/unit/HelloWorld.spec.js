import HelloWorld from "@/components/HelloWorld";
import Vue from 'vue';
import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils'; // vue 提供的测试工具库

describe("HelloWorld.vue", () => {
  it("测试msg属性，是否会被渲染", () => {
    const msg = 'hello world!!!';
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor({
      propsData: {
        msg: msg
      }
    }).$mount();
    const domInner = vm.$el.getElementsByTagName("h1")[0].innerHTML.trim();
    expect(domInner).to.be.include(msg)
  })

  it("测试msg属性，是否会被渲染，@vue/test-utils", () => {
    const msg = 'hello world!!!';
    const wrapper = mount(HelloWorld, {
      propsData: {msg}
    });
    const domInner = wrapper.find('h1').text();
    expect(domInner).to.be.include(msg)
  })
  it("测试msg属性，是否会被渲染，@vue/test-utils setProps", () => {
    const msg = 'hello world!!!';
    const wrapper = mount(HelloWorld);
    wrapper.setProps({msg})
    const domInner = wrapper.find('h1').text();
    expect(domInner).to.be.include(msg)
  })
})

