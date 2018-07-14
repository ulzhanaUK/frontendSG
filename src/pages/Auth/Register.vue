<template>
 <div class="uk-position-relative">
  <Navbar />
  <center>

  <vk-card class="uk-width-1-3@m uk-inline">
  <form class="signup uk-form" @submit.prevent="signup">
  <a slot="center"><img class="uk-width-1-1@s" src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c9c2def3becce37f2ff57b7c7454a11&auto=format&fit=crop&w=750&q=80"></a>
    <h3>Sign up</h3>
     <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="name" type="text" placeholder="Name">
        <input class="uk-input" required v-model="surname" type="text" placeholder="Surname">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input type="text" data-uk-datepicker="{format:'DD.MM.YYYY'}">
    </div>
      
   
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="phone" type="number" placeholder="Phone number">
    </div>
     <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="username" type="text" placeholder="Username">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="email" type="email" placeholder="Email">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="password" type="password" placeholder="Password">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="password_confirmation" type="password" placeholder="Password confirmation">
    </div>
    <div class="uk-margin uk-width-1-1">
    <button class="button">Sign up</button> 
    </div>
  </form>
  </vk-card> 
  <vk-card class="uk-width-1-3@m">
       <p>Have an account? <a href="/#/login">log in</a></p>
  </vk-card>
  </center>
  <Footer />
</div>
</template>

<script>
import Navbar from "@/components/partials/Navbar"
import Footer from "@/components/partials/Footer"
export default {
  data() {
    return {
      name: "",
      surname: "",
      birhdate: "",
      phone: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  },
  methods: {
    signup() {
      let api='https://social-guide.herokuapp.com/api/v1/auth/register'
      let name = this.name
      let surname = this.surname
      let birthdate = this. birthdate
      let phone = this.phone
      let username = this.username
      let email = this.email
      let password = this.password
      let password_confirmation = this.password_confirmation
      this.axios.post(api, {
        name, surname, birthdate, phone, username, email, password, password_confirmation
      }).then( (result) =>{
        console.log(result)
        this.$router.push('/profile')
      }, (err) => {
        console.log(err)
      })
    }
  },
  components: {
    Footer,
    Navbar
  }
}
</script>

<style scooped>
.button {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #055095;
  border: none;
  border-radius: 8px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #005BA1}

.button:active {
  background-color: #055095;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
</style>
