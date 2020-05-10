# Vue-App

The is the app to show display all the blog posts.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Create router
```
vue add router
```

## Library

Axios

## Notice: 

### redirect 

When the components redirect to another view route. If `this.$router.push` has an path, the params value will be ignore. 

e.g. 
```javascript
this.$router.push({name: 'home', params: { msg: "home"}})
// or
this.$router.push({path: '/home', query: {msg: "home"}})
```