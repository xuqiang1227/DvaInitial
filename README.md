## DvaInitial
Dva初始化，包括layout 以及国际化
## 内容介绍
- React + Dva + roadHog
- antd layout
- react-intl
## 使用方式
```
npm i
npm start
````
## 移动设备高清开发
需要在roadhog中打开 extraPostCSSPlugins
## 打包方式
* 只有pc端
```
npm run build
```
* 移动设备高清
```
npm run dist
```

# 打包配置publicPath
* 修改roadhog.js中的publicPath
* nginx配置
* 例如：publicPath配置为 /assets/
```(javascript)
  server {
    listen 8009;
    erver_name localhost;    
	  location /assets {
      alias html/visitor;
      #root  html/visitor;
      index  index.html index.htm;
		  try_files $uri $uri/ /assets/index.html;
    }
    ocation /assets/main {
		  alias html/visitor;
      #root   html/visitor;
      index  index.html index.htm;
		  try_files $uri $uri /assets/index.html;
    }
    location /api/ {
      proxy_pass   http://192.168.0.19:8202/api/;
    }
    location /assets/virsical {    
      alias html/visitor;
		  index  visitApp.html;
      try_files $uri $uri/ /assets/visitApp.html;
    }
  }
```
注意：打包出来的html文件，将引入路径修改为相对路径。开发时，应该为/,否则在browserHistory下二级目录刷新异常。
