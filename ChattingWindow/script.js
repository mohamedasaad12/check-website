var randomSeconds = Math.floor(Math.random() * 5) * 1000; 
var __possibleReplies = [
                        'Hello',
                        'How are you',
                        'Nice talking to you',
                        'What are you doing for living?!',
                    ];
var __possibleWarningReplies = [
                        'Please, Donot say so',
                        'Behave',
                        "Watch your mouth",
                        'Hey, you , stop that Language',
                        'You are the same',
                        'I find you stupid to say so',
                        'It is not okay for me to talk like this',
                        'Stop or else I will quit',
                        'You are such an idot',
                        'Go away',
                        'Shut your mouth',
                    ];
var __possibleCoolReplies = [
                        'Well done :)',
                        'Well Said :)',
                        'Wow, you are great :)',
                        'So nice of you to say so :)',
                        'Very good',
                        'That is nice of you',
                        "That's Great",
                    ];

var __coolWords = [
                        'great',
                        'smart',
                        'nice',
                        'polite',
                    ];

var __badWords = [
                        'idiot',
                        'stupid',
                        'bad',
                        'impolite',
                    ];


var coolOrBadWord = 'none'; // "none|cool|bad";


$("document").ready(function(){

    var sendUserThread = function() {
        var coolWordsCount = 0;
        var badWordsCount = 0;
         //I am posting a reply
         let userTalk = $("input#chattingBox").val();
         let userTalkThread = `<li class="user">${userTalk}</li>`;    
         $("div.chatThreads").append(userTalkThread);

        //Analyse user words 
        userWordsArray = userTalk.split(" ");
        //console.log(userWordsArray);
        for(var i=0 ; i<userWordsArray.length ; i++) {
            userWordsArray[i]
            if(__coolWords.includes(userWordsArray[i])) {
                coolWordsCount++;
            } else if (__badWords.includes(userWordsArray[i])) {
                badWordsCount++;
            }
        }

        if(coolWordsCount != 0 || badWordsCount != 0) {
             if(coolWordsCount > badWordsCount) {
                coolOrBadWord = 'cool';
             } else if(coolWordsCount < badWordsCount) {
                coolOrBadWord = 'bad';
             } else {
                coolOrBadWord = 'none';
             }
             coolWordsCount = 0;
             badWordsCount = 0
        } else {
            coolOrBadWord = 'none';
            coolWordsCount = 0;
            badWordsCount = 0
        }


          //Reset text field
        $("input#chattingBox").val('');

        randomSeconds = Math.floor(Math.random() * 5) * 1000; 

        $("div.chatThreads").animate({ scrollTop: $('div.chatThreads').prop("scrollHeight")}, 500);

        //The Bit us now typing 
        //$("div.chatThreads").append(`<li class="bot" id="typing">typing .. </li>`);
        //$("div.chatThreads").append(`<li class="bot" id="typing" style="text-align: center;"> <img src='loading.gif' style="height: 20px; width: 150px;"> </li>`);
        $("div.chatThreads").append(`<li class="bot" id="typing" style="text-align: center;">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </li>`);
    }

    var sendBotThread = function () {
        //He/The script posting a reply
         
        let botTalk = '';
        if(coolOrBadWord == 'cool') {
            console.log('cool--')
            let randomReplyIndex = Math.floor(Math.random() * __possibleCoolReplies.length) 
            botTalk = __possibleCoolReplies[randomReplyIndex];
        } else if(coolOrBadWord == 'bad') {
            console.log('bad--')
            let randomReplyIndex = Math.floor(Math.random() * __possibleWarningReplies.length) 
            botTalk = __possibleWarningReplies[randomReplyIndex];
        } else {
            console.log('none--')
            let randomReplyIndex = Math.floor(Math.random() * __possibleReplies.length) 
            botTalk = __possibleReplies[randomReplyIndex];
        }
        coolOrBadWord == 'none';

        let botTalkThread = `<li class="bot">${botTalk}</li>`;
        $("div.chatThreads").append(botTalkThread);

        $("#typing").remove();
        $("div.chatThreads").animate({ scrollTop: $('div.chatThreads').prop("scrollHeight")}, 500);
    }

    $("button#sendBTN, input#chattingBox").on('click keypress',function(e){
        
        /* console.log(e.type);
        console.log(e.which);
        console.log(e);
        console.log(e.target) */

        if(e.type == 'keypress') {
            if(e.which == 13) {
                //This is the enter button 
                sendUserThread();

                setTimeout(function(){
                    sendBotThread();
                }, randomSeconds);
            }
        } else {
            //Event = click 

            if(e.type == 'click' && e.target.id == 'sendBTN'){
                //SendBTN Clicked 
                sendUserThread();

                setTimeout(function(){
                    sendBotThread();
                }, randomSeconds);
            }
            
        }

    });


    $("")

});