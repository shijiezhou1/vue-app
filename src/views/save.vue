<template>
    <div id="main">
        <div>
            <isotope :list="list" id="root_isotope" class="isoDefault" :options="getOptions()" @filter="filterOption = arguments[0]" @sort="sortOption = arguments[0]">
                <div v-for="element in list" @click="selected = element" :key="element.id">
                    {{ element.name }}
                    <br />
                    {{ element.id }}
                </div>
            </isotope>
        </div>

        <div id="change">
            <button @click="add">Add</button>
            <button @click="replace">Replace</button>
            <button @click="remove">Remove</button>
        </div>

        <div id="filter">
            <div>
                <input type="text" v-model="filterText" placeholder="no filter" />
                <button :class="[filterOption === 'filterByText' ? 'is-checked' : '']" @click="filter('filterByText')">Filter</button>
            </div>
            <button :class="[filterOption === 'isEven' ? 'is-checked' : '']" @click="filter('isEven')">Filter Even</button>
            <button :class="[filterOption === 'isOdd' ? 'is-checked' : '']" @click="filter('isOdd')">Filter Odd</button>
            <button @click="filter()">Unfilter</button>
        </div>
        <div id="sort">
            <button :class="[sortOption === 'name' ? 'is-checked' : '']" @click="sort('name')">Sort by name</button>
            <button :class="[sortOption === 'id' ? 'is-checked' : '']" @click="sort('id')">Sort by id</button>
            <button @click="shuttle">Shuttle</button>
        </div>

        <div>
            <div v-if="selected" class="item">
                <input type="text" name="" v-model="selected.name" />
                <br />
                <input type="text" name="" v-model="selected.id" />
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
            list: [
                {
                    name: 'John',
                    id: 25
                },
                {
                    name: 'Joao',
                    id: 7
                },
                {
                    name: 'Albert',
                    id: 12
                },
                {
                    name: 'Jean',
                    id: 100
                }
            ],
            selected: null,
            sortOption: {
                first: null,
                second: null
            },
            filterOption: {
                first: null,
                second: null
            },
            filterText: ''
        };
    },
    components: {
        HelloWorld,
        isotope
    },
    methods: {
        getOptions: function() {
            var _this = this;
            return {
                layoutMode: 'masonry',
                masonry: {
                    gutter: 10
                },
                getSortData: {
                    id: 'id',
                    name: function(itemElem) {
                        return itemElem.name.toLowerCase();
                    }
                },
                getFilterData: {
                    isEven: function(itemElem) {
                        return itemElem.id % 2 === 0;
                    },
                    isOdd: function(itemElem) {
                        return itemElem.id % 2 !== 0;
                    },
                    filterByText: function(itemElem) {
                        return itemElem.name.toLowerCase().includes(_this.filterText.toLowerCase());
                    }
                }
            };
        },
        add: function() {
            this.list.push({
                name: 'Juan',
                id: count++
            });
        },
        replace: function() {
            this.list = [
                {
                    name: 'Edgard',
                    id: count++
                },
                {
                    name: 'James',
                    id: count++
                }
            ];
        },
        remove: function() {
            if (this.list.length) this.list.splice(0, 1);
        },
        sort: function(key) {
            console.log(this)
            this.isotopeSort(key);
            this.sortOption = key;
        },
        filter: function(key) {
            if (this.filterOption == key) key = null;
            this.isotopeFilter(key);
            this.filterOption = key;
        },
        shuttle: function() {
            this.isotopeShuttle();
            this.sortOption = null;
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

.is-checked {
    background-color: #28f;
}

.isoDefault {
    min-height: 210px;
}
</style>
