import Modal from './Modal.js'
import Notification from "./Notification.js";

export default {
    components: {
        Modal,
        Notification
    },
    data() {
      return { 
        showModal: false,
        showNotification: false,
        isError: false
      }
    },
    methods: {
      closeModal: function (isFormSubmit) {
        this.showModal = false

        if(isFormSubmit === 'submit') {
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 2500);
        }

        if(isFormSubmit === 'error') {
          this.isError = true
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
            this.isError = false
          }, 2500);
        }
      }
    },
    template: `
    <div>
        <button @click="showModal = !showModal" class="blue-button" id="trigger-modal">
            Domluvit setkání zdarma
        </button>
          <Modal v-if="showModal" @close-modal="closeModal"></Modal>
          <transition name="notification">
              <Notification v-if="showNotification" :is-error="isError"></Notification>
          </transition>
    </div>
    `
  }
