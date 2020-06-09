# Store Guide

1. import state, getter, actions from vuex

```javascript
import {mapState, mapGetters, mapActions} from 'vuex'
```

2. map action as method

```javascript
 methods: {
    ...mapActions(['fetchArticles', 'fetchMediums', ...])
},
```

3. compute state and getter

```javascript
computed: ({
    ...mapGetters(["allMedium"]),
    ...mapState({
        mediums: []
    })
})
```