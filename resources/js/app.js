import axios from 'axios';
import './bootstrap';


$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
        });


    document.getElementById('envoie').addEventListener('click',e=>{
        var messageText = document.getElementById('messageText').value
        console.log("message en cour d'envoie")
        console.log(messageText);
        axios.post('chat',{
            message:messageText
        }).then(function(){
            console.log("le messag  a bien ete envoyer.");
            //metre a jour les messages de la page

            //vider le champ d'entrer

        }).catch(function(){
            console.log("le message n'a pas pu etre envoyer")
        })


})
Echo.channel('chat')
            .listen('.message',(event)=>{
                console.log(event);
                var mm = document.createElement('li')
                    mm.innerHTML = `<div class=\"d-flex justify-content-end mb-4\"><div class=\"msg_cotainer_send\">${event.message}<span class=\"msg_time_send\">8:55 AM, Today</span></div><div class=\"img_cont_msg\"></div></div>`
                document.getElementById('mesages').appendChild(mm)
                document.getElementById('messageText').value = ''
              console.log("evenement creer avec success");
            })
