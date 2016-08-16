# test-dora
https://github.com/dora-js/dora-plugin-livereload/issues/13#issuecomment-240015583

##### 执行步骤

```sh
npm install

npm run livereload
```

注：` npm start ` 执行是Ok的，由于加了livereload插件导致无法访问

```
> dora-plugin-cooker@1.0.0 livereload /home/justin/work/fe_work/test/test-dora
> dora -p 8700 --plugins 'proxy,livereload'

          proxy: load rule from proxy.config.js
(node:26589) DeprecationWarning: 'GLOBAL' is deprecated, use 'global'
          proxy: listened on 8989
     livereload: listening on 35729
          proxy: GET / matches /*, forward to http://localhost:8700/output
err with request :Error: connect ECONNREFUSED 127.0.0.1:8700  /

```