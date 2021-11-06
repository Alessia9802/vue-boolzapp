/* Milestone_4
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
 */

const app = new Vue({
  el: "#app",
  data: {
    activeContact: 0, //contatto attivo
    activeMessage: null, //messaggio attivo
    messageText: "", //campo vuoto messaggio
    search: "", //campo vuoto ricerca contatti
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    currentContact(index) {
      this.activeContact = index;
    },

    addText() {
      let new_message = this.messageText;
      let contactActive = this.contacts[this.activeContact];
      contactActive.messages.push({
        date: moment().format("DD/MM/YYYY hh:mm:ss"),
        text: new_message,
        status: "sent",
      });
      this.messageText = "";
      setTimeout(() => {
        contactActive.messages.push({
          date: moment().format("DD/MM/YYYY hh:mm:ss"),
          text: "Ok",
          status: "received",
        });
      }, 1000);
    },
    //Filtro contatti
    search_text() {
      this.contacts.forEach((contact) => {
        let contact_name = contact.name.toUpperCase();
        let searched_name = this.search.toUpperCase();
        if (contact_name.includes(searched_name)) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      });
    },
  },
});
