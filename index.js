$(function () {
    let vm = new Vue({
        el: '#app',
        data: {

        },
        computed: {
            winning(){
                // if(this.calcifer == this.howl) return null

               
            },
            calciferStyle(){
                // retu(property) left: string
                // left: '${this.calcifer}vw';
                
            },
            calciferClass(){
                // if(!this.winner) return
                //     return this.winner
            },
            howlStyle(){
                // return(property); left: string
                // left: '${this.howl}vw';
            },
            howlClass(){

            }

        },
        methods: {
            startRace: function(){
                alert("this will start program")
                this.getRandom()
            },
            getRandom: function(){
                console.log("random")
            }
            

            
        }
    })
})


 // progressPlayer
 // this.tick++
 // this.inuyasha += (Math.random() >= .5) ? 1 : 0