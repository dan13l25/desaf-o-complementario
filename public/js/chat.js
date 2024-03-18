const chatbox = document.getElementById("chatbox")
const log = document.getElementById("log")

chatbox.addEventListener('keyup', e =>{
    if(e.key === "Enter"){
        console.log(chatbox.value)
        socket.emit('message',{user: user, message:chatbox.value})
    }
})

socket.on('messageLogs', data => {
    
    let messages = ""

    data.forEach(msg => {
        messages+= `${msg.user} dice ${msg.message}<br/>`
    });

    log.innerHTML=messages

})