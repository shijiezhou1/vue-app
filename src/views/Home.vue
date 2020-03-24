<template>
    <!-- <div id="hacker-list">
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
    </div> -->
    <div id="home">
        <BlogContainer :contents="this.mediumData" />
    </div>
</template>

<script>
// let hackerList;
import axios from 'axios';
import BlogContainer from '../components/BlogContainer.vue';

export default {
    components: {
        BlogContainer
    },
    data: function() {
        return {
            mediumData: null
        };
    },
    created() {
        const self = this;
        axios
            .get('https://www.shijiezhou.net/medium')
            .then(function(response) {
                // handle success
                // TODO Remove setTimeout 
                // setTimeout(function(){
                    self.mediumData = response.data;
                // }, 3000);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    // mounted() {
    //     const options = {
    //         valueNames: ['name', 'city']
    //     };
    //     hackerList = new List('hacker-list', options);
    // },
    // methods: {
    //     add() {
    //         hackerList.add({ name: 'Jonas', city: 'Berlin' });
    //     },
    //     sort() {
    //         hackerList.sort('name', { order: 'asc' });
    //     }
    // }
};
</script>

<style lang="scss" scoped="scoped">
#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        & img {
            width: 100%;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        & img {
            max-width: 768px;
        }
    }
    & img {
        max-width: 768px;
    }
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        & img {
            max-width: 768px;
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        & img {
            max-width: 768px;
        }
    }
}
</style>
