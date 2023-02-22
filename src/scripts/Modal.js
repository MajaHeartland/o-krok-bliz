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
            this.closeModal()
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
      <div class="modal__backdrop" @click="clickOutside">
          <transition name="fade" appear>
          <div class="modal__container">
          <div id="close-section" class=""><svg width="41" height="4" viewBox="0 0 41 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon modal-box__swipe" style="height: 15px;"><rect x="0.5" width="40" height="4" rx="2" fill="currentColor"></rect></svg></div>
          
            <div class="modal__head">
              <h2 class="mobile-h2"><strong>Úvodní setkání zdarma</strong></h2>
            </div>
            <div class="modal__body">

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
            

            </div>
            <div class="modal__footer">
              <button @click="submitForm" class="blue-button modal__submit">
                Domluvit setkání zdarma
              </button>
            </div>
          </div>
          </transition>
      </div>
    `
  }
