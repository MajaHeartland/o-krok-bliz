import Modal from './Modal.js'
import Notification from "./Notification.js";

export default {
    components: {
        Modal,
        Notification,
    },
    data() {
      return { 
        showModal: false,
        showNotification: false
      }
    },
    methods: {
      closeModal: function (isFormSubmit) {
        this.showModal = false

        if(isFormSubmit) {
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 2500);
        }
      }
    },
    template: `
    <div>
          <button @click="showModal = !showModal" class="hero-button">Úvodní setkání ZDARMA</button>
          <Modal v-if="showModal" @close-modal="showModal = false"></Modal>
          <transition name="notification">
              <Notification v-if="showNotification"></Notification>
          </transition>
    </div>
    `
  }