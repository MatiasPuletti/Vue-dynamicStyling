const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisibile: true,
      inputBackgroundColor: ''
    };
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisibile = !this.paragraphIsVisibile;
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisibile,
        hidden: !this.paragraphIsVisibile
      };
    }
  }
});

app.mount('#assignment');
