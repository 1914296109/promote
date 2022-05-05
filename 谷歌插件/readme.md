# 谷歌插件
***
   1. [官网demo](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/file/WlD8wC6g8khYWPJUsQceQkhXSlv1/SVxMBoc5P3f6YV3O7Xbu.zip)
   2. 配置项
   
   | 参数|	说明|
| :------ | :-------: |
|name	|插件名称|
|description|	插件描述|
|version|	插件版本号|
|manifest_version|	配置文件的版本（目前是3，按照官方的来就可以）|
|background|	后台默认程序，版本3使用service_worker替代了之前的scripts，主要作用是管理缓存、预加载资源和启用离线网页。|
|permissions|	需要的权限|
|action|	toolbar扩展菜单配置|
|icons|	插件图标（可以适配不同的尺寸）|
|options_page|	扩展程序选项（一般是让用户自定义选择插件的某些参数值）|