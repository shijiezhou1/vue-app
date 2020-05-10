<template>
    <div>
        <main>
            <section v-for="item in items" :key="item.msg">
                <a :href="item.url">
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
export default {
    data() {
        return {
            items: [
                { url: "https://digitalgym.org/", img: '/images/consociation/digitalgym.jpg', msg: 'digitalgym' },
                { url: "https://ucsd.edu/", img: '/images/consociation/ucsd.jpg', msg: 'ucsd' },
                { url: "https://www.facebook.com/ucsdhksu/", img: '/images/consociation/hksu.jpg', msg: 'hksu' },
                { url: "http://www.steamleadership.com/gameday/speaker/ucsd-vr-club/", img: '/images/consociation/vrclub.jpg', msg: 'vrclub' },
                { url: "https://www.greenriver.edu/", img: '/images/consociation/grcc.jpg', msg: 'grcc' },
                { url: "https://revelle.ucsd.edu/", img: '/images/consociation/revelle.jpg', msg: 'revelle' },
                { url: "https://www.chineseunion.org/", img: '/images/consociation/cu.jpg', msg: 'cu' },
                { url: "https://www.worldviewproject.org/", img: '/images/consociation/wwp.jpg', msg: 'wwp' },
                { url: "http://hiss-us.com/us-china-technology-innovation-and-development-uctid/", img: '/images/consociation/uctid.jpg', msg: 'uctid' }
            ]
        };
    }
};
</script>

<style lang="scss" scoped="scoped">
main {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
}
@media (min-width: 620px) {
    main {
        column-count: 2;
    }

    section {
        break-inside: avoid;
    }
}

@media (min-width: 960px) {
    main {
        column-count: 3;
    }
}

section {
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    .section-img {
        display: block;
        padding: 10px;
        margin: 0 auto;
        width: 200px;
        height: 200px;
    }
}
</style>
