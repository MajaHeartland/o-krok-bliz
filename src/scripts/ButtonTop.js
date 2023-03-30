import Modal from './Modal.js'

export default {
    components: {
        Modal
    },
    data() {
      return { 
        showModal: false
      }
    },
    template: `
    <li>
        <a @click="showModal = !showModal"><button class="nav-button" id="trigger-modal">Pojďme se potkat!</button></a>
        <Modal v-if="showModal" @close-modal="showModal = false"></Modal>
    </li>
    `
  }
