const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
var request = require('request');
var cheerio = require('cheerio');
var Commandss = new CC.Commands();
var fs = require("fs");



function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("nm!" + str);
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

client.on('ready', () => {
    client.user.setActivity("Relax", { type: 1}); // type: 2 - Слушает
});



client.on('message', message =>
{ 
    if (message.channel.type !== 'text' || message.author.bot) return;
if(commandIs("mod", message))
{
  var id = message.content.substring(7)
  var request = require('request');
var cheerio = require('cheerio');
var url = "https://nfsmods.xyz/mod/" + id
request(url, function (error, response, body) {
  if (!error) {
    
    var $ = cheerio.load(body)
    if(body.includes("The page you were looking for"))
    {
      message.channel.send("The page you were looking for doesn't exist!")
    }
    else
    {
    var img = $('body > div.maincontainer > div > div > div.col-8 > img').attr("src")
    var name = $('body > div.maincontainer > div > div > div.col-8 > h1.major').text()
    var up = $('body > div.maincontainer > div > div > div.col-sm-4 > x > strong').text()
    var down = $('#filestorage > a').attr("href")
    var downlink = $('#filestorage > a').attr("href")
    var size = $('#filestorage > a:nth-child(1) > div > div > div > div.col > small').text()
    var latest = $('#filestorage > a:nth-child(1) > div > div > div > div.col > span').text()
    var chel = $('body > div.modheaderwrapper > div.modheadercontent.tshadow > center > h1 > x').text()
    var test = $('#filestorage > a:nth-child(1) > div > div > div > div.col').text()
    var userlink = $('body > div.maincontainer > div > div > div.col-sm-4 > div.modcol > div > div > h3 > a').attr("href")
    var test2 = test.replace(new RegExp(size,'g'),"")
    var test3 = test2.replace(new RegExp("Latest Version",'g'),"")
    var test4 = test3.replace(/[(]/,"")
    var test5 = test4.replace(/[)]/,"")
    var test6 = test5.replace(/[ ]/g,"")
    var test7 = test6.replace(/[ ]/g,"")

var downname = down.replace(/uploads/, '')
var downname2 = downname.replace(/mods/, '')
var downname3 = downname2.replace(/[/]/, '')
var downname4 = downname3.replace(/[/]/, '')
var link = "https://nfsmods.xyz/" + downlink
var link2 = link.replace(/[ ]/g, "%20")
var urlink = "https://nfsmods.xyz/" + userlink
var name_archive = name + "(by: " + chel +').zip'
    const Discord = require('discord.js');

    const embed = new Discord.MessageEmbed()
      


      .setTitle(name)
    
      .setImage(img)
      .addField("by", "[**"+ chel +"**](" + urlink + ")", true)
      .addField("Uploaded at", "**" + up + "**", true)
     // .addField("Download", "[**" + test7 +"**](" + link2 + ")")
      //.addField("Server uptime","**" + uptime[1] + "**"))
      
console.log(link2)
        message.channel.send({embed})
        var requestModule=require("request");

        requestModule(link2).pipe(fs.createWriteStream(name_archive));
        console.log("ok")
        
function prekol()
{
    message.channel.send({
        files: [{
          attachment: './' + name_archive,
          name: name_archive
        }]
      })
        .then(console.log)
        .catch(console.error);
}
setTimeout(prekol, 2000)

        
        }
        

  }})
  
}
if(commandIs("user", message))
{
    var nick = message.content.substring(8)
    var url = "https://nfsmods.xyz/user/" + nick
    var request = require('request');
var cheerio = require('cheerio');
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body)
    if(body.includes("The page you were looking for"))
    {
      message.channel.send("The page you were looking for doesn't exist!")
    }
    else
    {
        var nickname = $('body > div.mainanimatedbg.tshadow > center > h1').text()
        var ava = $('body > div.mainanimatedbg.tshadow > center > div > img').attr("src")
        var mods = $('#content1 > div > div:nth-child(1) > h4').text()
        var country = $('#content1 > div > div:nth-child(2) > h4').text()
        var role = $('#content1 > div > div:nth-child(3) > h4').text()
        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
          
    
    
          .setTitle(nickname)
        
          .setThumbnail("https://nfsmods.xyz/"+ava)
          .addField("Mods", mods)
          .addField("Country", country)
          .addField("Role", role)
          //.addField("Server uptime","**" + uptime[1] + "**"))
          
   
            message.channel.send({embed})
    }
  }})
}
if(commandIs("search", message))
{
    fs.writeFileSync("./kolvo.txt", "0")
    fs.writeFileSync("./urli.txt", "")
    fs.writeFileSync("./mods.txt", "")
    var name_mod = message.content.substring(10)
    var mod_search = name_mod.replace(/[ ]/g, "%20")
   // var test = ["extra", "option"]
   var mod_array = message.content.substring(10).split(" ")
 
   var url = "https://nfsmods.xyz/search?search=" + mod_search
   var request = require('request');
   var cheerio = require('cheerio');
   
   request(url, function (error, response, body) {
     if (!error) {
       var $ = cheerio.load(body)
       if(body.includes("No results were found for"))
       {
         //message.channel.send("**No results were found for " + name_mod + "**")
         message.channel.send({embed: {
            color: 16711680,
            description: "**No results were found for " + name_mod + "**"
            
            }})
       }
       else
       {
    
 
          for(i=1; i<15; i++)
           {
            var teste = parseInt(fs.readFileSync("./kolvo.txt", "utf8"))
           var mod_name = $('body > div.maincontainer > center > div:nth-child('+(i+1)+') > div > a > div > h5.major > b').text()
           var avtor = $('body > div.maincontainer > center > div:nth-child('+(i+1)+') > div > a > div > h6 > b').text()
           var url = "https://nfsmods.xyz/" + $('body > div.maincontainer > center > div:nth-child('+(i+1)+') > div > a').attr("href")
        
         if(mod_name == "") break;
         if(!mod_name.toLowerCase().includes(name_mod)) continue;
         fs.writeFileSync("./kolvo.txt", teste + 1)
         fs.appendFileSync("./mods.txt", (teste + 1) + ". " + mod_name + "\n   **(by: "+avtor+")**" + " \n")
         fs.appendFileSync("./urli.txt", url + " | ")
         
           }
           if(parseInt(fs.readFileSync("./kolvo.txt", "utf8")) == 1)
         {
             cheslo = "mod"
         }
         else
         {
             cheslo = "mods"
         }
           const Discord = require('discord.js');
   
           const embed = new Discord.MessageEmbed()
             
       
       
           
           
          
             .addField(fs.readFileSync("./kolvo.txt", "utf8") + " " + cheslo, fs.readFileSync("./mods.txt", "utf8"))
         
             //.addField("Server uptime","**" + uptime[1] + "**"))
             
             message.channel.send({embed})
              
             //  message.channel.send(fs.readFileSync("./mods.txt", "utf8"))
         
              message.channel.awaitMessages(hui => 1 <= parseInt(hui.content) <= parseInt(fs.readFileSync("./kolvo.txt", "utf8")) && !hui.author.bot , {
                max: 1,
                time: 9999999,
                errors: ['time'],
                } )
                .then((collected) => {

                  fs.writeFileSync("./number.txt",   message.author.lastMessage.content)
               if(parseInt(fs.readFileSync("./number.txt", "utf8")) > parseInt(fs.readFileSync("./kolvo.txt", "utf8")))
               {
                   console.log("true")
               }
               else
               {
                var urle = fs.readFileSync("./urli.txt", "utf8").split(" | ")
                var urlee = urle[parseInt(fs.readFileSync("./number.txt", "utf8"))-1]
             //   console.log(urlee[parseInt(fs.readFileSync("./number.txt", "utf8"))])
                request(urlee, function (error, response, body) {
                    if (!error) {
                        var $ = cheerio.load(body)
                        var img = $('body > div.maincontainer > div > div > div.col-8 > img').attr("src")
                        var name = $('body > div.maincontainer > div > div > div.col-8 > h1.major').text()
                        var up = $('body > div.maincontainer > div > div > div.col-sm-4 > x > strong').text()
                        var down = $('#filestorage > a').attr("href")
                        var downlink = $('#filestorage > a').attr("href")
                        var size = $('#filestorage > a:nth-child(1) > div > div > div > div.col > small').text()
                        var latest = $('#filestorage > a:nth-child(1) > div > div > div > div.col > span').text()
                        var chel = $('body > div.modheaderwrapper > div.modheadercontent.tshadow > center > h1 > x').text()
                        var test = $('#filestorage > a:nth-child(1) > div > div > div > div.col').text()
                        var userlink = $('body > div.maincontainer > div > div > div.col-sm-4 > div.modcol > div > div > h3 > a').attr("href")
                        var test2 = test.replace(new RegExp(size,'g'),"")
                        var test3 = test2.replace(new RegExp("Latest Version",'g'),"")
                        var test4 = test3.replace(/[(]/,"")
                        var test5 = test4.replace(/[)]/,"")
                        var test6 = test5.replace(/[ ]/g,"")
                        var test7 = test6.replace(/[ ]/g,"")
                    
                    var downname = down.replace(/uploads/, '')
                    var downname2 = downname.replace(/mods/, '')
                    var downname3 = downname2.replace(/[/]/, '')
                    var downname4 = downname3.replace(/[/]/, '')
                    var link = "https://nfsmods.xyz/" + downlink
                    var link2 = link.replace(/[ ]/g, "%20")
                    var urlink = "https://nfsmods.xyz/" + userlink
                    var name_archive = name + "(by: " + chel +').zip'
                        const Discord = require('discord.js');
                    
                        const embed = new Discord.MessageEmbed()
                          
                    
                    
                          .setTitle(name)
                        
                          .setImage(img)
                          .addField("by", "[**"+ chel +"**](" + urlink + ")", true)
                          .addField("Uploaded at", "**" + up + "**", true)
                         // .addField("Download", "[**" + test7 +"**](" + link2 + ")")
                          //.addField("Server uptime","**" + uptime[1] + "**"))
                          
                    console.log(link2)
                            message.channel.send({embed})
                            var requestModule=require("request");

        requestModule(link2).pipe(fs.createWriteStream(name_archive));
        console.log("ok")
        
function prekol()
{
    message.channel.send({
        files: [{
          attachment: './' + name_archive,
          name: name_archive
        }]
      })
        .then(console.log)
        .catch(console.error);
}
setTimeout(prekol, 3000)
                            fs.writeFileSync("./number.txt", "0")
                            fs.writeFileSync("./kolvo.txt", "0")
                            fs.writeFileSync("./urli.txt", "")
                            fs.writeFileSync("./mods.txt", "")
                    }})
               }
                 
                
                   
          
          //  message.channel.sendMessage(build)
                }) 
                
       }
     }})
 
}
});
client.login(process.env.BOT_TOKEN);
