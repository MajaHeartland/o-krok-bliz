import Modal from "./Modal.js";
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
    };
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
        <button @click="showModal = !showModal" class="blue-button" id="trigger-modal">
             Pojďme se potkat!
        </button>
          <Modal v-if="showModal" @close-modal="closeModal"></Modal>
          <transition name="notification">
              <Notification v-if="showNotification"></Notification>
          </transition>
    </div>
    `,
};
