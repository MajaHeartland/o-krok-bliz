import Modal from "./Modal.js";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  template: `
    <div>
        <button @click="showModal = !showModal" class="blue-button" id="trigger-modal">
             Pojďme se potkat!
        </button>
          <Modal v-if="showModal" @close-modal="showModal = false"></Modal>
    </div>
    `,
};
