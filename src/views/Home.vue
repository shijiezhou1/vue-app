<template>
    <div id="home">
        <isotope :options="getOptions()" :list="list" @filter="filterOption = arguments[0]" @sort="sortOption = arguments[0]">
            <div v-for="element in list" :key="element.id">
                {{ element.name }}
                <br />
                {{ element.id }}
            </div>
        </isotope>
        <div id="change">
          <button @click="add">Add</button>
          <button @click="replace">Replace</button>
        </div>
        <div>
          <div v-if="selected" class="item">
            <input type="text" name="" v-model="selected.name">
            <br>
            <input type="text" name="" v-model="selected.id">
          </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import isotope from 'vueisotope';

let count = 0;
export default {
    name: 'home',
    data() {
        return {
            list: [{ name: 'John', id: 25 }, { name: 'Joao', id: 7 }, { name: 'Albert', id: 12 }, { name: 'Jean', id: 100 }],
            selected: null,
            option: {
                getSortData: {
                    id: 'id'
                },
                sortBy: 'id'
            },
        };
    },
    components: {
        HelloWorld,
        isotope
    },
    methods: {
        getOptions: () => {
            return {};
        },
        add: function() {
            this.list.push({ name: 'Juan', id: count++ });
        },
        replace: function() {
            this.list = [{ name: 'Edgard', id: count++ }, { name: 'James', id: count++ }];
        }
    }
};
</script>

<style lang="scss">
#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.item {
    background-color: #eee;
    padding: 10px;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-family: monospace;
    color: #333;
}

.isoDefault {
    min-height: 210px;
}
</style>
