<template>
    <div id="consociation">
        <main>
            <section v-for="item in items" :key="item.msg">
                <a :href="item.url" target="_blank">
                    <img
                    :id="item.msg"
                    class="section-img profile"
                    v-lazy="require('@/assets' + item.img)"
                    src="item.img"
                    alt="image" />
                </a>
            </section>
        </main>
    </div>
</template>

<script>
import json from '../assets/data.consociation.json';

export default {
    data() {
        return {
            items: []
        };
    },
    created() {
        this.items = json;
    }
};
</script>

<style lang="scss" scoped="scoped">
#consociation{
    main {
        max-width: 700px;
        margin: 0 auto;
        padding: 20px;
    }

    section {
        margin-bottom: 10px;
        overflow: hidden;
        position: relative;
        & .section-img {
            display: block;
            padding: 10px;
            margin: 0 auto;
            width: 200px;
            height: 200px;
        }
    }

    @media only screen and (max-width: 620px) {
        main {
            column-count: 2;
            section {
                & .section-img {
                    width: 150px;
                    height: 150px;
                }
            }
        }
    }

    @media (min-width: 620px) {
        main {
            column-count: 2;
        }
    }

    @media (min-width: 960px) {
        main {
            column-count: 3;
        }
    }
}
</style>
