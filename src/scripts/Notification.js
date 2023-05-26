export default {
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
  template: `
      <div class="notification" :class="{'notification--error': isError}">
        <div v-if="!isError">
          <div class="notification__title">Úvodní setkání zdarma 🎉 👍 🙌 </div>
          <div class="notification__subtitle">Gratuluju! <br> Už toto je první krok ke změně!</div>
          <div class="notification__description">Díky za zprávu a do 48 h se Ti ozvu!</div>
        </div>
        <div v-else >
          <div class="notification__title"><strong>Jejda ❌ Něco se nepovedlo</strong></div>
          <div class="notification__subtitle">Prosím zkuste zprávu odeslat znovu</div>
        </div>
      </div>
    `,
};
