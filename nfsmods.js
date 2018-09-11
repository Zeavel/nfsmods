const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;



var Commandss = new CC.Commands();
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}


client.setInterval(function play()
{
    var server = client.guilds.get("404742344131477514")
    var channel;
   
    if(client.guilds.get("404742344131477514").channels != undefined)
    {
        var vole = parseInt(client.guilds.get("351491707554103296").emojis.get("488966168103878656").name);
        console.log(vole/100)
       channel = client.guilds.get("404742344131477514").channels.get("405034943782191114")
        if(channel.members.size > 0 && !channel.members.map(h=>h.id).includes("399601970685673473"))
        {
            client.voice.joinChannel(client.guilds.get("404742344131477514").channels.get("405034943782191114"))
            .then(connection => {
        
             dispatcher =  connection.playArbitraryInput('http://wargaming.fm/1');
                 dispatcher.on("start", dw => {

                 })
              dispatcher.setVolume(vole/100)
                })
                .catch(console.log);
        }
        if(channel.members.size == 1 && channel.members.map(h=>h.id).includes("399601970685673473"))
        {
           client.guilds.get("404742344131477514").channels.get("405034943782191114").leave()
        }
      
    }
    
}, 3000)
client.on('message', message => {
    if(commandIs("vol1", message))
    {
        var volme = parseInt(message.content.substring(6))
        console.log(volme)
        var volume;
        if(volme>0 && volme <=200)
        {
            volume = volme/100
            client.voiceConnections.map(g=>g.dispatcher.setVolume(volume))
             client.guilds.get("351491707554103296").emojis.get("488966168103878656").edit({name: volme})

        }
       
        
//
    }
   
  });



client.login(process.env.BOT_TOKEN);



