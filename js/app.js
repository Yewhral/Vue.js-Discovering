new Vue({
    el:'#vue-app',
    data:{
        name:'Michal',
        job:'JS dev'
    },
    methods:{
        greet:function(time) {
            return`Good ${time} ${this.name}`;
        }
    }
});