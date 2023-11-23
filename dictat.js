const $new = (tag) => document.createElement(tag);
const $tag = (tag,$dom) => [...($dom || document).getElementsByTagName(tag)];
const $c = (name,$dom) => [...($dom || document).getElementsByClassName(name)];
const $name = (name) => [...document.getElementsByName(name)];
const $id = (id) => document.getElementById(id);
const $q = (q) => [...document.querySelectorAll(q)];

let load_quiz = function(level, qid)
{
    let trial = 0;
    let input = 0;
    let sentence = qlist.get(level)[qid];
    if (!sentence) return menu();

    // 初期画面
    $id("qid").innerText = (qid + 1);
    $id("qid").ondblclick = () => { voice_finished(); };
    $id("level").innerText = qlist.levelname(level);
    $id("hint").innerText = "";
    let hint = sentence.match(/\[.+?\]/g);
    if (hint) {
        $id("hint").innerText = ("Keyword: " + hint.join(";") + " ");
        sentence = sentence.split("[").join("").split("]").join("");
    }
    if (sentence.match(/[0-9]/)) $id("hint").innerText += "(Use the Arabic numbers) ";
    let numofs = sentence.split(" ").filter(w => w.match(/[!?.]$/)).length;
    console.log(numofs);
    if (1 < numofs) $id("hint").innerText += "(" + numofs + " sentences)";
    $id("speed").innerText = "100";
    $id("speed").style.display = "";
    $q("#result, #ending, #next, #stspeed").map($dom => $dom.style.display = "none");
    $id("answer").value = "";
    $id("answer").disabled =  true;
    $c("co").forEach($co => $co.innerText = sentence);// .show();
    $q(".mark, .ans").forEach($dom => $dom.innerText = "");
    $id("point").innerHTML = sentence.split(" ")
        .map(c => "<span class=rate>0</span> ").join("")
        + ("<div id=todo>Retry!</div>");

    //再生終了時イベント
    let voice_finished = function() {
        if (!$id("answer").disabled) return;
        $id("listen").disabled = false;
        $id("answer").disabled = false;
        $id("answer").focus();
        $id("input").style.display = "none";
        $id("giveup").style.display = "inline";
        input = 0;
        trial++;
        if (trial < 5) return;
        $id("listen").onclick = null;
    };

    //聴くボタン
    $id("listen").focus();
    $id("listen").onclick = () => {
        $id("listen").disabled = true;
        $id("answer").disabled = true;
        $id("speed").innerText = (100 - 15 * parseInt(trial));
        $id("trial").innerText = (trial + 1);
        $id("result").style.display = "none";

        let ssu = new SpeechSynthesisUtterance();
        ssu.text = sentence;
        ssu.lang = 'en';
        ssu.rate = $id("speed").innerText * 0.01;
        ssu.onerror = () => { $id("listen").innerText += ("[error]"); };
        ssu.onend = () => { voice_finished(); };
        let audio = new Audio("data:audio/mp3;base64," + base64click);
        audio.onended = () => {
            speechSynthesis.speak(ssu);
        };
        audio.play();
    };

    //諦めるボタン
    $id("giveup").onclick = () => { ending(); };
    $id("giveup").style.display = "none";

    //答える欄
    $id("answer").style.display = "inline";
    $id("answer").onkeydown = function(e) {
        if (e.keyCode != 13) {
            return;
        }

        // 差分チェック
        let res = diff_html(sentence, $id("answer").value);
        if (!res) return;

        // 差分表示
        $id("answer").style.display = "none";
        $id("result").style.display = "";
        $c("mark")[0].innerHTML = (res);
        $c("ans")[0].innerHTML = (res);
        $c("mark")[0].style.top = "-110px";
        $c("ans")[0].style.position = "-70px";
        $q(".mark .aft, .ans .aft").map($dom => {
            $dom.innerText = "";
            $dom.style.display = "none";
        });

        $q(".mark span").map(($span,i) => {
            if ($span.classList.contains('normal')) {
                $span.innerHTML += ('<div style="color:red;position:absolute; top:-20px; font-weight:bold; opacity:.7;">O</div>');
                return;
            }
            let miss = '<div style="color:red;position:absolute; top:-20px; font-weight:bold; opacity:.7;">X</div>';
            $span.innerHTML += miss;
            $q(".ans span")[i].innerHTML += miss;
        });
        $q(".mark span div, .ans span div, #todo").map($dom => $dom.style.display = "none");

        //入力回数の更新
        input++;
        $id("input").innerText = (input + " inputs");

        // 点数計算
        //     trial = 1   2  3  4  5
        // input 1:  256 128 64 32 16
        // input 2:  192  96 48 24 12
        // input 3:  160  80 40 20 10
        let pt = function(trial, input) {
            let trialpt = 128;
            for (let i = 0; i < trial - 1; i++) trialpt /= 2;
            let inputpt = trialpt;
            for (let i = 0; i < input - 1; i++) inputpt /= 2;
            return trialpt + inputpt;
        }(trial, input);
        
        $q("#point span.rate").map($dom => $dom.style.display = "none");
        $q(".mark span.normal, .mark span.aft").forEach(($mark,i) => {
            let ptc = $q("#point span.rate")[i].innerText;
            if ($mark.classList.contains("aft") || (0 < ptc)) return;
            let $pt = $q("#point span")[i];
            $pt.innerText = Math.round(pt);
            $pt.classList.add("fix");
        });

        // 結果表示
        let show_result = function() {
            $("#todo").fadeIn();
            if (trial < 5 && $q(".mark .bef").length + $q(".mark .aft").length != 0) {
                $id("answer").focus();
                $id("answer").style.display = "";
                $id("giveup").style.display = "";
                return;
            }
            ending();
        };

        // アニメーション表示
        let anime = function() {
            let i = 0;
            let t = 100;
            let $words = $(".mark span");
            let callback = function() {
                if ($words.size() <= i) {
                    show_result();
                    return;
                }
                let $word = $words.eq(i);
                ($q("#point span.rate")[i] || {style:{display:""}}).style.display = "inline-block";
                if ($word.hasClass("aft")) {
                    $word.animate({"width": "60px"}, t, callback);
                } else if ($word.hasClass("bef")) {

                    $word.find("div").show().animate({"top": 0}, t);
                    $word.animate({"width": 0}, t, function() { $(this).hide(); });
                    $(".ans span").eq(i).css("background-color", "#fcc").find("div")
                        .show().animate({"top": 0}, t, callback);

                } else {
                    $word.find("div").show().animate({"top": 0}, t, callback);
                }
                i++;
            };
            callback();
        };

        $(".mark .aft").show().css({"width": 0});
        $(".mark").animate({"top": "0"}, 300, anime);
        $(".ans").animate({"top": "0"}, 300);
    };

    // 正解表示
    let ending = function() {
        $id("answer").onclick = null;
        $q("#result, #ending, #stspeed").map($dom => $dom.style.display = "");
        $q("#speed, #giveup").map($dom => $dom.style.display = "none");
        $id("todo").innerText = ("Failed!");

        // 得点計算
        let n = $q("#point span").length;
        let pt = $q("#point span.rate").reduce((sum, $rate) => sum + parseInt($rate.innerText), 0);
        pt = Math.round(pt / n * 800 / 256);
        if (n == $q("#point span.rate.fix").length) {
            $id("todo").innerText = ("CLEAR!");
            pt += 200;
        }
        $id("point").innerHTML += ("<div>point = <span class=emp>" + pt + "</span></div>");
        save_score(level, qid, pt);

        // 聴くボタン
        $id("listen").onclick = () => {
            $id("listen").disabled = true;
            let ssu = new SpeechSynthesisUtterance();
            ssu.text = sentence;
            ssu.lang = 'en';
            ssu.rate = parseInt($id("stspeed").value) * 0.01;
            speechSynthesis.speak(ssu);
            ssu.onerror = () => { $id("listen").innerText += ("[error]"); };
            ssu.onend = () => { $q("#listen, #answer").map($dom => $dom.disabled = false); };
        };

        // 次ボタン
        $id("next").style.display = "";
        $id("next").onclick = () => { load_quiz(level, qid + 1); };
    };
};

let load_score = function()
{
    let ret = {};
    //let val;
    //1ffx3e83e83ca;
    //[UINT4]level,[UINTn]qid,"x",[UINT12]score[3]
    let m = document.cookie.split(";").shift().match(/score=([^;]+)/);
    if (!m) return {};
    let val = m[1];
    if(!val) return {};
    val.split("-").forEach(function(v) {
        let d = v.split("x");
        if (d[0] && d[1])
            ret[d[0]] = d[1];
    });
    return ret;
}

let save_score = function(level, qid, pt)
{
    let scores = load_score();
    let key = level.toString(16) + qid.toString(16);
    if (!scores[key]) scores[key] = "";
    scores[key] += (pt + 0x1000).toString(16).substr(1);
    scores[key] = scores[key].substr(-9);
    let ret = "";
    for(let key in scores) {
        ret += key + "x" + scores[key] + "-";
    }
    document.cookie = "score=" + ret + ";expires=Tue, 31-Dec-2037 00:00:00 GMT";
}

let pt2color = function(pt) {
    const ctable = [
        { pt:   0, c:[0x5F, 0x5F, 0x5F] },
        { pt: 500, c:[0xFF, 0x5F, 0x5F] },
        { pt: 900, c:[0xFF, 0xFF, 0x5F] },
        { pt: 999, c:[0x9F, 0xFF, 0x5F] },
        { pt:1000, c:[0x5F, 0xDD, 0x5F] },
    ];

    let i = ctable.findIndex(v => pt <= v.pt);
    let t = ctable[i];
    if (pt == t.pt) return t.c;
    let b = ctable[i - 1];

    // make intermediate color
    return t.c.map((tc,i) =>
                   (parseInt(tc - (tc - b.c[i]) * (t.pt - pt) / (t.pt - b.pt))));
};


let menu = function()
{
    $id("main").style.display = "none";
    $id("menu").style.display = "";

    // 問題一覧
    $id("qoption").innerHTML = [...Array(15)].fill(0).map((_,level) => {
        let slevel = "Difficulty: " + qlist.levelname(level);
        return "<fieldset class=qlist><legend>" + slevel + "</legend>"
            + qlist.get(level).map((_,i) => `<span id="${level}_${i}">${i + 1}</span> `)
            .join("")
            + "</fieldset>";
    }).join("");

    // 成績表示
    let scores = load_score();

    for(let key in scores) {
        let level = parseInt(key.slice(0,1), 16);
        let qid = parseInt(key.slice(1), 16);
        let pts = function(val) {
            let ret = [];
            for(let s = val; s; s = s.slice(3)){
                ret.push(parseInt(s.slice(0, 3), 16));
            }
            return ret;
        }(scores[key]);

        let pt = pts.reduce((prev, current) => prev + current) / pts.length;

        let $qid = $tag("span", $q("#qoption fieldset")[level])[qid];
        if (!$qid) continue;
        $qid.style.backgroundColor = "rgb(" + pt2color(pt).join(",") + ")";
        $qid.innerHTML += `<div class="history" style="height:${10 * pts.length}px">` + pts.join(" ") + "</div>";
        $qid.onmouseover = function() {
            $c("history").forEach($his => $his.style.display = "none");
            $c("history", $qid)[0].style.display = "";
        };
        if (pt == 1000) {
            $qid.style.backgroundColor = "";
            $qid.classList.add("perfect");
        }
    };

    // 成績の凡例色スペクトラム
    if ($q("#spectrum div").length < 100) {
        for (let i = 0; i <= 1000; i+=4) {
            let $line = $new("div");
            $id("spectrum").append($line);
            $line.style.backgroundColor = 'rgb(' + pt2color(i).join(",") + ')';
            if (i % 100 == 0)
                $line.innerHTML = ("<span>" + i + "</span>");
        }
    }

    //クリックイベント
    $q(".qlist span").map($qid => $qid.onclick = function() {
        let c = $qid.id;
        let id = c.split("_");
        $id("menu").style.display = "none";
        $id("main").style.display = "block";
        load_quiz(id[0] * 1, id[1] * 1);
    });

};


window.onload = () => { menu(); };


//diff表示
let diff_html = function(a, b)
{
    let co  = a.toLowerCase().replace(/[^a-z0-9' ]/g, "").match(/[a-z0-9']+/g);
    let ans = b.toLowerCase().replace(/[^a-z0-9' ]/g, "").match(/[a-z0-9']+/g);
    if (!ans || ans.langth == 0) return;
    let ds = diff(co, ans);
    let bef = aft = "";
    let key = {"=": "normal", "+":"bef", "-":"aft"};

    return bef + ds.map(d => '<span class="' + key[d.edit] + '">' + d.word + '</span> ')
        .join("");
};


//-------------- diff実装
// 参考文献 http://hp.vector.co.jp/authors/VA007799/viviProg/doc5.htm
let diff = function(arr1, arr2, is_rev)
{
    if (!is_rev) is_rev = false;
    if (arr1.length > arr2.length) return diff(arr2, arr1, true);

    let len1 = arr1.length;
    let len2 = arr2.length;

    // 変数宣言及び配列初期化
    let offset = len1 + 1;
    let delta = len2 - len1;
    let fp = Array(len1 + len2 + 3).fill(-1);
    let ed = Array(len1 + len2 + 3).fill([]);

    const snake = function(k) {
        let y1 = fp[k - 1 + offset];
        let y2 = fp[k + 1 + offset];

        let obj, x, y, e0;
        if (y1 < y2) { // 経路選択
            y = y2;
            x = y - k;
            e0 = ed[k + 1 + offset];
            obj = {edit: is_rev ? '+' : '-' , line: x - 1, word: arr1[x - 1]};
        } else {
            y = y1 + 1;
            x = y - k;
            e0 = ed[k - 1 + offset];
            obj = {edit: is_rev ? '-' : '+', line: y - 1, word: arr2[y - 1]};
        }
        // 選択した経路を保存
        if (0 <= obj.line) ed[k + offset] = e0.concat(obj);

        let max = ((len1 - x) < (len2 - y)) ? (len2 - y) : (len1 - x);
        // 経路追加
        let i = 0;
        for (; ((i < max) && (arr1[x + i] === arr2[y + i])); i++) {
            ed[k + offset].push({edit: '=', line: (is_rev ? y : x) + i, word: arr1[x + i]});
        }
        fp[k + offset] = y + i;
    };

    // 経路探索
    for (let p = 0; fp[delta + offset] != len2; p++) {
        for (let k = -p       ; k <  delta; k++) snake(k);
        for (let k = delta + p; k >= delta; k--) snake(k);
    }
    return ed[delta + offset];
};

const qlist = {
    get: (level) => {
        if (level < 5) return qlist_g[level % 5];
        level -= 5;
        if (level < 5) return qlist_b.filter(v => 1 < v.ss).map(v => v.en).slice(level * 40, (level + 1) * 40);
        level -= 5;
        if (level < 5) return qlist_b.filter(v => v.ss==1).map(v => v.en).slice(level * 25, (level + 1) * 25);
    },
    levelname: (level) => 
        "★".repeat(1 +(level % 5))
        + (["(Single Passage)", "(Double Passage)", "(Basic)"]).reverse()[parseInt(level / 5)]
};

const base64click = `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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uybAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`;
