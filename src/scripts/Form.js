export default {
    data() {
      return { 
         form: {
           name: '',
           email: '',
           topic: '',
         }
      }
    },
    methods: {
      submitForm: function() {
        const {name, email, topic} = this.form
        fetch("https://formsubmit.co/ajax/5dd9c70e831165c738d2000305c22722", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              name,
              email,
              topic,
          })
      })
          .then(response => response.json())
          .then(data => {
            this.clearForm()
          })
          .catch(error => console.log(error));
      },
      clearForm: function() {
        this.form = {
          name: '',
           email: '',
           topic: '',
        }
      }
    },
    template: `
      <div>
      <hr class="line" width="48px" />
      <img src="src/icons/clock.svg" alt="clock-icon" class="modal__icon" />
      <h4 class="mobile-h4 mt-2 mb-4">30 minut</h4>
      <img src="/src/icons/hands.svg" alt="hands-icon" class="modal__icon" />
      <h4 class="mobile-h4 mt-2 mb-4">Online/osobně</h4>
      <p class="mobile-body">
        Pokud cítíš, že bychom si “sedli”,tak mi napiš. Do 48h se Ti ozvu a
        domluvíme se na termínu.
      </p>
            <form class="modal-form">
              <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Jméno a příjmení"
                required
                class="name"
              />
              <input v-model="form.email" type="email" name="email" placeholder="E-mail" required />
              <div class="comment">
                <input
                  v-model="form.topic"
                  type="textarea"
                  name="topic"
                  placeholder="Co bys chtěl/a probrat?"
                  required
                  class="comment-section"
                />
              </div>
            </form>

            <div class="modal__footer">
              <button @click="submitForm" class="blue-button modal__submit">
                Odeslat rezervaci
              </button>
            </div>
      </div>
    `
  }
