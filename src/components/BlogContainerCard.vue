<template>
    <div id="BlogContainerCard">
        <a class="card-link" :href="link">
            <article class="blog-card">
                <img class="post-image" :src="source" />
                <div class="article-details">
                    <h4 class="post-category">{{ category }}</h4>
                    <h3 class="post-title">{{ name }}</h3>
                    <p class="post-description">{{ desc }}</p>
                    <p class="post-author">{{date}} by {{formatName}} </p>
                </div>
            </article>
        </a>
    </div>
</template>

<script>
export default {
    template: '#blog-card',
    props: {
        name: null,
        category: null,
        image: null,
        author: null,
        desc: null,
        link: null,
        date: null,
    },
    computed: {
        source() {
            const regex = /src=\"([^"]+)\"/;
            return this.image.match(regex)[1] || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg';
        },
        formatName(){
            if(this.author === "Jay Chow") {
                return "Shijie Zhou";
            }
            return this.author;
        }
    }
};
</script>

<style lang="scss" scoped="scoped">
#BlogContainerCard {
    margin: 10px auto;
    width: 100%;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        width: 80%;
    }
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width: 60%;
    }
    $bg: #eedfcc;
    $text: #777;
    $black: #121212;
    $white: #fff;
    $red: #e04f62;
    $border: #ebebeb;
    $shadow: rgba(0, 0, 0, 0.2);

    @mixin transition($args...) {
        transition: $args;
    }

    .blog-card {
        display: flex;
        flex-direction: row;
        background: $white;
        box-shadow: 0 0.1875rem 1.5rem $shadow;
        border-radius: 0.375rem;
        overflow: hidden;
    }

    .card-link {
        position: relative;
        display: block;
        color: inherit;
        text-decoration: none;
        &:hover .post-title {
            @include transition(color 0.3s ease);
            color: $red;
        }
        &:hover .post-image {
            @include transition(opacity 0.3s ease);
            opacity: 0.9;
        }
    }

    .post-image {
        @include transition(opacity 0.3s ease);
        display: block;
        width: 100%;
        object-fit: cover;
    }

    .article-details {
        padding: 1.5rem;
    }

    .post-category {
        display: inline-block;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.0625rem;
        margin: 0 0 0.75rem 0;
        padding: 0 0 0.25rem 0;
        border-bottom: 0.125rem solid $border;
    }

    .post-title {
        @include transition(color 0.3s ease);
        font-size: 1.125rem;
        line-height: 1.4;
        color: $black;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
    }

    .post-author {
        font-size: 0.875rem;
        line-height: 1;
        margin: 1.125rem 0 0 0;
        padding: 1.125rem 0 0 0;
        border-top: 0.0625rem solid $border;
    }

    @media (max-width: 40rem) {
        #container {
            width: 18rem;
            height: 27.25rem;
        }

        .blog-card {
            flex-wrap: wrap;
        }
    }

    @supports (display: grid) {
        body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 0.625rem;
            grid-template-areas: '. main main .' '. main main .';
        }

        #container {
            grid-area: main;
            align-self: center;
            justify-self: center;
        }

        .post-image {
            height: 100%;
        }

        .blog-card {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 1fr;
        }

        @media (max-width: 40rem) {
            .blog-card {
                grid-template-columns: auto;
                grid-template-rows: 12rem 1fr;
            }
        }
    }
}
</style>
