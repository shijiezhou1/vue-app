<template>
    <div id="about">
        <title>{{title}}</title>
        <h1>About</h1>
        <BlockQuoteContent
            content="Every person has two education, one which he receives from other, and one, more important, which he gives himself."
            author="Edward Gibbon"
            occupation="British historian"
        ></BlockQuoteContent>
        <div class="flex-container">
            <img class="profile" :src="profileImage" alt="profileImage" />
            <p>{{ profileDescription }}</p>
            <div class="calendar">
                Loading the data just for you.
            </div>
        </div>
        <!-- <h2>{{title}}</h2> -->
        <!-- <button @click="reset">Reset</button> -->
        <!-- <AboutCard v-on:titleChanged="updateTitle" ref="comA"></AboutCard> -->
    </div>
</template>

<script>
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import GitHubCalendar from 'github-calendar';
import AboutCard from "../components/AboutCard.vue"

export default {
    components: { BlockQuoteContent, AboutCard },
    data: () => ({
        title: "About | 🌮",
        profileImage: require('@/assets/profile/profile.jpg'),
        profileDescription: `Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview project organization. Currently, he is working in Akirix(MMSG department) with software engineer.

He used to work on programming artist and digital image designer at the Digital Gym Cinema as internet. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD.
He gained experience in media use and computer art. He also familiar with web design and customize selling pages on ebay which promote stuffs at leisure time..`
    }),
    mounted() {
        GitHubCalendar('.calendar', 'shijiezhou1');
        GitHubCalendar('.calendar', 'shijiezhou1', { responsive: true });
    }, 
    methods: {
       
    }
};
</script>

<style lang="scss">
#about {
    @import '@/assets/styles/github-calendar-responsive.scss';
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    & img {
        max-width: 100px;
    }

    .profile {
        float: right;
    }

    .flex-container {
        overflow-x: hidden;
        margin: 10px auto;
        // Small devices (landscape phones, 576px and up)
        @media (min-width: 576px) {
            width: 100%;
        }
        
        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
            max-width: 50%;
        }
    }
}
</style>
