new Vue({
    el:'#vue-app',
    data:{
        name:'Michal',
        job:'JS dev',
        website:'http//www.thenetninja.co.uk',
        websiteTag: '<a href="http//www.thenetninja.co.uk">Test again</a>'
    },

    methods:{
        greet:function(time) {
            return`Good ${time} ${this.name}`;
        }
    }
});
