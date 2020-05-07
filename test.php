<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <div id="app">
  {{ info }}
</div>
   <script type="text/javascript">
new Vue({
  el: '#app',
  data() {
    return {
      info: null,
      massage: "poesf"
    };
  },
  mounted() {
    axios
      .get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=45')
      .then(response => (this.info = response));
  },
  methods: {
    cons: function (){
      console.log(info);
    },
  }
  
});
 </script> 
</body>
</html>