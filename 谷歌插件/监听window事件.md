# 在dom刚渲染的时候对其进行操作

问题描述：在写chrome插件的时候，要去获取页面的节点，对其进行点击事件监听，刚开始是使用的```window.onload``` 等待页面全部加载完毕后去处理，但是各种图片资源加载完太慢了。



解决办法： 

- 监听DOM节点插入事件，通过claaName 判断是否为目标节点，当目标dom插入后就可以马上取获取到这个节点，对其进行操作

  ```javascript
  window.addEventListener('DOMNodeInserted',event => {
    //dom.children.length每次dom插入更新的时候只会有1条
    if (dom.className === 'name' && dom.children.length === 1) {
      const selector = dom.children[0].getAttribute('data-selector');
      // 
    }
  })
  ```

小技巧：

```typescript
const nodeList: NodeListOf<Element> = document.querySelectorAll(
      'ul.wiki-tree-ul li.list-item-wrapper'
    );
```

> 以上的`NodeListOf`类型并不是一个纯数组，他的原型链上只有部分数组操作，那想要使用数组其他方法怎么做呢，那我们就要把它变成真数组，操作如下：

```typescript
const realyArray = Array.prototype.slice.call(nodeList, 0)
// 我们通过数组的原型链去取到 slice 方法，再通过call改变它的指向，指向nodelist，参数传0，相当于复制nodeList数组，这样我们就得到了一个内容与nodeList一致的真数组了。
```

