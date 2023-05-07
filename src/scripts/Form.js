import Notification from "./Notification.js";

export default {
  props: ["isModal"],
  components: {
    Notification,
  },
  data() {
    return {
      showNotification: false,
      form: {
        name: "",
        email: "",
        topic: "",
      },
    };
  },
  methods: {
    submitForm: function () {
      const { name, email, topic } = this.form;
      fetch("https://formsubmit.co/ajax/5dd9c70e831165c738d2000305c22722", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          topic,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.showNotification = true;
          setTimeout(() => {
            this.$emit("formSubmit");
            this.showNotification = false;
          }, 2500);
          this.clearForm();
        })
        .catch((error) => console.log(error));
    },
    clearForm: function () {
      this.form = {
        name: "",
        email: "",
        topic: "",
      };
    },
  },
  template: `
      <div class="form">
        <hr class="form__line"/>
        <img src="src/icons/no-gradient-icons/time.svg" alt="clock-icon" class="form__icon" />
        <div class="form__info">30 minut</div>
        <img src="src/icons/no-gradient-icons/hands.svg" alt="hands-icon" class="form__icon" />
        <div class="form__info">Online/osobně</div>
        <p class="form__description">
          Pokud cítíš, že bychom si „sedli“,tak mi napiš. Do 48h se Ti ozvu a
          domluvíme se na termínu.
        </p>
            <form class="modal-form">
              <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Jméno a příjmení"
                required
                class="form__input"
              />
              <input v-model="form.email" type="email" name="email" placeholder="E-mail" required class="form__input" />
              <textarea
                v-model="form.topic"
                type="textarea"
                name="topic"
                placeholder="Co bys chtěl/a probrat?"
                required
                class="form__input form__input--long"
              />
            </form>

            <div class="form__footer" :class="{'form__footer--sticky': isModal}">
              <button @click="submitForm" class="blue-button form__submit">
                Odeslat rezervaci
              </button>
            </div>
            <transition name="notification">
              <Notification v-if="showNotification"></Notification>
            </transition>
      </div>
    `,
};
