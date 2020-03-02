<template>
    <div id="hacker-list">
        <input class="search" />
        <span class="sort" data-sort="name">Sort by name</span>
        <span class="sort" data-sort="city">Sort by city</span>

        <ul class="list">
            <li>
                <h3 class="name">Jonny</h3>
                <p class="city">Stockholm</p>
            </li>
            <li>
                <h3 class="name">Jonas</h3>
                <p class="city">Berlin</p>
            </li>
            <li>
                <h3 class="name">ABC</h3>
                <p class="city">Java</p>
            </li>
            <li>
                <h3 class="name">ZED</h3>
                <p class="city">Java</p>
            </li>
            <li>
                <h3 class="name">Java</h3>
                <p class="city">abc</p>
            </li>
        </ul>
        <button @click="sort()">sort</button>
    </div>
</template>

<script>
let hackerList;
export default {
    mounted() {
        var options = {
            valueNames: ['name', 'city']
        };
        hackerList = new List('hacker-list', options);
    },
    methods: {
        add() {
            hackerList.add({ name: 'Jonas', city: 'Berlin' });
        },
        sort() {
            hackerList.sort('name', { order: 'asc' });
        }
    }
};
</script>

<style scoped>
    #hacker-list {
        text-align: center;
    }
</style>
