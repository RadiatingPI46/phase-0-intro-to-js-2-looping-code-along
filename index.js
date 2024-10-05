let names=["Guadalupe", "Ollie", "Aki"]
let event="Surprise"
function writeCards(nameid,eventid){
    let card_message =[]
     for(let c=0; c<nameid.length; c++){
        const thank_you_message=`Thank you, ${nameid[c]}, for the wonderful ${eventid} gift!`
        card_message.push(thank_you_message)
        
    }
    return card_message
}
writeCards()

function countDown(){
    let count = 10
    while(count>-1){
        console.log(count);
        count-=1
    }
}
countDown()
