$(function () {
    let vm = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            howl: 0,
            calcifer: 0,

           
        },
        computed: {
            winning(){

            },
            calciferStyle(){
                return{
                    left: this.calcifer + 'vw' 
                    
                }
            },
            calciferClass(){
 
            },

          
            howlStyle(){
                return{
                    left: this.howl + 'vw'
                    //`${this.howl}vw`
                }
            },
            howlClass(){
      
            }

        },
        methods: {
            startRace(){
            this.howl += 5
            this.calcifer += 5 
            },
            move(){

            },
            getRandom: function(left){
                
                
               return Math.random()*10 ;
                // console.log(Math.random() >= .5) ? 1 : 0
            }
            

            
        }
    })
})


 // progressPlayer
 // this.tick++
 // this.inuyasha += (Math.random() >= .5) ? 1 : 0