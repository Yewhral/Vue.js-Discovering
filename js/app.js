new Vue({
    el:'#vue-app',
    data:{
        name:'Michal',
        job:'JS dev',
        website:'http//www.thenetninja.co.uk',
        websiteTag: '<a href="http//www.thenetninja.co.uk">Test again</a>',
        age: 25,
        x:0,
        y:0
    },

    methods:{
        greet: function(time) {
            return`Good ${time} ${this.name}`;
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(e) {
          this.x = e.offsetX;
          this.y = e.offsetY;
        }
    }
});
