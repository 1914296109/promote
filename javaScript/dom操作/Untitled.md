# DOM 节点的操作

1. textContent、innerText、innerHTML区别
   - textContent 能获取指定节点以及所有子节点的文本内容,还包括<script>和<style>标签的内容。
   - innerText  能获取指定节点以及所有子节点的文本内容。
   - innerHTML 获取指定节点的HTML文本结构内容。

> textContent会获取`display:none`的节点的文本；而innerText好像会感知到节点是否呈现一样，不作返回。