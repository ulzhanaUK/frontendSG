<template>
  <div class="home">
  <Navbar />
  <ul class="uk-slideshow" data-uk-slideshow="{autoplay:true}">
    <li><img src="https://images.unsplash.com/photo-1499377193864-82682aefed04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71c8f98090468daa45a13fe3e5785571&auto=format&fit=crop&w=761&q=80" width="90%" height="30%" alt="fon1"></li>
  </ul>
  <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar"
import Footer from "@/components/partials/Footer"
export default {
	components: {
		Navbar,
		Footer
	},
    name: 'HelloWorld',
    data () {
    	return {
    		msg: 'Welcome to Your Vue.js App'
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
