import { add, abs } from "@/count.js";
import { expect } from 'chai';

// 测试用例  it
// 参数  用例名，函数
it('测试abs函数，期待返回值与输入相同', () => {
  expect(1 + 1).to.be.equal(2); // equal只能判断基础数据类型，想要比对对象是否一致，应使用 deep.equal() / eql()
});
it('测试abs函数，期待返回值与输入相反', () => {
  expect(abs(-1)).to.be.equal(1);
});
it('测试对象，期待返回值与输入相同', () => {
  expect({}).to.be.eql({});
});
it('测试对象，期待返回值与输入相同', () => {
  expect({}).to.be.deep.equal({});
});
it('测试abs，输入0，期待返回值0', () => {
  expect(abs(0)).to.be.equal(0);
});
it('测试abs，输入非数字，期待返回值NAN', () => {
  expect(abs("")).to.be.deep.equal(NaN);
  expect(abs(true)).to.be.deep.equal(NaN);
  expect(abs(null)).to.be.deep.equal(NaN);
  expect(abs(undefined)).to.be.deep.equal(NaN);
  expect(abs([])).to.be.deep.equal(NaN);
  expect(abs({})).to.be.deep.equal(NaN);
});

it('测试add，输入1,2,3,4，期待返回值10', () => {
  expect(add(1, 2, 3, 4)).to.be.equal(10);
});

// 分组
describe("abs函数", () => {
  it('测试abs函数，期待返回值与输入相同', () => {
    expect(1 + 1).to.be.equal(2); // equal只能判断基础数据类型，想要比对对象是否一致，应使用 deep.equal() / eql()
  });
  it('测试abs函数，期待返回值与输入相反', () => {
    expect(abs(-1)).to.be.equal(1);
  });
  it('测试abs，输入0，期待返回值0', () => {
    expect(abs(0)).to.be.equal(0);
  });
  it('测试abs，输入非数字，期待返回值NAN', () => {
    expect(abs("")).to.be.deep.equal(NaN);
    expect(abs(true)).to.be.deep.equal(NaN);
    expect(abs(null)).to.be.deep.equal(NaN);
    expect(abs(undefined)).to.be.deep.equal(NaN);
    expect(abs([])).to.be.deep.equal(NaN);
    expect(abs({})).to.be.deep.equal(NaN);
  });
})
describe('add函数', () => {
  it('测试add，输入1,2,3,4，期待返回值10', () => {
    expect(add(1, 2, 3, 4)).to.be.equal(10);
  });
})
// to.be.equal
// to.be.deep.equal // 比较对象类型 eql
// to.be.not.equal
// to.be.above // 大于 greaterThan
// at.least // 小于等于 
// to.be.ok // 判断真值
// to.be.lengthOf // 判断数组长度
// to.be.include // 包含 conatin metch(/s/)
