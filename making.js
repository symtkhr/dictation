const qbasic = `
I am [Eriko] from Tokyo Japan. I am fourteen years old. 
// 001. 日本の東京から来たエリコです。14歳です。

What day is it today? It's Tuesday.
// 002. 今日は何曜日ですか。", "火曜日です。

What's the date today? It's April 1.
// 003. 今日は何日ですか。", "4月1日です。

When is the school festival? It's next weekend.
// 004. 学校祭はいつですか。", "次の週末です。

Do you know [Adam]? I know him well. He's a good friend of mine.
// 005. アダムを知っていますか。よく知っています。ぼくのよい友だちです。

Excuse me. How much is this? - It's one thousand two hundred yen.
// 006. すみません、これはいくらですか。", "1,200円です。

Who is that man with the glasses? He is our new English teacher.
// 007. あのめがねをかけた男性はだれ？", "彼は私たちの新しい英語の先生です。

OK, everyone. Look at the camera and smile.
// 008. はい、みんな。カメラを見て笑って！

Please write your name, phone number and e-mail address here.
// 009. あなたの名前と電話番号とメールアドレスをここに書いてください。

Where are you from? I'm from a small village in [Nagano] Prefecture.
// 010. 出身はどこですか？", "長野県の小さな村の出身です。

My host family is very nice. My classmates are friendly to me, too.
// 011. ぼくのホストファミリーはとても親切です。クラスメイトもぼくに親しくしてくれています。

Do you play any musical instruments?", "I Play the violin, but I'm not very good at it.
// 012. 何か楽器はひくの？ - バイオリンをひくけど、あまりじょうずじゃないんだ。

Is this [Yuki]'s tennis racket?", "No it's not hers. She uses a black one.
// 013. これはユキのテニスラケット？", "いや、それは彼女のものじゃないよ。彼女は黒いのを使っているよ。

I don't have a map. How about you? I don't have one either.
// 014. 私は地図を持っていません。あなたはどうですか。", "私も持っていません。

I like your T-shirt. I actually have one like it, too.
// 015. あなたのTシャツいいね、サラ。私も実はそれに似たのを持っているの。

Do you have any pets? I have a rabbit. It's really cute. It has long ears.
// 016. 何かペットは飼っているの？", "ウサギを飼っているよ。本当にかわいいよ。長い耳をしているんだ。

Dinner is at eight pm, so come back home before then. OK, Mom. Bye!
// 017. 夕食は午後8時だから、その前に帰ってきてね。", "わかったよ、お母さん。じゃあね！

Thank you very much for your kindness. It's my pleasure.
// 018. ご親切にどうもありがとうございます。", "どういたしまして。

How often do you have dance lessons? Twice a week.
// 019. ダンスのレッスンは何回あるの？", "週に2回です。

Be careful. Don't touch the pot. It's very hot.
// 020. 気をつけて、ジョン。なべにさわらないで。とても熱いから。

Let's meet in front of the movie theater at noon. Sounds good. See you soon.
// 021. 正午に映画館の前で会おう。", "いいわね。じゃ、またすぐにね。

How many classes do you have today?", "I have six classes today, so the last one ends at five thirty.
// 022. 今日はいつく授業あるの？", "6つ。最後の授業は5時半に終わるよ。

[Ms. Taylor], I have some questions about the test. Sure. Go ahead.
// 023. テイラー先生、テストについていくつか質問があるのですが。", "わかりました、フレッド。どうぞ。

This is sashimi. It's raw fish. Why don't you try it? No, thanks. I'm full.
// 024. これは刺身だよ。生の魚なんだ。ためしてみなよ。", "いえ、結構です。おなかいっぱいです。

I like that pianist. I have many of her CDs. The sound of her piano is special.
// 025. 私はあのピアニストが好きです。彼女のCDの多くを持っています。彼女のピアノの音は特別です。

Is it already seven fifty? Yes, hurry up! Class starts in ten minutes!
// 026. もう7時50分なの？", "そうよ、急ぎなさい！ 10分で授業が始まるよ！

Hi, Sarah, this is Mike. What are you doing right now?", "I'm watching TV at home. Why?
// 027. やあ、サラ。マイクだよ。今何をしているの？", "いえでテレビを見ているの。どうして？

A group of boys are flying kites in the field.
// 028. 男の子の一群が原っぱでたこあげをしています。

I'm learning English conversation from a native speaker.
// 029. 私は英語を母語とする人に英会話を学んでいます。

Are you looking for a new shirt? Then come to our store!
// 030. 新しいシャツをお探しですか？ でしたら、私たちのお店にお越しください。

We are doing an interesting experiment in science class.
// 031. 私たちは理科の授業で面白い実験をしています。

I can make curry and rice. It's one of my favorite dishes.
// 032. ぼくはカレーライスが作れます。それはぼくの大好きな料理の1つです。

Come over here and look at this! I can't believe it!", "What? What is it?
// 033. こっちに来て、これを見て！ 信じられないよ！", "何？ 何なの？

Can I have two hamburgers and a salad?", "Sure. Anything else?
// 034. ハンバーガー2つとサラダをいただけますか。", "はい。何かほかには？

Happy birthday, Kate! This is a present for you.", "Thanks! Can I open it?
// 035. 誕生日おめでとう、ケイト。これはきみへのプレゼントだよ。", "ありがとう！ 開けてもいい？

Can you get my coat? It's on the desk over there.", "I see two coats. Which is yours?
// 036. 私のコートを取ってくれる？ そこの机の上にあるの。", "コートは2つ見えるよ。どっちがきみの？

Can you solve this math problem?", "Let me see. Oh, yes it's easy.
// 037. この数学の問題解ける？", "ええと。ああ、うん、簡単だよ。

Oh, no, I'm in trouble. What's the matter?
// 038. まずい、困ったなあ。", "どうしたの？

The bookstore sells many kinds of comic books and weekly magazines.
// 039. その書店はいろいろな種類のまんが本や週刊誌を売っています。

Members of the basketball team run ten miles every morning.
// 040. バスケットボール部の部員は毎朝10マイル走ります。

How do you read this word? [Tegami]. It means letter.
// 041. さやか、この単語どう読むの。", "テガミ。「手紙」という意味よ。

It's such a wonderful day today. Why don't we go to the zoo?", "That's a great idea!
// 042. 今日はこんなにすばらしい天気だよ。動物園に行こうか？", "それはすごくいい考えね！

I often go shopping at ABC store. They sell nice clothes.
// 043. 私はよくABC店に買い物に行きます。そこではよい洋服を売っています。

Get on the bus here, and get off at the last bus stop.", "OK. By the way, how much is the bus fare?
// 044. ここでバスに乗って、最後のバス停で降りてください。", "わかりました。ところで、バス料金はいくらですか。

[Mr. Ozawa]'s son is also a musician, but unlike his father, he plays the guitar.
// 045. 小沢さんの息子もまた音楽家です。しかし、父と違って、彼はギターをひきます。

In America, many schools have a cafeteria, but in Japan, we usually have lunch in the classroom.
// 046. アメリカでは、多くの学校に食堂があります。しかし日本では、私たちはふつう教室で昼食を食べます。

Whose dictionary is this? It's mine. I got it just recently.
// 047. これはだれの辞書？", "ぼくのだよ。つい最近買ったんだ。

Mom, I have good news! I won first prize in the speech contest.", "I'm so proud of you, Jim.
// 048. お母さん、よい知らせがあるよ。スピーチコンテストで1等賞とったよ。", "あなたをすごく誇りに思うわ、ジム。

Kyoto is a city with a long history. It was once the capital of Japan.
// 049. 京都は長い歴史をもつ都市です。それはかつて日本の首都でした。

I was born in Saitama. I lived there until the age of nine, and then moved to Chiba.
// 050. 私は埼玉で生まれました。9歳までそこに住み、それから千葉に引っ越しました。

How was your trip to Canada?", "It was great. Canada has a lot of nature and wild animals.
// 051. カナダへの旅行はどうでしたか。", "最高でした。カナダにはたくさんの自然があり、野生の動物がいます。

What's wrong, Mary? You're quiet today.", "I'm just a little tired. I went to bed late last night.
// 052. どうしたの、メアリー。今日は静かだね。", "ただちょっと疲れているだけ。昨夜遅く寝たの。

Did you see my key anywhere? It was under the chair in the bedroom.
// 053. ぼくのかぎどこかで見た？", "うん。寝室にあったよ。いすの下にあった。

How far is it from here to the station?", "It's about one kilometer. It takes ten minutes.
// 054. ここから駅まで距離はどれくらいですか。", "1キロくらいです。10分かかります。

The rainy season begins in June. We get a lot of rain during this period.
// 055. 梅雨の季節は6月に始まります。この期間の間、たくさんの雨が降ります。

I need a new pair of socks. These socks have holes in them.
// 056. 新しいくつ下が必要です。このくつ下は穴があいています。

In [Hawaii], we stayed at a hotel near the beach. The view from our room was amazing.
// 057. ハワイでは、私たちは浜辺のそばのホテルに泊まりました。部屋からの景色は見事でした。

The dog looked around the room, sat down, and went to sleep.
// 058. その犬は部屋を見渡し、すわり、そして眠りました。

Can I have another pair of chopsticks? I dropped mine on the floor.", "Certainly. Just a moment.
// 059. おはしをもう一膳いただけますか。床に落としてしまいました。", "かしこまりました。少々お待ちください。

Your eyes are red.", "I'm sleepy. I slept for only two hours last night.
// 060. 目が赤いよ、ジェームズ。", "眠いんだ。昨夜、2時間しか寝てないんだ。

The Internet is convenient. We can look up information quickly and easily.
// 061. インターネットは便利です。私たちは情報をすばやく簡単に調べることができます。

The photographer took a picture of the white flowers in the garden.
// 062. その写真家は、庭の白い花の写真をとった。

Japan is an island country, but a lot of different countries had a great influence on Japan.
// 063. 日本は島国です。しかし、多くのいろいろな国が日本に大きく影響をおよぼしました。

Mom, This apple is delicious. It's really sweet.", "Oh, is it? I got it at a new fruit store.
// 064. お母さん、このりんごとてもおいしい。すごく甘いよ。", "あら、そう？ 新しい果物店で買ったのよ。

I worked as a volunteer during spring vacation. We cleaned the park in our town.
// 065. 私は春休みの間、ボランティアとして働きました。私たちは町の公園をきれいにしました。

The TV broke again.", "Are you kidding? This is the third time.
// 066. テレビがまたこわれたよ。", "うそでしょ？これで3回目だよ。

The plane flew up and disappeared into the clouds.
// 067. 飛行機は上に飛んでいき、雲の中に消えていった。

I went to the post office and sent a package by air mail.
// 068. 私は郵便局に行って、小包を航空便で送りました。

What happened? Why are your pants so dirty?", "I fell from my bike on my way to school.
// 069. どうしたの？ なんでそんなズボンが汚れているの？", "学校へ行く途中、自転車から落ちちゃったんだ。

[Mr. Green] laid his hand on his son's shoulder and said, \"Be honest.\"
// 070. グリーンさんは息子の方に手をのせて、「正直になれ」と言った。

My father and I went fishing yesterday. We caught a lot of fish and ate them. They tasted great.
// 071. 昨日、お父さんとぼくは釣りに行きました。たくさん魚をつかまえて食べました。すごくおいしかった。

There is a door at the front side and the back side of the house.
// 072. 家の前側と後ろ側にドアがあります。

In volleyball, there are six players on each team. You can change players during the game.
// 073. バレーボールでは、それぞれのチームに6人の選手がいます。試合中に選手を替えることができます。

Your homework is perfect. There are no mistakes.
// 074. あなたの宿題は完ぺきです。1つもミスがありません。

I'll write you again soon. Take care. Sincerely, [John].
// 075. またすぐあなたに手紙を書きます。気をつけてね。敬具。

Don't worry. Everything will be fine. Trust me.
// 076. 心配しないで、アン。すべてうまくいくから。ぼくを信じて。

The weather will be cloudy in the morning, but in the afternoon, it will be sunny with no wind.
// 077. 天気は、朝はくもりでしょう。しかし午後は、晴れて風もないでしょう。

[Mr. Sanders] will go to Asia on business next week. He will visit several countries.
// 078. サンダースさんは来週仕事でアジアに行きます。彼はいくつかの国々を訪問する予定です。

Is the University near here?", "Yes. Go straight for two blocks and you'll see it on your right.
// 079. ABC大学はこの近くですか。", "はい。2ブロックまっすぐ行くと、右手に見えます。

We will arrive in [Seoul] at five. Please enjoy the flight, the pilot said to the passengers.
// 080. 「5時にソウルに到着します。どうぞ空の旅をお楽しみください」とパイロットは乗客に言った。

Are you free tonight?", "Sorry, I'm going to have dinner with my aunt and uncle.
// 081. 今夜はひま？", "ごめん、おばとおじと夕食を食べる予定なんだ。

Do you have any plans for vacation?", "Yes. I'm going to a hot spring with my family. I can't wait.
// 082. 休暇の予定は何かあるの？", "はい、家族と温泉に行きます。待ちきれません。

I'm going to Britain as an exchange student next fall. I'm staying in London for half a year.
// 083. ぼくは次の秋に、交換留学生としてイギリスに行く予定です。半年の間、ロンドンに滞在します。

[Tom] is studying in his room. He has an important exam tomorrow.
// 084. トムは自分の部屋で勉強しているよ。明日大事な試験があるんだよ。

I'm sorry, but will you start the meeting without me? I missed the bus and will be late.
// 085. 悪いんだけど、私ぬきで打ち合わせを始めてもらえる？ バスに乗り遅れて、遅れるから。

Hello. This is [Ann]. May I speak to [Bill], please?", "Oh, hi, Ann. This is Bill.
// 086. もしもし、アンと申しますが、ビル君はいますか。", "あ、やあ、アン。ビルだよ。

I'm afraid he is not in his office right now. May I take a message?", "That's OK. I'll call back later.
// 087. 彼は今オフィスにいません。ご伝言をうかがいましょうか。", "いえ、結構です。あとでかけなおします。

How long can I borrow these books? Two weeks. You must return them by May 5.
// 088. これらの本はどのくらい長く借りられるのですか。", "2週間です。5月5日までに返さなければいけません。

I fell down the stairs and broke my leg. Now, I have to use a wheelchair for a while.
// 089. 私は階段から落ちて足を骨折しました。今は、しばらくの間、車いすを使わなくてはいけません。

You don't have to be afraid. This snake doesn't bite.
// 090. こわがらなくていいよ。このヘビはかまないよ。

I got up at four thirty this morning.", "Wow, that's early. You must be sleepy then.
// 091. ぼくは今朝4時30分に起きました。", "わぁ、それは早いね。そしたら、眠いにちがいないわね。

Could you turn off the air conditioner, please? I feel a little cold.
// 092. エアコンを消してくれますか？ 少し寒く感じます。

Pardon me? I couldn't hear you because of the noise.
// 093. もう一度言ってくださいますか？ 雑音のせいで聞こえませんでした。

Excuse me, sir. Could you take a photo of us?", "No problem. Are you ready? Say cheese!
// 094. すみません。私たちの写真をとっていただけますか。", "もちろん。準備はいいかい？ はい、チーズ！

Excuse me. I'd like a ticket for the three o'clock performance, please.
// 095. すみません、3時の公演のチケットを1枚ください。

would you go and get some eggs at the supermarket?
// 096. デイブ、スーパーに卵を買いに行ってきてくれない？

Shall I wash the dishes?", "No, it's OK. I'll do it.
// 097. ぼくがお皿を洗いましょうか。", "いいえ、大丈夫です。私がやります。

Shall we take a rest?", "Yes. I'm thirsty. Let's sit in the shade of that tree.
// 098. 休憩しましょうか。", "はい。のどがかわきました。あの木の陰にすわりましょう。

New York is famous for its museums. You should visit some this summer.
// 099. ニューヨークは博物館で有名だよ。この夏にいくつか訪れてみるといいよ。

[Ken] should be the captain of the team.", "Year. I think so,too.
// 100. ケンがチームのキャプテンになるべきだわ。", "うん、ぼくもそう思うよ。

Walk along this street, turn right at the second traffic light, and you'll see the hospital on your left.
// 101. この通りに沿って歩いて、2つ目の信号を右に曲がってください。すると、左手にその病院が見えます。

I found a nice hat at the department store, but I didn't have enough money.
// 102. デパートですてきな帽子を見つけたけど、十分なお金がありませんでした。

Excuse me, could you tell me the way to the public library?", "Sure.
// 103. すみません、公共図書館までの行き方を教えてくれますか。", "いいですよ。

The salesclerk was very helpful. He gave us a lot of useful advice.
// 104. その店員さんはとても助けになりました。彼は私たちにたくさんの役立つアドバイスをくれました。

Do you have an extra pen?", "Yeah. Here you go. I'll lend you this one.
// 105. 余分なペンを持っている？", "うん。はい、これを貸してあげるよ。

What do you want to be in the future?", "I want to be a doctor. I want to help sick people in poor countries.
// 106. あなたは将来何になりたいですか。", "医者になりたいです。貧しい国に住む病気の人たちを助けたいです。

He likes to sit on the bench in the park and draw pictures.
// 107. 彼は公園のベンチにすわって絵を描くのが好きです。

I'd like introduce my friend to you. This is [Gordon].
// 108. クリス、僕の友だちをきみに紹介したいんだけど。彼はゴードンというんだ。

What club are you going to join?", "I decided to join the soccer club.
// 109. 何のクラブに入るの？", "サッカー部に入ることにしたよ。

In winter, many foreigners from Australia and other countries come to Hokkaido to ski.
// 110. 冬には、オーストラリアやほかの国からの多くの外国人が北海道にスキーをしに来ます。

Would you like something to drink?", "Yes. I'd like a cup of tea, please.
// 111. 何かお飲み物はいかがですか。", "はい。お茶を1杯ください。

I went camping with my family. At night, we enjoyed looking at the bright stars in the sky.
// 112. ぼくは家族とキャンプに行きました。夜は、空の輝く星を見て楽しみました。

Explaining things in English is difficult.
// 113. 英語で物事を説明するのは難しい。

Tomorrow is a holiday. Let's do something exciting.", "How about going to the movies?
// 114. 明日は休日だよ。何かわくわくすることしようよ。", "映画を見に行くのはどう？

My father wants a new TV, but my mother says that we don't need one.
// 115. ぼくの父は新しいテレビをほしがっています。でも、母は、私たちには必要ないと言っています。

Here, this is a gift for you. I got it at a market in Singapore. I hope you like it.
// 116. はい、これはきみへの贈り物だよ。シンガポールの市場で買ったんだ。気に入ってくれるといいんだけど。

In my mind, I knew that I was wrong.
// 117. 心の中では、自分が間違っていることをわかっていた。

A lot of foreign people don't like natto. They say it smells bad, but [Ben] loves it.
// 118. 多くの外国の人が納豆を嫌います。彼らはくさいにおいがするといいます。でもベンは大好きです。

The sign in the park says that visitors must not give food to the fish.
// 119. 公演の標識には、訪問者は魚にエサをやってはいけないと書いてあります。

[Miss Thomas] was preparing dinner in the kitchen when the bell rang.
// 120. ベルが鳴ったとき、トーマスさんはキッチンで夕飯の準備をしていた。

When you travel abroad, you must show your passport at the airport.
// 121. 海外に旅行するときは、空港でパスポートを見せなければいけません。

You shouldn't take a bath when you have a high fever.
// 122. 高い熱があるときはお風呂に入らないほうがいいですよ。

In Japan, we always take off our shoes when we enter our hpomes.
// 123. 日本では、家に入るときはいつもくつを脱ぎます。

While we were in China, our neighbor took care of our pet bird.
// 124. 私たちが中国に行っている間は、隣人がペットの鳥の面倒を見てくれました。

I lost my cell phone today. My parents got angry because it was quite expensive.
// 125. ぼくは今日、携帯電話をなくしてしまいました。それは相当高かったので、ぼきうの両親は怒りました。

I'm hungry. Let's take a lunch break before we continue our work.
// 126. おなかが空いたわ。仕事を続ける前に、ランチの休憩をとりましょう。

I woke up at six but I couldn't get out of bed.
// 127. ぼくは6時に目が覚めた。だけど、ベッドから出ることができなかった。

After my brother graduated from college, he became an engineer in the computer industry.
// 128. ぼくの兄は大学を卒業したあと、コンピュータ産業の技術になりました。

Long ago, people thought the earth was flat. Now, of course, we know that it is round.
// 129. ずっと昔、人々は地球が平らだと思っていた。今はもちろん、私たちは地球が丸いということを知っている。

What time is your concert this weekend? I'd like to go.
// 130. 今週末のコンサートは何時？ 行きたいな。

[Linda] is coming to my house after school. Can you come, too? － It sounds like fun. I'd love to go.
// 131. 放課後、リンダが私の家にお来るんだ。きみも来られる？ － おもしろそうね。ぜひ行きたいわ。

[Ken] loves to sing. His dream is to become a professional singer.
// 132. ケンは歌を歌うのが大好きです。彼の夢はプロの歌手になることです。

Did you remember to call [David]? － Oh, no, I forgot! I'll call him right now.
// 133. デイビッドに電話するのを覚えてた？ － しまった。忘れていた！ 今かけるよ。

Can I have a piece of paper? I forgot to bring my notebook. － Sure. Here you are.
// 134. ユミ、紙を1枚もらっていい？ ノートを持ってくるのを忘れちゃったんだ。－ もちろん。はい、どうぞ。

I tried to climb the large hill with my bicycle, but I couldn't.
// 135. ぼくは自転車でその大きな丘を登ろうとしたが、できなかった。

I'm saving money to buy a video game. The game is twenty dollars.
// 136. 私はテレビゲームを買うためにお金をためています。そのゲームは20ドルです。

My baseball coach says that you have to use your whole body to throw the ball.
// 137. ぼくの野球のコーチは、ボールを投げるには体全体を使わなければいけないと言っています。

This coffee machines is simple to use. Just put water into it and push this button.
// 138. このコーヒーメーカーは、使うのが簡単です。ただの水をその中に入れて、このボタンを押してください。

The purpose of this meeting is to choose our next leader.
// 139. このミーティングの目的は、私たちの次のリーダーを選ぶことです。

If you have any questions, just raise your hands. I'll be happy to answer them.
// 140. もし質問があったら、ただ手をあげてください。私は喜んでお答えします。

I like listening to the radio since there are many interesting language programs.
// 141. 私はラジオを聞くのが好きです。たくさんのおもしろい語学番組があります。

The singer has a soft, low voice. Listening to his songs relaxes me.
// 142. その歌手は、やわらかくて低い声をしています。彼の歌を聞くと落ち着きます。

Put the cups in the sink after you finish using them. Don't leave them on the table.
// 143. 使い終わったら、カップは流しに入れてください。テーブルに置いたままにしないでください。

Swimming in the sea is very different from swimming in a pool. There are waves in the sea.
// 144. 海で泳ぐことはプールで泳ぐこととは、まったく違います。海には波があります。

Sending New Year's cards is a common Japanese custom. Children and adults send cards to friends.
// 145. 年賀状を送ることは一般的な日本の習慣です。子どもや大人が友達にカードを送ります。

Don't be afraid of making mistakes. Just have fun and do your best.
// 146. 間違えることを恐れないで。とにかく楽しんで、ベストを尽くして。

Did you enjoy yourself at the party yesterday?", "Yes, I had a very good time. Thanks for inviting me.
// 147. サム、昨日のパーティーは楽しんだ？", "うん、とても楽しい時間だったよ。招待してくれてありがとう。

I'm looking forward to going to high school, but I'm sad to say goodbye to my junior high school friends.
// 148. 私は高校に行くのが楽しみです。だけど、中学の友だちに別れを告げるのはさびしいです。

In the interview, the actor talked about his past and his reason for becoming an actor.
// 149. そのインタビューの中で、その俳優は自分の過去について、また、俳優になった理由について話をした。

Before leaving the house, turn off the lights and close all the windows.
// 150. 家を出る前に電気を消して窓を全部閉めてね。

Don't use a mobile phone when you drive. You should pay attention to your driving.
// 151. 運転をするときに携帯電話を使ってはいけません。運転に注意を払うべきです。

I'm taller than [Eric], but [Greg] is the tallest of the three of us.
// 152. ぼくはエリックよりも背が高いけど、グレッグがぼくたち3人の中でいちばん背が高い。

Mt. Fuji is the highest mountain in Japan. It is famous for its beautiful shape.
// 153. 富士山は日本でいちばん高い山です。それはその美しい形で有名です。

Which do you like better, cats or dogs?", "That's hard question. Both are cute.
// 154. あなたはねこと犬ではどちらがより好きですか。", "それは難しい質問ね。両方ともかわいいよ。

[Tina] covered her nose and mouth with a handkerchief.
// 155. ティナはハンカチで鼻と口をおおいました。

[Tommy] is a very clever kid with a rich imagination.
// 156. トミーは豊かな想像力を持ったかしこい子だ。

[George] doesn't have a wallet. He puts all his coins in his pocket.
// 157. ジョージは財布を持っていません。彼は、コインを全部ポケットに入れています。

Books are important. However, we can learn some things only through experience.
// 158. 本は大事です。しかしながら、経験を通して学べないことがあります。

I'm surprised that you know a lot about American culture. I'm very interested in the United States.
// 159. 驚いたわ。アメリカの文化についてよく知っているのね。", "うん。アメリカにすごく興味があるんだ。

Your feet are really wet. Here, use this towel and dry yourself.
// 160. 足がびしょびしょにぬれているじゃない。はい、このタオルを使って乾かしなさい。

In our everyday life, we waste a lot of water and electricity.
// 161. 日常生活の中で、私たちはたくさんの水と電気をむだにしています。

I agree with [Jack]'s opinion. We should reduce trash, and we should recycle more.
// 162. 私はジャックの意見に賛成です。私たちはゴミを減らして、もっとリサイクルをするべきです。

The [ALT] pronounced the alphabet slowly. The students listened carefully and repeated after him.
// 163. ALTはアルファベットをゆっくり発音しました。生徒たちは注意深く聞き、彼のあとをくり返しました。

The bridge over the river looked old. I didn't want to walk across it.
// 164. 川にかけてあるその橋は古そうに見えた。私はそれを歩いて渡りたくなかった。

Don't tell Mom anything about the birthday cake yet. I want to surprise her.
// 165. お母さんには誕生日ケーキのことはまだ何も言わないでね。驚かせたいの。

I'll tell you the truth, but it's a secret so don't tell anybody. I promise I won't.
// 166. あなたに真実をお話します。でも、秘密ですのでだれにも言わないでください。", "言いません。約束します。

My grandma became very ill last year. Her illness taught me the importance of good health.
// 167. 私のおばあちゃんは昨年、重病になりました。彼女の病気は、私に健康の大切さを教えてくれました。

I'm confident that I can succeed. Please give me a chance.
// 168. 私は成功する自信があります。私に機会をください。

The population f the world is rising. Today, there are nearly seven billion people in the world.
// 169. 世界の人口は増えています。こんにち、世界で70億人近くいます。

Italy is a great place for sightseeing. There are many World Heritage sites there.
// 170. イタリアは観光にとてもよい場所です。そこはたくさんの世界遺産があります。

[Mr. King]'s brave actions gave courage to millions of people.
// 171. キング氏の勇敢な行動は、何百人もの人に勇気を与えました。

[Bob], take your gloves with you when you go out. The newspaper says it's going to snow.
// 172. ボブ、外出するときは手袋を持っていくんだよ。新聞によると、雪が降るそうだよ。

It was my cousin's wedding yesterday. I almost cried when she and her husband kissed.
// 173. 昨日は私のいとこの結婚式でした。彼女と夫がキスをしたとき、私は泣きそうになりました。

I have basic knowledge of English, but sometimes I have a difficult time when I read long sentences.
// 174. 私は英語の基本的な知識を持っています。だけど、ときどき長い文を読むときに苦労します。

[Yuji] visited his grandmother at the nursing home. They talked and laughed, and had a great time together.
// 175. ユウジは老人ホームに祖母を訪ねました。2人はおしゃべりし、笑い、いっしょにすばらしい時間を過ごしました。

[Mr. Adams] spoke little Japanese, so I had to communicate with him in English.
// 176. アダムズさんはほとんど日本語が話せなかったので、私は彼と英語で意思を伝え合わないといけなかった。

[Lisa] lay down on her bed, spread her arms, and breathed deeply.
// 177. リサはベッドの上で横になり、腕を広げ、深く呼吸した。

[Ben] brushed his teeth. He then combed his hair and put on his school uniform.
// 178. ベンは歯を磨きました。それから髪をとかし、学校の制服を着ました。

[Beth] took a look at herself in the mirror, and then went out of the bathroom.
// 179. べスは鏡の中の自分自身をちらっと見て、それからトイレを出ました。

Western breakfasts are becoming popular in Japan, but I prefer rice and miso soup.
// 180. 日本では西洋風の朝食がはやり始めていますが、私はごはんとみそ汁のほうが好きです。

There was a terrible car accident on this corner yesterday, but fortunately no one died.
// 181. 昨日、この角でおそろしい自動車事故がありましたが、幸いにもだれも死にませんでした。

I don't know much about art, but I think his paintings are interesting. He paints in a unique style.
// 182. ぼくは芸術についてあまり知らないけど、彼の絵はおもしろいと思う。彼は独特なスタイルで絵をかきます。

Global warming is a serious problem. If we don't stop it, people all over the world will suffer.
// 183. 地球温暖化は深刻な問題です。もし地球温暖化を止めないと、世界中の人々が苦しむでしょう。

When the singer appeared on the stage, the excited audience stood up and clapped their hands.
// 184. その歌手がステージに現れると、興奮した観客は立ち上がって拍手をしました。

In Japanese society, people bow in many situations. For example, we bow when we say thank you.
// 185. 日本の社会では、多くの場面で人々はおじぎをします。たとえば「ありがとう」を言うときにおじぎをします。

The restaurant was crowded and noisy. I didn't feel comfortable there.
// 186. そのレストランはこんでいて騒がしかった。私はそこで心地よい感じはしませんでした。

Astronauts go through many years of training before they go to space.
// 187. 宇宙飛行士は、宇宙に行く前に何年もの訓練を受けます。

Although there was some trouble, the spaceship somehow landed safely.
// 188. いくらかのトラブルはありましたが、その宇宙船は、何とか無事に着陸しました。

My grandfather likes to collect rare stamps. He has an impressive collection.
// 189. ぼくの祖父は珍しい切手を集めるのが好きです。彼は印象深いコレクションを持っています。

The education system in Japan is changing. Elementary schools are starting to teach English.
// 190. 日本の教育制度は変化しています。小学校が英語を教え始めています。

I belong to the tennis club. We have practice every day. Our goal is to win the national championship.
// 191. 私はテニス部に所属しています。私たちは毎日練習があります。目標は全国大会で優勝することです。

During my homestay, I had a chance to talk with people from different ethnic groups.
// 192. ホームステイ中、私はさまざまな民族の人々と話す機会がありました。

The city hall is planning a campaign to plant flowers all over the city.
// 193. 市役所は、街じゅうに花を植えるキャンペーンを計画しています。

I have a headache, and I can't stop coughing.", "You seem to have a cold. Here, take this medicine.
// 194. 頭痛がし、せきが止まりません。", "かぜをひいているようですね。はい、この薬を飲んでください。

It's a little cool outside, but I don't think a jacket is necessary.
// 195. 外はすずしいけど、ジャケットは必要ないと思うよ。

How do people in Japan celebrate New Year's Day?", "Many families visit shrines to wish for good luck.
// 196. 日本の人々はどのように元日を祝うの？", "多くの家族は幸運を祈るために神社に行きます。

Which train should I take? It's cheaper if you take the Yellow Line, but the Green Line is faster.
// 197. どちらの電車に乗るべきですか。Yellow線に乗るとより安いけど、Green線のほうが速いよ。

For the latest information on our products, check our company homepage.
// 198. 当社の製品に関する最新情報については、当社ホームページをご覧ください。

I don't think war is the solution. I think there are more peaceful ways than fighting.
// 199. 私は、戦争が解決策だとは思いません。戦うことよりももっと平和な方法があると思います。

How is the pain in your stomach?", "It's getting better, but it still hurts.
// 200. おなかの痛みはどう？", "よくなってきているけど、まだ痛いよ。

[Lucy] is my best friend. She is smart and kind. She has a warm heart.
// 201. ルーシーは私の親友です。彼女は頭がよくて親切です。彼女は温かい心を持っています。

The farmer has more than fifty cows on his farm.
// 202. その農場経営者は、農場に50頭以上の牛を飼っています。

I hear that and more people in the U.S. are cooking Japanese food at home. Is this true?
// 203. ますます多くのアメリカ人が自宅で日本料理を作っているそうですが、本当ですか。

Cherry blossoms are a symbol of Japan. They have a beautiful pink color.
// 204. 桜の花は日本の象徴です。美しいピンクの色をしています。

The car crashed into a wall at a high speed.
// 205. その車は速いスピードで壁にぶつかった。

The topic of today's class is the cause and effect of climate change.
// 206. 今日の授業の話題は、気候変化の原因と結果です。

The runner set a new record in the 100-meter race.
// 207. その走者は、100メートル走で新記録を出しました。

Most people like tea, especially green tea, but coffee is also popular among adults.
// 208. ほとんどの人はお茶、特に緑茶が好きです。でも、大人の間では、コーヒーも人気です。

Her gesture had a very important meaning, but nobody realized it.
// 209. 彼女のジェスチャーはとても重要な意味を持っていましたが、だれもそれに気づきませんでした。

We had a barbecue in our yard yesterday. I cooked chicken for the first time.
// 210. 昨日、庭でバーベキューをしました。私は初めてとり肉を料理しました。

[Mamoru] is a friend from my hometown. We went to the same nursery school a d kindergarten.
// 211. マモルはぼくの故郷の友だちです。ぼくたちは同じ保育園と幼稚園に行っていました。

I got a bottle of juice and a bag of potato chips at the convenience store.
// 212. ぼくはジュース1本とポテトチップス1袋をコンビニで買いました。

The waiter greeted the customer with a smile, and then took his order.
// 213. ウェイターはお客さんに笑顔であいさつをし、それから注文をとりました。

When the bank clerks were counting the money, a man with a gun suddenly appeared.
// 214. 銀行員がお金を数えていたとき、銃を持った男が突然現れた。

During the discussion, [Mary] shook her head and said, \"I disagree.\"
// 215. 話し合いの間、メアリーは首を横に振り「私はそう思わない」と言いました。

[Ricky] is a polite boy, but he doesn't follow the rules.
// 216. リッキーは礼儀正しい少年ですが、規則を守りません。

Let's go inside. It's too dark to play catch.
// 217. 中に入ろう。キャッチボールをするには暗すぎる。

I was so nervous that I couldn't express my thoughts well.
// 218. 私はあまりにも緊張していたので、自分の考えをうまく表現することができなかった。

These days, our schedules are so busy that we can't spend much time together.
// 219. 近ごろ、私たちのスケジュールはあまりにも忙しくて、あまりいっしょに時間を過ごせていません。

This TV drama is about friendship, happiness, and the real meaning of life. It's worth watching.
// 220. このテレビドラマは友情、幸福、そして人生の本当の意味についてのものです。見る価値があります。

This isn't a normal knife. It's a special one for cutting bread.
// 221. これはふつうのナイフではありません。これはパンを切るための特別なものです。

[Mrs. Thomas] is a nurse. She takes care of patients with serious diseases.
// 222. トーマスさんは看護師です。彼女は重病の患者さんの世話をしています。

New York has many sightseeing spots such as the Statue of Liberty, [Trinity Church], and so on.
// 223. ニューヨークには、自由の女神やトリニティ教会などのようなたくさんの観光スポットがあります。

Thanks to your advice, I was able to pass the test. Thank you. － Not at all. I'm glad I could help.
// 224. あなたの助言のおかげで試験に合格できたよ。ありがとう。－ どういたしまして。力になれてうれしいわ。

Perhaps someday, a person will be able to live on another planet besides the earth.
// 225. たぶん、いつか、人は地球とはほかに、別の惑星で生活することができるだろう。

When I looked down at the ground from the top of the tower, my knees shook.
// 226. 塔のてっぺんから地面を見下ろしたとき、私のひざはがくがくした。

The gentleman put a ring on the lady's finger and said, "Will you marry me?"
// 227. その紳士は、女性の指に指輪をはめ「結婚してくれますか」と言った。

As citizens of this world, we have a responsibility to preserve nature.
// 228. この世界の市民として、私たちには自然を保護する責任があります。

The little girl asked Santa Claus to bring her a pretty doll for Christmas.
// 229. その幼い少女は、クリスマスにかわいい人形を持ってきてくれるようにサンタクロースに頼みました。

Milk helps to make your bones strong and healthy.
// 230. 牛乳は骨を強くそして健康にすることを手助けしてくれます。

Music has strange powers. When I feel sad, music makes me happier.
// 231. 音楽は不思議な力を持っています。悲しい気分のとき、音楽は私をより幸せにしてくれます。

Please open the door. No, go away! I don't want to talk to anyone. Leave me alone.
// 232. シンディー、お願いだからドアを開けて。", "いや、どこか行って！ だれとも話したくないの。1人にして。

The police have an important job. They fight against crime and keep the community safe.
// 233. 警察には大切な仕事があります。彼らは犯罪と戦い、地域社会を安全に保ちます。

Those boxes look heavy. I'll help you carry them. Oh thanks, that's kind of you.
// 234. それらの箱は重そうだね。運ぶの手伝ってあげるよ。", "あ、ありがとう、グレッグ。優しいのね。

Are you busy next weekend?", "Hold on. Let me check my calender.
// 235. やあ、パット。来週の週末は忙しい？", "ちょっと待って。カレンダーをチェックさせて。

The thief saw a police officer and hid behind a car.
// 236. どろぼうは警察官を見て、車の後ろに隠れた。

I've lived in Tokyo for over five years, but I've never been to Tokyo Tower.
// 237. 私は5年以上東京に住んでいます。でも一度も東京タワーに行ったことがありません。

Have you ever read any books by Matsumoto Seicho?", "Yes, I've read a couple of his mystery novels.
// 238. 今までに松本清張の本は何か読んだことある？", "うん。彼の推理小説を2、3冊読んだことがあるよ。

Though it has been 10 years, I clearly remember that day. It still lives in my memory.
// 239. もう10年たつけれど、その日のことをはっきりと覚えています。まだ記憶に残っています。

Dear Mom, A month has passed since I came to Spain.
// 240. お母さんへ、スペインに来てから1か月がたちました。

\"I've finished! Finally, I can go home,\" the tired worker said happily.
// 241. 「終わった！ やっと家に帰れる」と疲れた労働者はうれしそうに言った。

I sent Fred an e-mail, but I haven't received a reply yet.", "That's strange. Maybe he didn't notice it.
// 242. フレッドにメールを送ったけど、まだ返事を受け取ってないんだ。", "それは変ね。気づかなかったのかもね。

Even my grandparents can use the Web. I'll teach you how to use it.
// 243. ぼくの祖父母でさえもインターネットを使えるよ。使い方を教えてあげるね。

It's not good manners to talk in a loud voice when you are riding on trains.
// 244. 電車に乗っているときに大声で話すのはよいマナーではありません。

Even if we leave now, it's impossible to arrive there in time.
// 245. たとえ今出発したとしても、そこに間に合うように到着するのは不可能だよ。少なくとも1時間はかかるんだ。

A lot of rocks were used to build this castle.
// 246. この城を建てるのにたくさんの岩が使われました。

The artist is widely known. He is popular everywhere is the world.
// 247. その芸術家は、幅広く知られている。彼は世界中どこでも人気がある。

The daughter of a king queen is called a princess.
// 248. 王あるいは女王の娘は王女といいます。

\"Many books are stolen every year,\" the owner of the bookshop complained.
// 249. 「毎年たくさんの本が盗まれています」と、その書店の店主は不平を言いました。

A part of the apartment building was damaged by the fire.
// 250. アパートの一部はその火事で損害を受けました。

I was shocked when I got the results of the exam since I was expecting a better score.
// 251. ぼくは試験の結果を受け取ったちきにショックを受けました。ぼくはもっとよい点数を期待していました。

His eyes were filled with tears when he won the match.
// 252. 試合に勝ったとき、彼の目は涙でいっぱいだった。

A welcome party was held for the international exchange students. They seemed happy to be in Japan.
// 253. 国際交換留学生のために歓迎会が開かれた。彼らは、日本に来てうれしそうだった。

There was an earthquake in the Kanto area this morning. A few people were injured, but none were killed.
// 254. 今朝、関東地方で地震がありました。何人かがけがをしましたが、だれも死にませんでした。

It's dangerous to put a burning candle beside the bed.
// 255. ベッドのそばに燃えているキャンドルを置くのは危険だ。

The elderly man looked at the setting sun and sighed. It was a beautiful sunset.
// 256. そのお年寄りの男性は沈んでいく太陽を見てため息をついた。美しい日没でした。

[Reiko] noticed an old woman standing nearby, so she offered her seat.
// 257. レイコは、近くに立っているお年寄りの女の人に気づいたので、自分の席をゆずりました。

The driver looked away from the road and almost hit a girl crossing the street.
// 258. 運転手は道路から目をそらし、道を横断している女の子にぶつかりそうになった。

My dad is a big fan of European furniture. He only buys furniture made in Europe.
// 259. 私の父はヨーロッパの家具の大ファンです。彼はヨーロッパで作られた家具しか買いません。

The store only sells fresh vegetables grown on local farms.
// 260. その店は、地域の農場で育てられた新鮮な野菜だけを売っています。

[Andy] compared bananas from different countries. He liked bananas produced in Brazil the best.
// 261. アンディはさまざまな国のバナナを比較しました。彼はブラジルで生産されたバナナがいちばん好きでした。

"Can you guess who built this temple?", the tour guide asked the tourists.
// 262. 「この寺を建てたのはだれか当てられますか」と旅行ガイドは観光客たちに尋ねました。

Somebody shouted my name, but I didn't know who it was.
// 263. だれかが私の名前を叫んだが、私はそれがだれだかわからなかった。

A stranger came up to me and asked me where the Cultural Canter was.
// 264. 見知らぬ人が私に近づいてきて、文化センターがどこにあるかをたずねた。

I wonder why Jim is late. It's unusual for him to be late.
// 265. どうしてジムは遅れているのだろう。彼が遅刻するのは珍しいことだ。

[Ms. Arakawa] is an athlete who won the gold medal in the Olympic Games.
// 266. 荒川さんは、オリンピックで金メダルをとった選手です。

My dad works for a company that makes electric toys.
// 267. 私のお父さんは、電気のおもちゃを作る会社に勤めています。

Let's go cycling tomorrow if it isn't raining. I know a nice cycling path that goes through the forest.
// 268. もし雨が降っていなかったら、明日サイクリングに行こう。森を抜けるいいサイクリングの小道を知っているんだ。

I want to be a scientist. I want to invent something that will change people's loves forever.
// 269. ぼくは科学者になりたいです。ぼくは、人々の生活を永遠に変える何かを発明したいです。

This is a famous poem by [Basho]. It is about a frog which jumps into a silent pond.
// 270. これは芭蕉による有名な詩です。静かな池の中に飛び込むカエルについてです。

The hotel guests have their meals in the dining room.
// 271. ホテルのお客さんたちは食堂で食事をします。

Both the apple pie and the chocolate cookies look delicious.", "Let's get both and share them.
// 272. アップルパイもチョコレートクッキーもおいしそうね。", "両方買って、分け合おうよ。

The dog barked with joy when his master came home.
// 273. その犬は、主人が帰宅すると、喜んでほえた。

In case of emergency, use the stairs. Don't use the elevator.
// 274. 緊急事態の場合は、階段を使ってください。エレベーターは使わないでください。

When [Mrs. Tani] feels confused, scared, or disappointed, she writes down her feelings in her diary.
// 275. 谷さんは、混乱したり、こわかったり、失望したりしたときは、日記に気持ちを書きとめます。

The police officer tried his best, but he could not discover any new facts.
// 276. その警察官はベストを尽くしたが、新たな事実を発見することはできなかった。

Each person has their own opinions and feelings. We should understand that and respect the differences.
// 277. それぞれの人が自分自身の意見や感情を持っています。私たちはそれを理解し、違いを尊重するべきです。

In spring, these branches will be covered with leaves.
// 278. 春になると、これらの枝は葉っぱでおおわれているでしょう。

Various environmental groups are working to protect the environment and our natural resources.
// 279. いろいろな環境団体が、環境と自然資源を守るために活動しています。

Look, there is a mouse there! Is it dead?", "No, its tail is moving. It's alive.
// 280. 見て、あそこにねずみがいる！ 死んでる？", "いや、しっぽが動いているよ。生きているよ。

The reporter rushed to the site of the attack to gather more information.
// 281. 報道記者はもっと多くの情報を集めるため、攻撃が行われた場所に急いで行った。

[Mr. Endo] may not be young, but he is full of energy. He is an active person with many hobbies.
// 282. 遠藤さんは若くはないかもしれないが、エネルギーにあふれています。彼は多くの趣味を持った活動的な人です。

He has a very positive attitude toward life. He fears nothing, and he worries about nothing.
// 283. 彼は人生に対してとても前向きな態度を持っている。彼は何も恐れないし、何についても心配しない。

Teammates must support each other. A single team member can't do everything by himself.
// 284. チームメイトはお互いに支え合わなければいけません。たった1人の選手が1人ですべてのことはできません。

[Perry]'s visit to Japan was a historic event. After the visit, Japan worked on becoming a modern country.
// 285. ペリーの日本への訪問は歴史的な出来事だった。その訪問後、日本は近代国家になろうと取り組んだ。

As soon as possible, we must think of ways to prevent further accidents.
// 286. できるだけ早く、私たちはさらなる事故を防ぐ方法を考えなければいけません。

[Armstrong] was the first human being to step on the surface of the moon.
// 287. アームストロングは、月の表面をふんだ最初の人間です。

[Mr. Black] is a cheerful person. He likes telling jokes and funny stories.
// 288. ブラックさんは明るい人です。彼は冗談やおもしろい話を言うのが好きです。

I used to think that reading books was boring, but now it's my favorite thing to do.
// 289. ぼくは前は本を読むことはつまらないと思っていた。だけど、今では、いちばん好きなことだ。

At first [Ron] was very shy, but after a while, he got used to school, and he gradually changed.
// 290. 最初は、ロンはとてもはずかしがりやでした。でもしばらくすると、彼は学校に慣れ、だんだんと変わっていきました。

My coach told me to trust my own abilities. Her words encouraged me.
// 291. 私のコーチは、私に自分自身の能力を信じるようにと言った。彼女の言葉は私を勇気づけました。

They didn't have freedom of expression. The government didn't allow people to say things freely.
// 292. 彼らには表現の自由がありませんでした。政府は人々が物事を自由に言うことを許さなかったのです。

According to this article, during the twentieth century, the average temperature in Tokyo increased by three degrees.
// 293. この記事によると、20世紀の間に、東京の平均気温は3度上昇しました。

My father is getting fat, so he should do more exercise. Also, he should eat less meat and more vegetables.
// 294. 私の父は太ってきています。彼はもっと運動をするべきです。また、肉をもっと少なく、野菜をもっと多くとるべきです。

My favorite subject is P.E., and my least favorite subject is social studies.
// 295. ぼくのいちばん好きな科目は体育で、最も嫌いな科目は社会科です。

To reduce air pollution, we should use bikes instead of cars when we travel short distances.
// 296. 大気汚染を減らすために、私たちは短い距離を移動するときは、車の代わりに自転車を使うべきだ。

I think communication can help to develop understanding between the younger generation and the older generation.
// 297. 私はコミュニケーションによって、若い世代と年配の世代との間で理解を深めることができると思う。

I didn't wear a cap in spite of the strong sunlight. Now, the skin on my face really hurts.
// 298. 強い日ざしにも関わらず、ぼくは帽子をかぶりませんでした。それで今、顔の皮がとても痛みます。
`.split("\n\n");

() => {
let c = [
[28,35,37,48,80,122], 
[30,33,52,54,70,81,(83),84,86,(88),91,(95),(114),(115),117,121,],
[17,18,105,46,47,50,51,60,64,65,73,76,(89),(90),(92),(96),97,118],
    [107,72,98,69],
[26,104,106,108,116,119],
].forEach(function(qs, level) {
    console.log(level);
    qs.forEach(function(q){
        console.log(qlist[5][q-1]);
    });
});
}

let qs = qbasic.map(v => {
    let row = v.trim().split('"').join("").split("\n");
    let ja = row.pop();
    let id = ja.match(/ [0-9]+\./)[0];
    ja = ja.split(id).join("").split("//").join("").trim();
    let en = row.shift().trim().split("?,").join("?");
    let words = en.split("[").join("").split("]").join("").split(" ");
    let ss = words.filter(w => w!="Mt." && w!="Mr." && w!="Ms." && w.match(/[!?.]$/)).length;
    let ws = en.split(" ").length;
    return {id:parseInt(id), en:en, ss:ss, ws:ws, ja:ja};
});

qs.filter(a=>a.ss==1).sort((a,b)=>(a.ws - b.ws)).map((v,i)=>console.log(JSON.stringify(v)+","));
qs.filter(a=>a.ss>1).sort((a,b)=>(a.ws/a.ss - b.ws/b.ss)).map((v,i)=>console.log(JSON.stringify(v)+","));
//console.log(qs);
[
["He might be right.",
"You should see the movie.",
"If you know the truth, please tell me.",
"The girl came singing a song.",
"Shall we dance one more time?",
"Don't leave me alone.",
"You may come in.",
"Yes, what do you want?",
"I put on my shoes.",
"All you need is love.",
"This is hard to do.",
"He said, \"I love you\".",
"I am satisfied with you.",
"Shall I do it for you?",
"Do you mind opening the window?",
"I am glad to see you.",
"I have many things to do.",
"He must be the spy.",
"I know that you are right.",
"Thank you very much for your kindness.",
"How many classes do you have today?",
"I have some questions about the test.",
"Are you looking for a new shirt? Then come to our store!",
"How was your trip to Canada?",
"Do you have any plans for vacation?"],
["He seems to like you.",
"We are going to stay for a while.",
"I don't understand what you are saying.",
"May all your christmas be white.",
"He runs faster than his dog.",
"I am now independent of my parents.",
"The sun having set, we started home.",
"He is not as tall as I.",
"He is taller than I by five inches.",
"She must be crazy to do such a thing.",
"I heard someone shout.",
"Her absence disappointed me.",
"He is no better than yesterday.",
"Many years have passed since he died.",
"It has been raining these three days.",
"He went out just as I came in.",
"If I had time, I could help you.",
"I like boxing better than any other sport.",
"[Charlie] is not my pet, but my friend.",
"It is kind of you to help me.",
"I am eating a lot of vegetables.",
"I finish my job at five every day.",
"I went to the town where I was born.",
"You must do it if you want to survive.",
"To tell the truth, I didn't go to school.",
"She is the most popular singer in the [Philippines].",
"Don't you smell something burning?",
"How often do you have dance lessons?",
"Let's meet in front of the movie theater at noon.",
"Come over here and look at this! I can't believe it!",
"Can I have two hamburgers and a salad?",
"Get on the bus here, and get off at the last bus stop.",
"Canada has a lot of nature and wild animals.",
"I'm just a little tired because I went to bed late last night.",
"Did you see my key anywhere?",
"How far is it from here to the station?",
"The rainy season begins in June. We get a lot of rain during this period.",
"The dog looked around the room, sat down, and went to sleep.",
"I slept for only two hours last night, so I'm sleepy now. ",
"Don't worry, everything will be fine. Trust me.",
"I'm going to have dinner with my aunt and uncle."],
["Do you play any musical instruments?",
"I Play the violin, but I'm not very good at it.",
"I'm learning English conversation from a native speaker.",
"We are doing an interesting experiment in science class.",
"Can you solve this math problem?",
"The bookstore sells many kinds of comic books and weekly magazines.",
"Members of the basketball team run ten miles every morning.",
"The weather will be cloudy in the morning, but in the afternoon it will be sunny with no wind.",
"In America, many schools have a cafeteria, but in Japan, we usually have lunch in the classroom.",
"I have good news! I won first prize in the speech contest.",
"I am surprised that you know so much about me.",
"She insisted on my paying the bill.",
"It would be good to be with you.",
"You cannot make yourself understood in English.",
"We all expect you to pass the exam.",
"Whatever you say, I have decided to leave.",
"Never have I seen such a beautiful sight.",
"It is dangerous for a small kid to play in a bath tub.",
"If it should go wrong, I will take the responsibility.",
"Someone has left the water running.",
"I filled the glass with water.",
"She didn't know how much he was depressed.",
"It's a pity that you can't come.",
"It doesn't matter how you do it.",
"She welcomes me whenever I visit her.",
"This is the way he manages the company.",
"You are too young to know the truth.",
"On leaving school, she went into show business.",
"This is the reason I quit the company.",
"Having no money, the man had to walk home.",
"She welcomes me, no matter when I visit her.",
"He would often come to see me on Sundays.",
"Since I was not prepared, I did not know what to do.",
"It is surprising that she should do such a thing.",
"I had finished breakfast when he came to pick me up.",
"Seen from here, my house looks like a small stone.",
"I need a new pair of socks. These socks have holes in them.",
"Can I have another pair of chopsticks? I dropped mine on the floor.",
"I can make curry and rice. It's one of my favorite dishes.",
"The Internet is convenient. We can look up information quickly and easily."],
["If I were a woman, things would be interesting.",
"The light went on and off.",
"Pass me what is before you.",
"I am sitting for an exam tomorrow.",
"People do not like to be kept waiting.",
"It was not until I came home that I had known the news.",
"He arrived after everything had settled down.",
"Nothing is more disgusting than to find a hair in the dish.",
"Had I known it, I would have told you.",
"Were I a bird, I could fly to you.",
"She is talented in the field of performing art.",
"She didn't know why he was depressed.",
"She didn't know whether he was really depressed or not.",
"It makes no difference who leads the team.",
"I didn't recognize you, because you wore dark glasses.",
"What a dictionary says is not always correct.",
"If I were to die now, you would be suspected.",
"The trouble is that I don't know how he looks.",
"When I was a child, I was afraid of the dark.",
"I just stood there while he was talking over the telephone.",
"She is such a kind woman that everyone calls her [Mom].",
"I had my picture taken by the great [Buddha].",
"The photographer took a picture of the white flowers in the garden.",
"In [Hawaii], we stayed at a hotel near the beach. The view from our room was amazing.",
"I went to the post office and sent a package by air mail.",
"A group of boys are flying kites in the field.",
"I fell from my bike on my way to school.",
"[Mr. Ozawa]'s son is also a musician. But unlike his father, he plays the guitar.",
"Japan is an island country, but a lot of different countries had a great influence on Japan."],
["Dinner is at eight PM, so come back home before then.",
"[Mr. Green] laid his hand on his son's shoulder and said, \"Be honest.\"",
"\"We will arrive in [Seoul] at five. Please enjoy the flight,\" the pilot said to the passengers.",
"Mr. Sanders will go to Asia on business next week. He will visit several countries.",
"The plane flew up and disappeared into the clouds.",
"I aimed at the bull's eye.",
"I drove at 96 kilometers per hour.",
"You are old enough to leave us.",
"It is fun to play pool with you.",
"I suppose the man to have been on the scene.",
"The news that the President received an invitation from [Kremlin] is false.",
"No one is so old that he cannot learn a new thing.",
"If I had not met you, I might have been single up till now.",
"Wait till I come back.",
"He is the tallest of all.",
"I stayed though I hated it.",
"He is said to have a great fortune.",
"There is no telling what may come next.",
"It pays to work hard when you are young.",
"I will have been awake for 24 hours in an hour.",
"[John Lennon] was not only a great musician, but also a mentor to our generation.",
"In 1939, when the [World War II] began, he left Germany and went to the U.S.",
"As he was a [Catholic], he was not allowed to divorce.",
"Be careful in underwriting a contract.",
"What do you think is the greatest threat to man?",
"It was you that shot my brother in [Arizona] last year.",
"What happened? Why are your pants so dirty?"]]
