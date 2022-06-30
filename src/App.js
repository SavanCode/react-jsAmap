import React from 'react';
import './style.css';

export default function App() {
  let a = 10;
  let str = '你好';
  let boo = true;
  let title = '999';
  const h1 = <h1>哈哈哈哈哈哈哈哈哈</h1>;
  const arr = [<h2>我是h2</h2>, <h3>我是h3</h3>];
  const arrStr = ['孙悟空', '猪八戒', '唐僧', '沙僧'];
  //方法一：定义一个空数组，将来用来存放名称标签
  const nameArr = [];
  arrStr.forEach((item) => {
    const temp = <h5>{item}</h5>;
    nameArr.push(temp);
  });

  /*数组的map方法,map中必须要写return 
 const res = arrStr.map(item=>{
    return item +'__'
})
 console.log(res)*/

  //JSX xml比HTML严格多了
  //需要使用花括号{}的情况：当我们JSX控制的区域内写一些JS表达式，则需要把代码写在花括号里面
  return <div id="container"></div>;
}
