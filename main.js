/*Vaariable initialization of Tabs*/ 
var chatTab = document.getElementById('chat');
var statusTab = document.getElementById('status');
var callsTab = document.getElementById('calls');

/* Caht Tab*/
chatTab.addEventListener('click', () => {
    document.getElementById('chat-section').className = "show";
    document.getElementById('status-section').className = "hidden";
    document.getElementById('call-section').className = "hidden";
})
chatTab.addEventListener('load', () => document.getElementById('chat-section').className = "show")

/* Status Tab*/
statusTab.addEventListener('click', () => {
    document.getElementById('status-section').className = "show";
    document.getElementById('call-section').className = "hidden";
    document.getElementById('chat-section').className = "hidden";
})

/* Call Tab*/
callsTab.addEventListener('click', () => {
    document.getElementById('status-section').className = "hidden";
    document.getElementById('call-section').className = "show";
    document.getElementById('chat-section').className = "hidden";
})