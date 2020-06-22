import ToDoList from "@/components/ToDoList";
import { mount } from '@vue/test-utils';
import { expect } from "chai";

describe("ToDoList.vue", () => {
  it("初始时数据mask为空，输入框为''", () => {
    const wrapper = mount(ToDoList);
    const maskVal = wrapper.find("input").text();
    const maskData = wrapper.vm.mask;
    expect(maskVal).to.be.equal("")
    expect(maskData).to.be.equal("")
  })
  it("数据mask随输入的值改便", () => {
    const wrapper = mount(ToDoList);
    const input = wrapper.find("input");
    // input.element.value = "杉杉";
    // input.trigger("input")
    input.setValue("杉杉"); // 一句顶两句
    expect(wrapper.vm.mask).to.be.equal("杉杉")
  })

  it("添加任务", () => {
    const wrapper = mount(ToDoList);
    const button = wrapper.find("button");
    const length = wrapper.vm.maskList.length;
    // const input = wrapper.find("input");
    // input.setValue = "杉杉";
    console.log('111111',wrapper.findAll("li"))
    button.trigger("click");
    expect(wrapper.vm.maskList).lengthOf(length + 1)
    expect(wrapper.findAll('li')).lengthOf(length + 1);
    expect(wrapper.vm.mask).to.be.equal("");
  })
})