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