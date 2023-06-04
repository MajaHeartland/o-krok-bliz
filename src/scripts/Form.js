import Notification from "./Notification.js";

export default {
  props: {
    isModal: Boolean,
    enableNotification: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Notification,
  },
  data() {
    return {
      showNotification: false,
      errors: [],
      form: {
        name: "",
        email: "",
        topic: "",
      },
      formTouchedFields: {
        name: false,
        email: false,
        topic: false,
      },
    };
  },
  methods: {
    submitForm: async function () {
      if (!this.isFormValid) {
        this.formTouchedFields = {
          name: true,
          email: true,
          topic: true,
        };
        this.$nextTick(() => {
          this.focusFirstErrorInput();
        });
        return;
      }
      const { name, email, topic } = this.form;

      try {
        await fetch(
          "https://formsubmit.co/ajax/5dd9c70e831165c738d2000305c22722",
          {
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
          }
        );

        this.$emit("formSubmit");

        if (this.enableNotification) {
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 2500);
        }

        this.clearForm();
      } catch (error) {
        this.$emit("formError");
        console.log("There was an error", error);
      }
    },
    clearForm: function () {
      this.form = {
        name: "",
        email: "",
        topic: "",
      };
      this.formTouchedFields = {
        name: false,
        email: false,
        topic: false,
      };
    },
    checkForm: function () {
      this.errors = [];
      if (!this.form.name) this.errors.push("Name required.");
      if (!this.form.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) return true;
    },
    focusFirstErrorInput: function () {
      const errorMessageEl = document.querySelector(".form__error");
      if (errorMessageEl) {
        errorMessageEl.previousElementSibling.focus();
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed: {
    isNameValid() {
      return this.form.name.length;
    },
    isEmailFilled() {
      return this.form.email.length;
    },
    isEmailValid() {
      return this.validEmail(this.form.email);
    },
    isTopicValid() {
      return this.form.topic.length;
    },
    isFormValid() {
      return !!(
        this.isNameValid &&
        this.isEmailFilled &&
        this.isEmailValid &&
        this.isTopicValid
      );
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
          Pokud cítíš, že bychom si „sedli“, tak mi napiš. Do 48 h se Ti ozvu a
          domluvíme se na termínu.
        </p>
            <form class="modal-form">
              <div class="form__item-wrapper">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Vyplň prosím Tvoje jméno a příjmení"
                  required
                  class="form__input"
                  @input="formTouchedFields.name = true"
                />
                <span v-if="formTouchedFields.name && !isNameValid" class="form__error"> Jméno musí být vyplněno </span>
              </div>

              <div class="form__item-wrapper">
                  <input v-model="form.email" type="email" name="email" placeholder="Vyplň prosím Tvůj e-mail" required class="form__input" @input="formTouchedFields.email = true" />
                <span v-if="formTouchedFields.email && !isEmailFilled" class="form__error"> Email musí být vyplněn </span>
                <span v-else-if="formTouchedFields.email && !isEmailValid" class="form__error"> Email není zadán ve správném formátu </span>
              </div>
              
              <div class="form__item-wrapper">
                <textarea
                  v-model="form.topic"
                  type="textarea"
                  name="topic"
                  placeholder="Napiš mi prosím krátkou zprávu
"
                  required
                  class="form__input form__input--long"
                  @input="formTouchedFields.topic = true"
                />
                <span v-if="formTouchedFields.topic && !isTopicValid" class="form__error"> Zpráva musí být vyplněna </span>
              </div>

            </form>

            <div class="form__footer" :class="{'form__footer--sticky': isModal}">
              <button @click="submitForm" :class="{'form__submit--disabled': !isFormValid }" class="blue-button form__submit">
                Odeslat rezervaci
              </button>
            </div>
            <transition name="notification">
              <Notification v-if="showNotification && enableNotification"></Notification>
            </transition>
      </div>
    `,
};
