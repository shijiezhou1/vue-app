<template>
    <div id="about">
        <h1>About</h1>
        <BlockQuoteContent
            content="Every person has two education, one whihc he receive from other, and one, more important, which he gives himself."
            author="Edward Gibbon"
            occupation="British historian"
        ></BlockQuoteContent>
        <div class="flex-container">
            <img class="profile" :src="profileImage" alt="profileImage" />
            <p>{{ profileDescription }}</p>
        </div>

        <!-- Prepare a container for your calendar. -->
        <div class="calendar">
            <!-- Loading stuff -->
            Loading the data just for you.
        </div>
    </div>
</template>

<script>
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import GitHubCalendar from 'github-calendar';
import axios from 'axios';

export default {
    components: { BlockQuoteContent },
    data: () => ({
        profileImage: require('@/assets/profile/profile.jpg'),
        profileDescription: `Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview project organization. Currently, he is working in Akirix(MMSG department) with software engineer.

He used to work on programming artist and digital image designer at the Digital Gym Cinema as internet. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD.
He gained experience in media use and computer art. He also familiar with web design and customize selling pages on ebay which promote stuffs at leisure time..`
    }),
    mounted() {
        GitHubCalendar('.calendar', 'shijiezhou1');
        // or enable responsive functionality
        GitHubCalendar('.calendar', 'shijiezhou1', { responsive: true });

        axios
            .get('localhost:1234/random/5')
            .then(function(response) {
                // handle success
                console.log('1234', response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });

        axios
            .get('localhost:3000/random/5')
            .then(function(response) {
                // handle success
                console.log('3000', response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
};
</script>

<style lang="scss">
#about {
    //TODO fix scoped later
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
        overflow: auto;
    }
}
</style>
