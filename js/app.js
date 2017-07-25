new Vue({
    el:'#vue-app',
    data:{
        name:'Michal',
        job:'JS dev',
        website:'http//www.thenetninja.co.uk',
        websiteTag: '<a href="http//www.thenetninja.co.uk">Test again</a>',
        age: 25,
        x:0,
        y:0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Red', 'Green', 'Blue', 'Yellow', 'Silver'],
        ninjas: [
            {name: 'DaHunter', age: 21},
            {name: 'Papps', age: 25},
            {name: 'Doethe', age: 26},
        ],
        food: 'okonomyiaki'



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
        },
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.food = this.$refs.input.value;
        }
    },
    computed:{
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
