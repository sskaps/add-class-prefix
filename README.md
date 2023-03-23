# add-class-prefix
a plugin to add a class prefix

### 快速上手

```
npm i add-class-prefix -D


<!-- vue.config.js -->
const addClassPrefix = require('add-class-prefix')

module.exports = {
  configureWebpack: {
	plugins: [
		addClassPrefix({
		  prefix: 'app'
		})
	]
  }
}

```

### options

1. prefix
    * type: string, 必选
    * 需要被添加的前缀
    * default: -