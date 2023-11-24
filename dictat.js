const $new = (tag) => document.createElement(tag);
const $tag = (tag,$dom) => [...($dom || document).getElementsByTagName(tag)];
const $c = (name,$dom) => [...($dom || document).getElementsByClassName(name)];
const $name = (name) => [...document.getElementsByName(name)];
const $id = (id) => document.getElementById(id);
const $q = (q) => [...document.querySelectorAll(q)];

const qlist = {
    get: (group) => {
        if (group < 5) return qlist_g[group % 5];
        group -= 5;
        if (group < 5) return qlist_b.filter(v => 1 < v.ss).map(v => v.en).slice(group * 40, (group + 1) * 40);
        group -= 5;
        return qlist_b.filter(v => v.ss == 1).map(v => v.en).slice(group * 25, (group + 1) * 25);
    },
    levelname: (level, cat) => {
        let slevel = "★".repeat(1 +(level % 5));
        let scat = (["Single Passage", "Double Passage", "Basic"]).reverse()[cat];
        if (cat < 0) return slevel;
        if (level < 0) return scat;
        return slevel + " (" + scat +")";
    },
};

const quiz = {};
quiz.start = (group, qid) => {
    let sentence = qlist.get(group)[qid];
    if (!sentence) return menu();

    // 初期画面
    $id("qid").innerText = (qid + 1);
    $id("level").innerText = qlist.levelname(group % 5, parseInt(group / 5));
    quiz.draw(sentence, (pt) => {
        score.save(group, qid, pt);
        $id("next").style.display = "";
        $id("next").onclick = () => { quiz.start(group, qid + 1); };
    });
};

quiz.draw = (sentence, save_and_next) => {
    let trial = 0;
    let input = 0;

    // 初期画面
    $id("menu").style.display = "none";
    $id("main").style.display = "block";
    $id("makebox").style.display = "none";
    $id("qid").ondblclick = () => { voice_finished(); };
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
        $c("ans")[0].style.top = "-70px";
        $c("ans")[0].classList.remove("landing-slow");
        $c("mark")[0].classList.remove("landing-slow");
        $q(".mark .aft, .ans .aft").map($dom => $dom.innerText = "");
        $q(".mark span").map(($span,i) => {
            if ($span.classList.contains('normal')) {
                $span.innerHTML += ('<div class="judge">O</div>');
                return;
            }
            let miss = `<div class="judge">X</div>`;
            $span.innerHTML += miss;
            $q(".ans span")[i].innerHTML += miss;
        });

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

        // アニメ描画
        $c("ans")[0].classList.add("landing-slow");
        $c("mark")[0].classList.add("landing-slow");
        $q(".mark .aft").map($dom => { $dom.style.display = ""; $dom.style.width = "0px"; });

        let events = $q(".mark span").map(($word, i) => (() => {
            ($q("#point span.rate")[i] || {style:{display:""}}).style.display = "inline-block";
            if ($word.classList.contains("aft")) {
                // 不足語がある
                $word.classList.add("slidein");
            } else if ($word.classList.contains("bef")) {
                // 不要語がある
                $c("judge", $word)[0].classList.add("landing");
                $word.style.width = $word.clientWidth + "px";
                $word.classList.add("slideout");
                let $answord = $q(".ans span")[i];
                $answord.style.backgroundColor = "#fcc";
                $c("judge", $answord)[0].classList.add("landing");
            } else {
                // 正解
                $c("judge", $word)[0].classList.add("landing");
            }
        }));

        let run_anime = () => {
            if (events.length)
                return setTimeout(() => {
                    (events.shift())();
                    run_anime();
                }, 100);

            // 結果表示
            let is_clear = $q(".mark .bef").length + $q(".mark .aft").length == 0
            $id("todo").classList = ["fadein"];

            if (trial < 5 && !is_clear) {
                $id("answer").style.display = "";
                $id("giveup").style.display = "";
                $id("answer").focus();
                let audio = new Audio("data:audio/mp3;base64," + base64fail);
                audio.play();
                return;
            }
            ending(is_clear);
        };
        run_anime();
        return;

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
                    $word.animate({"width": "60px"}, t, callback); // width:0 -> 60
                } else if ($word.hasClass("bef")) {

                    $word.find("div").show().animate({"top": 0}, t); // top: -20 -> 0
                    $word.animate({"width": 0}, t, function() { $(this).hide(); }); // width:auto -> 0
                    $(".ans span").eq(i).css("background-color", "#fcc").find("div")
                        .show().animate({"top": 0}, t, callback); // top: -20 -> 0

                } else {
                    $word.find("div").show().animate({"top": 0}, t, callback); // top: -20 -> 0
                }
                i++;
            };
            callback();
        };
        $(".mark .aft").show().css({"width": 0});
        $(".mark").animate({"top": "0"}, 300, anime); // top:-110 -> 0
        $(".ans").animate({"top": "0"}, 300); // top:-70 -> 0
    };

    // 正解表示
    let ending = function(is_clear) {
        $id("answer").onclick = null;
        $q("#result, #ending, #stspeed").map($dom => $dom.style.display = "");
        $q("#speed, #giveup").map($dom => $dom.style.display = "none");
        $id("todo").innerText = ("Failed!");

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

        // 得点計算
        let n = $q("#point span.rate").length;
        let pt = $q("#point span.rate").reduce((sum, $rate) => sum + parseInt($rate.innerText), 0);
        pt = Math.round(pt / n * 800 / 256);
        if (is_clear) { //n == $q("#point span.rate.fix").length) {
            $id("todo").innerText = ("CLEAR!");
            pt += 200;
            let audio = new Audio("data:audio/mp3;base64," + base64fin);
            audio.play();
        } else {
            let audio = new Audio("data:audio/mp3;base64," + base64done);
            audio.play();
        }
        $id("point").innerHTML += ("<div>point = <span class=emp>" + pt + "</span></div>");

        if (save_and_next) save_and_next(pt);
    };
};

const Score = function() {
    const ITEMNAME = "dictsave";
    const sha256 = async (text) => {
        const uint8  = new TextEncoder().encode(text)
        const digest = await crypto.subtle.digest('SHA-256', uint8)
        return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
    };

    const load_score_raw = function()
    {
        //Format: <UINT4>group,<UINTn>qid,"x",<UINT12>score[3],"-"
        //Example: 1ffx3e83e83ca-
        let ls = localStorage.getItem(ITEMNAME);
        if (ls) return ls;
        let m = document.cookie.split(";").shift().match(/score=([^;]+)/);
        return m ? m[1] : "";
    };

    const load_score = () => load_score_raw().split("-").map(v => {
        let d = v.split("x");
        if (d.length != 2) return;
        let key = d[0];
        let group = parseInt(key.slice(0,1), 16);
        let qid = parseInt(key.slice(1), 16);
        let pts = (val => {
            let ret = [];
            for (let s = val; s; s = s.slice(3)){
                ret.push(parseInt(s.slice(0, 3), 16));
            }
            return ret;
        })(d[1]);
        return {g:group, q:qid, pt:pts};
    }).filter(v=>v);

    const save_score = (group, qid, pt) => {
        let scores = {};
        load_score_raw().split("-").forEach(v => {
            let d = v.split("x");
            if (d[0] && d[1]) scores[d[0]] = d[1];
        });
        let key = group.toString(16) + qid.toString(16);
        if (!scores[key]) scores[key] = "";
        scores[key] += (pt + 0x1000).toString(16).slice(1);
        scores[key] = scores[key].slice(-9);
        let ret = Object.keys(scores).map(key => key + "x" + scores[key]).join("-");
        //document.cookie = "score=" + ret + ";expires=Tue, 31-Dec-2037 00:00:00 GMT";
        localStorage.setItem(ITEMNAME, ret);
    };

    const uploader = {
        "dragover" : (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = e.dataTransfer.types.indexOf("Files") < 0 ? "none" : "copy";
        },

        "drop": (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!confirm("[Warning] Overwrite score?")) return;

            const loaderr = () => console.log("[Load Error] Invalid fIle");
            const files = e.dataTransfer.files;
            let fd = new FileReader();
            fd.readAsText(files[0], 'UTF-8');
            fd.onload = () => {
                let save0;
                try {
                    save0 = JSON.parse(fd.result);
                } catch (error) {
                    console.log(error);
                    return loaderr();
                }
                let hash0 = save0.hash;
                sha256(save0.score).then(hash => {
                    if (hash != hash0) { console.log(hash0, hash); return loaderr(); }
                    localStorage.setItem(ITEMNAME, save0.score);
                    location.reload();
                });
            }
        }
    };
    const download_score = () => {
        let dl = async function(){
            let save = load_score_raw();
            if (!save) return;
            let json = { score: save };
            await sha256(save).then(hash => { json.hash = hash; });
            let blob = new Blob(JSON.stringify(json).split(""), {type:"text/plan"});
            let $link = document.createElement('a');
            $link.href = URL.createObjectURL(blob);
            $link.download = 'savedictat.dat';
            $link.click();
        };
        dl();
    };
    let pt2color = (pt) => {
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

    this.color = pt2color;
    this.load = load_score;
    this.save = save_score;
    this.download = download_score;
    this.dropevent = () => {
        Object.keys(uploader).forEach(e => document.body.addEventListener(e, uploader[e]));
    };
};

const score = new Score();

let query_check = () => {
    let qs = location.hash.split("#q=");
    if (qs.length != 2) return;
    let q = qs.pop();
    if (!q) return;
    quiz.draw(atob(q), () => {
        $id("next").style.display = "";
        $id("next").onclick = () => { menu(); }
    });
    return true;
};

let menu = () => {
    $id("main").style.display = "none";
    $id("menu").style.display = "";

    // 問題一覧
    $id("qoption").innerHTML = [...Array(3)].map((_, cat) =>
        "<fieldset class=cat><legend>" + qlist.levelname(-1, cat) + "</legend>"
            + [...Array(5)].map((_,level) => {
                let slevel = "Difficulty: " + qlist.levelname(level, -1);
                let group = level + cat * 5;
                return "<fieldset class=qlist><legend>" + slevel + "</legend>"
                    + qlist.get(group).map((_,i) => `<span id="${group}_${i}">${i + 1}</span> `)
                    .join("")
                    + "</fieldset>";
            }).join("")+"</fieldset><hr/>"
    ).join("");

    // 成績表示
    score.load().map(v => {
        let $qid = $tag("span", $q("#qoption fieldset.qlist")[v.g])[v.q];
        if (!$qid) return;
        let pts = v.pt;
        let pt = pts.reduce((prev, current) => prev + current) / pts.length;
        $qid.style.backgroundColor = "rgb(" + score.color(pt).join(",") + ")";
        $qid.innerHTML += `<div class="history" style="height:${10 * pts.length}px;">` + pts.join(" ") + "</div>";
        $qid.onmouseover = function() {
            $c("history").forEach($his => $his.style.display = "none");
            $c("history", $qid)[0].style.display = "block";
        };
        if (pt != 1000) return;
        $qid.style.backgroundColor = "";
        $qid.classList.add("perfect");
    });

    // 成績の凡例色スペクトラム
    if ($q("#spectrum div").length < 100)
        [...Array(251)].map((_,i) => {
            let pt = i * 4;
            let $line = $new("div");
            $id("spectrum").append($line);
            $line.style.backgroundColor = 'rgb(' + score.color(pt).join(",") + ')';
            if (pt % 100 == 0)
                $line.innerHTML = ("<span>" + pt + "</span>");
        });

    //クリックイベント
    $q(".qlist span").map($qid => $qid.onclick = function() {
        let c = $qid.id;
        let id = c.split("_");
        quiz.start(id[0] * 1, id[1] * 1);
    });
    $id("dlsc").onclick = () => { score.download(); };
    $id("make").onclick = () => {
        $id("makebox").style.display = "block";
        $id("menu").style.display = "none";
        $id("main").style.display = "none";
        $id("qstrings").onkeyup = (e) => {
            if (e.keyCode != 13) return;
            let q = $id("qstrings").value.trim().split(" ").filter(v=>v).join(" ");
            location.hash = "q=" + btoa(q);
            query_check();
        };
    };
    score.dropevent();
};

window.onload = () => { query_check() || menu(); };

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

const base64click = `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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uybAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`;
const base64fin = `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/waJGgqKi3/wZIJMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=`;
const base64fail = `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`;
const base64done = "SUQzBAAAAAAILFRQRTEAAAANAAADTXkgUmVjb3JkaW5nVElUMgAAAAsAAAMxOTAxMDFfMDI1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";
