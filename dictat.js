var load_quiz = function(level) {
    if (["normal", "easy", "hard", "diff"].indexOf(level) == -1) {
        level = "normal";
    }
    for (var i = 0; i < 300; i++) {
        var qid = parseInt(Math.random() * qlist.length);
        if (qlist[qid][1] == level) break;
    }
    var sentence = qlist[qid][0];
    $("#hard").text(qlist[qid][1]);
    $("#hint").text("");
    if (qlist[qid][2])
        $("#hint").text("Keyword: " + qlist[qid][2]);
    if (sentence.match(/[0-9]/)) $("#hint").append("(Use the Arabic numbers)");
    var trial = 0;
    var input = 0;
    $("#qid").html(qid);
    $("#speed").text(100);
    $("#result").hide();
    $("#ending").hide();
    $("#answer").val("");
    $(".co").text(sentence);// .show();
    $("#point").html("");
    sentence.split(" ").forEach(function(c) {
        $("#point").append("<span>0</span> ");
    });
    
    $("#listen").focus().unbind().click(function() {
       $("#trial").text(trial + 1);
       var ssu = new SpeechSynthesisUtterance();
        ssu.text = sentence;
       ssu.lang = 'en';
       ssu.rate = $("#speed").text() * 0.01;
       speechSynthesis.speak(ssu);
       $("#speed").text(100 - 10 * parseInt(trial));
       trial++;
        input = 0;
        $("#input").hide();
       if (trial >= 5) $(this).unbind();
    });

    $("#answer").unbind().keydown(function(e){
        if (e.keyCode != 13) {
            return;
        }
        
        //$(this).val("It is dangerous for a small kid to play in a bath tub.");
        var res = show_result(sentence, $(this).val());
        if (!res) return;
        
        //$(this).val("");
        $("#result").show();
        $(".mark").html(res).css({"top": "-110px", "position":"relative"});
        $(".ans").html(res).css({"top": "-70px", "position":"relative"});
        $(".mark .aft").html(" ").hide();
        $(".ans .aft").html(" ").hide();

        $(".mark span").css("z-index", "1").each(function(i) {
            var mark = ($(this).hasClass('normal')) ? "O" : "X";
            $(this).append('<div style="color:red;position:absolute; top:0px; font-weight:bold; opacity:.7;">' + mark + '</div>');
            if (mark == "X") {
                $(".ans span").eq(i).append('<div style="color:red;position:absolute; top:0px; font-weight:bold; opacity:.7;">' + mark + '</div>');
            }

        });

        var miss = $(".mark .aft").size();
        var acq =  $(".mark .normal").size();
        var rate = 100 * acq / (acq + miss);
        var res = "Acquisition rate: " + Math.round(rate) + "%";
        
        console.log(pt, $("#trial").text());
        var pt = 2;
        for (var i = 0; i < input; i++) pt /= 2;
        console.log(pt, input);
        pt += 10 - 2 * parseInt($("#trial").text()); // 1st:10 2nd:8
        console.log(res);
        input++;
        $("#input").text(input + " inputs");

        var i = 0;
        $(".mark span.normal, .mark span.aft").each(function(i) {
                var ptc = $("#point span").eq(i).text();
                if ($(this).hasClass("aft") || (0 < ptc)) return;
                $("#point span").eq(i).text(pt);
        });
        

        
        $(".mark").animate({"top": "0"}, 300, function() {});

        $(".ans").animate({"top": "0"}, 300, function() {
            $(".mark .aft").show().css({"width": 0})
                 .animate({"width": "60px"}, 1000);
            
            $(".mark .bef").animate({"width": "0"}, 1000, function(){
                $(this).hide();
            });
            /*
            setTimeout(function() {
                    $("#point").html(res);
            }, 1000);
            */

        });

        if (trial < 5 && $(".mark .bef").size() + $(".mark .aft").size() != 0)
            return;
        
        // 正解表示
        $("#ending").show();
        var pt = 0;
        $("#point span").each(function() {
            pt += parseInt($(this).text());
        });
        pt = Math.round(80 * (pt / $("#point span").size()));
        if (rate == 100) {
            pt += 200;
            $("#point").append("<br> <span class=emp>CLEAR!! </span>");
        }
        $("#point").append("<br/> point = <span class=emp>" + pt + "</span>");
        
        $("#listen").unbind().click(function() {
            var ssu = new SpeechSynthesisUtterance();
            ssu.text = sentence;
            ssu.lang = 'en';
            ssu.rate = $("#speed").text() * 0.01;
            speechSynthesis.speak(ssu);
        });
    });
    $("#next").unbind().show().click(function() {
        load_quiz(level);
    });
};

var show_result = function(a, b) {
    var ans = a.toLowerCase().replace(/[^a-z0-9' ]/g, "").match(/[a-z0-9']+/g);
    if (!ans || ans.langth == 0) return;
    var co = b.toLowerCase().replace(/[^a-z0-9' ]/g, "").match(/[a-z0-9']+/g);
    var ds = diff(ans, co) || diff(co, ans);
    var bef = aft = "";

    ds.forEach(function(d) {
        console.log(d);
        var c = "normal";
        if (d.edit == "-") {
            var c = (ans.length <= co.length) ? "aft" : "bef";
        }
        if (d.edit == "+") {
            var c = (ans.length <= co.length) ? "bef" : "aft";
        }
        bef += '<span class="' + c + '">' + d.word + '</span> ';
    });

    return bef;
    ('<div class="ans">' + (ans.length > co.length ? bef:aft) + '</div>') +
     ('<div class="co">'  + (ans.length > co.length ? aft:bef) + '</div>');

};


//-------------- diff実装 
// 参考文献 http://hp.vector.co.jp/authors/VA007799/viviProg/doc5.htm
var diff = function(arr1, arr2) {
    if (arr1.length > arr2.length) return false;

    var snake = function(k) {
        var y1 = fp[k - 1 + offset];
        var y2 = fp[k + 1 + offset];

        if (y1 < y2) { // 経路選択
            var y = y2;
            var x = y - k;
            var e0 = ed[k + 1 + offset];
            var obj = {edit: '-', line: x - 1, word: arr1[x - 1]};
        } else {
            var y = y1 + 1;
            var x = y - k;
            var e0 = ed[k - 1 + offset];
            var obj = {edit: '+', line: y - 1, word: arr2[y - 1]};
        }
        // 選択した経路を保存
        if (0 <= obj.line) ed[k + offset] = e0.concat(obj);
 
        var max = ((len1 - x) < (len2 - y)) ? (len2 - y) : (len1 - x);
        // 経路追加
        for (var i = 0; ((i < max) && (arr1[x + i] === arr2[y + i])); i++) {
            ed[k + offset].push({edit: '=', line: x + i, word: arr1[x + i]});
        }
        fp[k + offset] = y + i;
    }

    var len1 = arr1.length;
    var len2 = arr2.length;

    // 変数宣言及び配列初期化
    var offset = len1 + 1;
    var delta = len2 - len1;
    var fp = [];
    var ed = [];
    for (var p = 0; p < len1 + len2 + 3; p++) {
        fp[p] = -1;
        ed[p] = [];
    }

    // 経路探索
    for (var p = 0; fp[delta + offset] != len2; p++) {
        for(var k = -p       ; k <  delta; k++) snake(k);
        for(var k = delta + p; k >= delta; k--) snake(k);
    }
    return ed[delta + offset];
};

/*
var a = "we think he was the one norve sisters before";
var b = "we think he was the one of assistants before";

var x = a.split(" ");
var y = b.split(" ");

if (x.length > y.length) {
    var y = a.split(" ");
    var x = b.split(" ");
}

var ds = diff(x, y);
var bef = aft = "";


ds.forEach(function(d, i) {
        if (d.edit == "-") {
            bef += '<span style="background-color:#99f">' + x[d.line] + '</span> ';
            return;
        }

        if (d.edit == "+") {
            aft += '<span style="background-color:#f99">' + y[d.line] + '</span> ';
            return;
        }
        bef += x[d.line] + " ";
        aft += x[d.line] + " ";
    });

document.write(bef + "<br/>" + aft);

    var diff = function(correct, ans) {
        console.log(correct);
        ans = ans.toLowerCase().replace(/[^a-z' ]/g, "");
        if (ans == "") return;
        var co = correct.toLowerCase().replace(/[^a-z' ]/g, "").split(" ");
        var ret = [];
        ans.split(" ").forEach(function(w, i) {
            ret.push((co[i] == w) ? i : co.indexOf(w));

        });
        var pre = -1;
        var s = [];
        var is_perfect = true;
        console.log(ret.join(","));
        ret.forEach(function(r, i) {
            if (r == i) { // 入力語の位置が合っている
                s.push(i);
            } else if (pre != -1 && pre + 1 == r) { // 位置は異なるが連続して合っている
                s.push(pre, r);
            } else if ((i + 1 == ret.length) && r) { // 末尾が合っている
                s.push(r);
            }
            pre = r;
        });
        if (ret.length < co.length) {
            is_perfect = false;
            s.push("___...");
        }
        return s.join(" ") + (is_perfect ? ' <span style="color:red">(PERFECT!!)</span>' : "");
    };
*/
    
var qlist = [
    ["I heard someone shout.", "normal"],
    ["I have many things to do.", "normal"],
    ["May all your christmas be white.", "normal"],
    ["I eat a lot of vegetables.", "normal"],
    ["He runs faster than his dog.", "normal"],
    ["She insisted on my paying the bill.", "normal"],
    ["I am now independent of my parents.", "normal"],
    ["The sun having set, we started home.", "normal"],
    ["He is not as tall as I.", "normal"],
    ["I am eating a lot of vegetables.", "normal"],
    ["We are going to stay for a while.", "normal"],
    ["He is taller than I by five inches.", "normal"],
    ["She must be crazy to do such a thing.", "normal"],
    ["I am surprised that you know so much about me.", "normal"],
["Her absence disappointed me.", "normal", ],
["He seems to like you.", "normal", ],
["He must be the spy.", "normal", ],
["I know that you are right.", "normal", ],
["He is no better than yesterday.", "normal", ],
["Many years have passed since he died.", "normal", ],
["I don't understand what you are saying.", "normal", ],
["It has been raining these three days.", "normal", ],
["He went out just as I came in.", "normal", ],
["If I had time, I could help you.", "normal", ],
["She didn't know how much he was depressed.", "normal", ],
["I like boxing better than any other sport.", "normal", ],
["Charlie is not my pet, but my friend.", "normal", "Charlie"],
["It is kind of you to help me.", "normal", ],
["I finish my job at five every day.", "normal", ],
["Never have I seen such a beautiful sight.", "normal", ],
["I went to the town where I was born.", "normal", ],
["You must do it if you want to survive.", "normal", ],
["To tell the truth, I didn't go to school.", "normal", ],
["She is the most popular singer in the Philippines.", "normal", "Philippines"],
    
["He arrived after everything had settled down.", "hard"],
["You cannot make yourself understood in English.", "hard"],
["She didn't know why he was depressed.", "hard"],
["It makes no difference who leads the team.", "hard"],
["We all expect you to pass the exam.", "hard"],
["Whatever you say, I have decided to leave.", "hard"],
["She is talented in the field of performing art.", "hard"],
["If I were a woman, things would be interesting.", "hard"],
["No matter what you say, I have decided to leave.", "hard"],
["She didn't know whether he was really depressed or not.", "hard"],
["Nothing is more disgusting than to find a hair in the dish.", "hard"],
["It was not until I came home that I had known the news.", "hard"],
["It is dangerous for a small kid to play in a bath tub.", "hard"],
["If it should go wrong, I will take the responsibility.", "hard", ],
["Someone has left the water running.", "hard", ],
["I filled the glass with water.", "hard", ],
["The light went on and off.", "hard", ],
["Pass me what is before you.", "hard", ],
["I am sitting for an exam tomorrow.", "hard", ],
["It's a pity that you can't come.", "hard", ],
["It doesn't matter how you do it.", "hard", ],
["She welcomes me whenever I visit her.", "hard", ],
["This is the way he manages the company.", "hard", ],
["You are too young to know the truth.", "hard", ],
["On leaving school, she went into show business.", "hard", ],
["People do not like to be kept waiting.", "hard", ],
["This is the reason I quit the company.", "hard", ],
["What a dictionary says is not always correct.", "hard", ],
["Were I a bird, I could fly to you.", "hard", ],
["Having no money, the man had to walk home.", "hard", ],
["She welcomes me, no matter when I visit her.", "hard", ],
["He would often come to see me on Sundays.", "hard", ],
["Had I known it, I would have told you.", "hard", ],
["I didn't recognize you, because you wore dark glasses.", "hard", ],
["It is surprising that she should do such a thing.", "hard", ],
["If I were to die now, you would be suspected.", "hard", ],
["Seen from here, my house looks like a small stone.", "hard", ],
["The trouble is that I don't know how he looks.", "hard", ],
["When I was a child, I was afraid of the dark.", "hard", ],
["I had finished breakfast when he came to pick me up.", "hard", ],
["I just stood there while he was talking over the telephone.", "hard", ],
["Since I was not prepared, I did not know what to do.", "hard", ],
    
["I aimed at the bull's eye.", "diff"],
["I drove at 96 kilometers per hour.", "diff"],
["You are old enough to leave us.", "diff"],
["It is fun to play pool with you.", "diff"],
["I suppose the man to have been on the scene.", "diff"],
["The news that the President received an invitation from Kremlin is false.", "diff"],
["No one is so old that he cannot learn a new thing.", "diff"],
["If I had not met you, I might have been single up till now.", "diff"],
["Wait till I come back.", "diff", ],
["He is the tallest of all.", "diff", ],
["I stayed though I hated it.", "diff", ],
["He is said to have a great fortune.", "diff", ],
["There is no telling what may come next.", "diff", ],
["It pays to work hard when you are young.", "diff", ],
["I will have been awake for 24 hours in an hour.", "diff", ],
["John Lennon was not only a great musician, but also a mentor to our generation.", "diff", "John Lennon; mentor"],

["He might be right.", "easy"],
["You should see the movie.", "easy"],
["If you know the truth, please tell me.", "easy"],
["She came singing.", "easy", ],
["Shall we dance?", "easy", ],
["Don't leave me alone.", "easy", ],
["You may come in.", "easy", ],
["Yes, what do you want?", "easy", ],
["I put on my shoes.", "easy", ],
["All you need is love.", "easy", ],
["This is hard to do.", "easy", ],
["He said, “I love you”.", "easy", ],
["I am satisfied with you.", "easy", ],
["Shall I do it for you?", "easy", ],
["Do you mind opening the window?", "easy", ],
["I am glad to see you.", "easy", ],

["Don't you smell something burning?", "undefined", ],
["It would be good to be with you.", "undefined", ],

];
/*
var sentences = [
"It is dangerous for a small kid to play in a bath tub.", 
                 ];
*/

if (0) {
var myeval = {
    "removed": [22,75,39,3,12,13,14,10,2,5,6,8,9,15,16,24,28,42,43,45,46,48,49,50,59,68,87,88,93,96,98,103,106],
    "easy": [0,1,40,4,17,11,19,20,26,27,29,35,44],
    "normal":  [83, 18, 91,21, 7, 22, 31,41,47,53,57,62,63,64,66,67,71,73,74,78],
    "hard": [51, 102, 100,34,81,38,30,37,52,54,55,58,61,69,70,75,76,77,80,81,82,85,86,89,90,92,94,95,99,104], //good quiz
    "diff": [25,32,33,60,65,84,101,105,],
};

var db = [];

sentences.forEach(function(s,i) {
    console.log(i,s,myeval["removed"].indexOf(i));
    for(var key in myeval) {
        //console.log(key, myeval[key].indexOf(i),i, s);
        if (myeval[key].indexOf(i) != -1) {
            console.log(myeval[key].indexOf(i))
            db.push([s[0], key, s[2]]);
            return;
        }
    }
    db.push([s[0], "undefined", s[2]]);
});

db.sort(function(a, b) {
    if (a[1] === b[1]) {
        return (a[0].split(" ").length - b[0].split(" ").length);
    }
    return a[1] > b[1] ? -1 : 1;
})

$(function() {
    db.forEach(function(a) {
        $("#rank").append('["' + a[0] + '", "' +  a[1] + '", "'+a[2]+'"],<br>');
    });
});
}

$(function() {
    load_quiz("hard");
});

/*
["Man will make mistakes.", "removed"],
["Look before you leap.", "removed"],
["I'll make you happy.", "removed"],
["I've finished my work.", "removed"],
["I put them on.", "removed"],
["We elected him chairman.", "removed"],
["What a dull fellow!", "removed"],
["I was born poor.", "removed"],
["The door would not open.", "removed"],
["I wish you were here.", "removed"],
["Keep the child from the pond.", "removed"],
["He is as competent as any worker.", "removed"],
["It is no use crying over spilt milk.", "removed"],
["It was you that shot my brother in Arizona last year.", "removed"],
["He can be wrong.", "removed", ],
["I'll make him go.", "removed", ],
["I'll have him go.", "removed", ],
["I'll let him go.", "removed", ],
["It's OK with me.", "removed", ],
["I found him pleased.", "removed", ],
["He may be right.", "removed", ],
["I saw her come.", "removed", ],
["You shall be sorry.", "removed", ],
["I'll fight for you.", "removed", ],
["I've seen the movie.", "removed", ],
["I saw her coming.", "removed", ],
["I am what I am.", "removed", ],
["I would not do that.", "removed", ],
["To live is to love.", "removed", ],
["I have come for the money.", "removed", ],
["I want you to eat it.", "removed", ],
["You should have seen the movie.", "removed", ],
["Be careful in underwriting a contract.", "removed", ],
["We all rushed for his rescue.", "removed", ],
["F.B.I. stands for Federal Bureau of Investigation.", "removed", ],
["She didn't know that he was depressed.", "removed", ],
["In the room was an old man.", "removed", ],
["She cannot run any faster than a mole.", "removed", ],
["He behaves as if he were my boss.", "removed", ],
["She went out, her dog barking in the house.", "removed", ],
["I had my picture taken by the great Buddha.", "removed", "Buddha"],
["We started at dawn, reaching the destination after sunset.", "removed", ],
["She went out with her dog barking in the house.", "removed", ],
["What do you think is the greatest threat to man?", "removed", ],
["As he was a Catholic, he was not allowed to divorce.", "removed", ],
["She is such a kind woman that everyone calls her Mom.", "removed", ],
["In 1939, when the World War II began, he left Germany and went to the U.S.", "removed", ],
["I want you to do this.", "undefined", ],
["He told me that he loved me.", "undefined", ],

*/
