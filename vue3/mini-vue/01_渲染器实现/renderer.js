 const h = (tag, props, children) => {
  // vnode -> javascript -> {}
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // vnode -> element
  // 1.创建出真实的元素，并且在vnode上保留el
  const el = vnode.el = document.createElement(vnode.tag);

  // 2.处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3.处理 children
  if (vnode.children) {
    if (typeof vnode.children === "string")  {
        el.textContent = vnode.children
    } else {
        vnode.children.forEach(item => {
            mount(item, el)
        });
    }
  }

  // 4.将el挂载到 container 上
  container.appendChild(el)
};


// 修改dom的时候，进行 diff 算法判断
const patch = (n1, n2) => {
    // 如果标签不同，那么直接去掉之前的vnode节点，添加新的
    if (n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement
        n1ElParent.removeChild(n1.el)
        mount(n2, n1ElParent)
    } else {
        // 1.取出 element 对象，并且在 n2 中进行保存
        el = n2.el = n1.el
        
        // 2.处理 props
        const oldProps = n1.props || {}
        const newProps = n2.props || {} 
        // 2.1.获取所有的newProps 添加到el
        for (const key in newProps) {
            const oldValue = oldProps[key]
            const newValue = newProps[key]
            if (newValue !== oldValue) {
                if (key.startsWith("on")) {
                    el.addEventListener(key.slice(2).toLowerCase, newValue);
                  } else {
                    el.setAttribute(key, newValue );
                  }
            }
        }
        // 2.2.删除旧的 props
        for (const key in oldProps) {
            if (!(key in newProps  )) {
                const value = oldProps[key]
                if (key.startsWith("on")) {
                    el.removeEventListener(key.slice(2).toLowerCase, value);
                  } else {
                    el.removeAttribute(key);
                  }
            }
        }

        // 3.处理 children
        const oldChildren = n1.children || {}
        const newChildren = n2.children || {}
        if (typeof newChildren === "string") { // 情况一： newChildren 本身是string
          // 边界情况 (edge case)
          if (typeof oldChildren === "string") {
            if (oldChildren !== newChildren) {
              el.textContent = newChildren
            }
          } else {
            el.innerHTML = newChildren
          } 
        } else { // 情况二： newChildren 本身是个数组
          if (typeof oldChildren === "string") {
            el.innerHTML = ""
            newChildren.forEach(item => {
              mount(item, el)
            });
          } else {
            // 判断新旧子节点的长度，取长度短的去遍历
            // 2. 如果旧子节点长，多出来的直接去掉
            const commonLength = Math.min(oldChildren.length, newChildren.length)
            for (let i = 0;i < commonLength;i++) {
              patch(oldChildren[i], newChildren[i])
            }

            // 1. 如果新子节点长，那么多出来的直接添加     
            if (oldChildren.length < newChildren.length) {
              newChildren.slice(commonLength).forEach(item => {
                mount(item, el)
              })
            } else {
              // 2. 如果旧子节点长，多出来的直接去掉
              oldChildren.slice(commonLength).forEach(item => {
                el.removeChild(item.el)
              }) 
            }
          }
        }
    }
}
