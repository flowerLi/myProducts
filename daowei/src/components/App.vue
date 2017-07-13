<template>
  <div>
    <com-header></com-header>
    <router-view :servyProducts="servyProducts">

    </router-view>

    <com-footer></com-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './header.vue'
  import footer from './footer.vue'
  import first from './first.vue'

  export default {
      data(){
        return {
          servyProducts:[]
        }
      },
    components:{
      'com-header':header,
      'com-footer':footer,
      first
    },
    created () {
        axios.get('/api/servy')
          .then((response)=>{
            var result=response.data;
            console.log('shuju----',result.data);
            if(result.code==0){
                this.servyProducts=result.data
            }

          })
          .catch(err=>{
              console.error(err)
          })

    }
  }

</script>
