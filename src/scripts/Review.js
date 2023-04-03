import ModalReview from './ModalReview.js'

export default {
    components: {
        ModalReview
    },
    data() {
      return { 
        showModal: false,
        review: null,
      }
    },
    mounted() {
        console.log('mounted')
        window.addEventListener('showReviewModal', (e) => {
            this.showModal = true
            this.review = e.detail?.review
        })
    },
    template: `
    <div>
          <ModalReview :review="review" v-if="showModal" @close-modal="showModal = false"></ModalReview>
    </div>
    `
  }
