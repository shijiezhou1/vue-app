<template>
  <div id="pdfvuer">
    <loading class="vld-overlay" :active.sync="isLoading"
             :can-cancel="false"
             :is-full-page="fullPage"
             :width=200
             :height=200
    ></loading>
    <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" :scale.sync="scale"
         style="width:100%;margin:20px auto;">
      <!-- <template slot="loading">
        loading content here...
      </template> -->
    </pdf>
  </div>
</template>

<script>
  // script is reference to advance pdfvuer
  import pdfvuer from 'pdfvuer';
  import Loading from 'vue-loading-overlay';

  export default {
    components: {
      pdf: pdfvuer,
      Loading
    },
    data() {
      return {
        page: 1,
        numPages: 0,
        pdfdata: undefined,
        errors: [],
        scale: 'page-width',
        isLoading: false,
        fullPage: true,
      };
    },
    computed: {
      formattedZoom() {
        return Number.parseInt( this.scale * 100 );
      }
    },
    mounted() {
      this.isLoading = true;
      this.getPdf();
    },
    
    watch: {
      show: function ( s ) {
        if ( s ) {
          this.getPdf();
        }
      },
      page: function ( p ) {
        if (
          window.pageYOffset <= this.findPos( document.getElementById( p ) ) ||
          ( document.getElementById( p + 1 ) && window.pageYOffset >= this.findPos( document.getElementById( p + 1 ) ) )
        ) {
          // window.scrollTo(0,this.findPos(document.getElementById(p)));
          document.getElementById( p ).scrollIntoView();
        }
      }
    },
    methods: {
      getPdf() {
        var self = this;
        self.pdfdata = pdfvuer.createLoadingTask( './pdf/resume.pdf' );
        self.pdfdata.then( pdf => {
          this.isLoading = false;
          self.numPages = pdf.numPages;
        } );
      },
      findPos( obj ) {
        return obj.offsetTop;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    padding: 16px;
  }
  .vld-overlay {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color:green
  }
</style>
