
export default {
  data() {
      return {}
  },
  props: ['review'],
    mounted() {
      const htmlEl = document.documentElement;
      htmlEl.classList.add('modal__screen-lock');
    },
    methods: {
      closeModal: function() {
        this.$emit('closeModal')
        const htmlEl = document.documentElement;
        htmlEl.classList.remove('modal__screen-lock');
      },
      clickOutside: function(event) {
        const eventTarget = event.srcElement
        if (eventTarget && Array.from(eventTarget.classList).includes('modal__backdrop')) {
          this.closeModal()
        }
      },
    },
    template: `
      <div class="modal__backdrop" @click="clickOutside">
          <transition name="fade" appear>
          <div class="modal__container">
            <div class="modal__close-section modal__close-section--review">
                <svg width="41" height="4" viewBox="0 0 41 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon modal-box__swipe" style="fill: #98B4B4; height: 15px;"><rect x="0.5" width="40" height="4" rx="2" fill="currentColor"></rect></svg>

                <svg @click="closeModal" class="modal__close-btn" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width: 22px; height: 22px;"><path d="M2.16358 0.374408C1.66311 -0.126056 0.866301 -0.122666 0.371879 0.371757C-0.125395 0.869032 -0.123402 1.66553 0.374527 2.16346L7.21062 8.99989L0.374541 15.8363C-0.0975947 16.3084 -0.123447 17.0492 0.297556 17.5472L0.372287 17.6276L0.451986 17.7017C0.948017 18.1211 1.68899 18.0999 2.16354 17.6254L8.99986 10.7882L15.8364 17.6254C16.3337 18.1227 17.1237 18.1224 17.6188 17.6373L17.7024 17.5472C18.1234 17.0492 18.0976 16.3085 17.6255 15.8363L10.7891 8.99989L17.6255 2.16346C18.1234 1.66553 18.1254 0.869033 17.6281 0.371757C17.1337 -0.122666 16.3369 -0.126045 15.8364 0.374419L8.99986 7.21064L2.16358 0.374408Z">
                </path>
                </svg>
            </div>

            <div class="modal-review__header">
                <img v-if="review.avatar" class="modal-review__avatar" :src="review.avatar" alt="review-picture" />
                <div class="modal-review__wrapper">
                    <h2 class="modal-review__title">
                        {{review.name}}
                    </h2>
                    <div class="modal-review__subtitle">{{review.jobPosition}}</div> 
                </div>
            </div>       

            <div class="modal__body">
                <p class="modal-review__text">
                    {{review.text}}
                </p>
            </div>
          
          </div>  
          </transition>
      </div>
    `
  }
