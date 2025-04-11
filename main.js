`use strict`;

{
  // 異体字リスト  標準字（単独コード）・異体字（単独コード）の順で並ぶ
  const checkString = '亜亞悪惡圧壓囲圍為爲医醫壱壹逸逸稲稻飲飮隠隱羽羽閏閠営營栄榮穎頴衛衞鋭銳益益駅驛悦悅謁謁閲閱円圓園薗縁緣艶艷塩鹽奥奧応應横橫欧歐殴毆黄黃温溫穏穩仮假価價禍禍画畫会會壊壞悔悔懐懷海海絵繪慨慨概槪拡擴殻殼覚覺学學岳嶽楽樂喝喝渇渴褐褐勧勸巻卷寛寬歓歡漢漢缶罐観觀関關陥陷館館巌巖顔顏器器既既既旣帰歸気氣祈祈亀龜偽僞戯戲犠犧旧舊拠據挙擧虚虛峡峽挟挾教敎狭狹郷鄕響響尭堯暁曉勤勤謹謹区區駆驅駆駈勲勳薫薰径徑恵惠掲揭渓溪経經継繼茎莖荊荆蛍螢軽輕鶏鷄芸藝撃擊欠缺倹儉剣劍圏圈検檢権權献獻研硏県縣険險顕顯験驗厳嚴戸戶呉吳娯娛効效広廣恒恆昂昻晃晄紘綋鉱鑛高髙号號轟軣告吿国國穀穀黒黑歳歲済濟砕碎斎齋剤劑崎﨑柵栅桜櫻冊册殺殺雑雜参參惨慘桟棧産產蚕蠶賛贊残殘祉祉糸絲視視飼飼歯齒児兒爾尓辞辭湿濕実實舎舍写寫煮煮社社者者釈釋寿壽収收臭臭従從渋澁獣獸縦縱祝祝粛肅処處暑暑渚渚緒緖署署諸諸叙敍奨奬将將尚尙渉涉焼燒祥祥称稱証證乗乘剰剩壌壤嬢孃条條浄淨状狀畳疊穣穰譲讓醸釀嘱囑触觸寝寢慎愼晋晉真眞神神尽盡図圖粋粹酔醉随隨髄髓数數枢樞瀬瀨晴晴清淸精精声聲青靑静靜斉齊税稅摂攝窃竊節節説說絶絕専專戦戰浅淺潜潛繊纖践踐銭錢禅禪曽曾祖祖鼠鼡僧僧双雙壮壯層層捜搜挿揷挿插巣巢争爭痩瘦総總聡聰荘莊装裝騒騷増增憎憎臓臟蔵藏贈贈即卽属屬続續堕墮体體対對帯帶滞滯台臺滝瀧択擇沢澤琢琢鐸鈬脱脫単單嘆嘆担擔胆膽団團弾彈断斷痴癡遅遲昼晝虫蟲鋳鑄猪猪著著庁廳徴徵懲懲聴聽勅敕鎮鎭塚塚禎禎逓遞鉄鐵転轉点點伝傳兎兔都都党黨島嶋盗盜灯燈当當闘鬪闘鬭徳德独獨読讀突突届屆内內縄繩難難弐貳禰祢悩惱脳腦覇霸廃廢拝拜杯盃梅梅売賣麦麥発發髪髮抜拔繁繁飯飯晩晚蛮蠻卑卑碑碑秘祕彦彥姫姬浜濱賓賓頻頻敏敏瓶甁富冨侮侮福福払拂仏佛併倂塀塀並竝変變辺邊勉勉弁辨弁瓣弁辯舗舖歩步穂穗宝寶峰峯萌萠褒襃豊豐墨墨没沒翻飜毎每槙槇万萬満滿免免麺麵黙默餅餠戻戾野埜弥彌薬藥訳譯靖靖祐祐予豫余餘与與誉譽揺搖様樣謡謠遥遙来來頼賴乱亂欄欄蘭蘭覧覽隆隆竜龍虜虜両兩涼凉猟獵遼遼緑綠塁壘涙淚類類励勵礼禮霊靈齢齡暦曆歴歷恋戀練練蓮蓮錬鍊炉爐労勞廊廊朗朗楼樓郎郞禄祿録錄亘亙湾灣儘侭喩喻埒埓壺壷彎弯彙彚懺懴攪撹曠昿枡桝檜桧檮梼櫟檪欅﨔鬱欝濤涛灌潅滲渗濾沪瑶瑤疇畴箋䇳箏筝籠篭藪薮蘆芦蠣蛎蠅蝿諫諌賤賎邇迩靱靭頸頚鰺鯵鶯鴬凜凛熙煕俠侠俱倶剝剥吞呑啞唖噓嘘嚙噛囊嚢塡填姸妍屛屏屢屡幷并搔掻摑掴攢攅潑溌瀆涜焰焔禱祷簞箪繡繍繫繋萊莱蔣蒋﨟臈蟬蝉蠟蝋軀躯醬醤醱醗頰頬顚顛驒騨鷗鴎鹼鹸麴麹';


  // 異体字リスト 標準字（単独コード）・異体字（サロゲートペア）の順で並ぶ
  const checkString2 = '吉𠮷稽𥡴隙𨻶真眞巽巽兎兔卉卉鋏𨦇饒𩜙';

  // フォントで表示される異体字リスト  標準字（単独コード）・異体字(異体字セレクタ）の順で並ぶ
  const checkString3 = '茨茨󠄀淫淫󠄀餌餌󠄀牙牙󠄀葛葛󠄀僅僅󠄀隙隙󠄀煎煎󠄀詮詮󠄀遡遡󠄀遜遜󠄀捗捗󠄀溺溺󠄀賭賭󠄀謎謎󠄀箸箸󠄀蔽蔽󠄀蔑蔑󠄀餅餅󠄀嘲嘲󠄀逢逢󠄀芦芦󠄀飴飴󠄀溢溢󠄀鰯鰯󠄀迂迂󠄀厩厩󠄀噂噂󠄀襖襖󠄀迦迦󠄀恢恢󠄀晦晦󠄀鞄鞄󠄀翰翰󠄀翫翫󠄀徽徽󠄀祇祇󠄀汲汲󠄀笈笈󠄀卿卿󠄀饗饗󠄀喰喰󠄀櫛櫛󠄁屑屑󠄀祁祁󠄀倦倦󠄀捲捲󠄀諺諺󠄀巷巷󠄀鵠鵠󠄀甑甑󠄀榊榊󠄀薩薩󠄀鯖鯖󠄀錆錆󠄀餐餐󠄀杓杓󠄀灼灼󠄀酋酋󠄀薯薯󠄀藷藷󠄀哨哨󠄀鞘鞘󠄀蝕蝕󠄀訊訊󠄀逗逗󠄀摺摺󠄀撰撰󠄀煽煽󠄀穿穿󠄀箭箭󠄀噌噌󠄀揃揃󠄀腿腿󠄀蛸蛸󠄀辿辿󠄀樽樽󠄀歎歎󠄀註註󠄀瀦瀦󠄀槌槌󠄀鎚鎚󠄀辻辻󠄀鄭鄭󠄀擢擢󠄀兎兎󠄀堵堵󠄀屠屠󠄀瀞瀞󠄀遁遁󠄀灘灘󠄀楢楢󠄀禰禰󠄀牌牌󠄀這這󠄀秤秤󠄀叛叛󠄀挽挽󠄀樋樋󠄀稗稗󠄀逼逼󠄀謬謬󠄀豹豹󠄀廟廟󠄀瀕瀕󠄀瞥瞥󠄀篇篇󠄀娩娩󠄀庖庖󠄀蓬蓬󠄀鱒鱒󠄀迄迄󠄀儲儲󠄀籾籾󠄀鑓鑓󠄀愈愈󠄀猷猷󠄀漣漣󠄁煉煉󠄁簾簾󠄀榔榔󠄀冤冤󠄀叟叟󠄀囀囀󠄀扁扁󠄀疼疼󠄀篝篝󠄀艘艘󠄀芒芒󠄀蠅蠅󠄀訝訝󠄀騙騙󠄀鴉鴉󠄀';


  let countString = new Array(checkString.length);
  let countString2 = new Array(checkString2.length);
  let countString3 = new Array(checkString3.length);
  let newItaiji = [];
  let newItaijiMoto = [];
  let countItaiji = [];
  let countItaijiMoto = [];
  let countShikaruJ;
  let countShikaruI;
  let newItaijiAri = 0;

  document.getElementById('input').focus();

  //リアルタイムで変換する
  let tid;
  delay = 500;
  document.querySelector('#input').addEventListener('keyup', function () {
    tid && clearTimeout(tid);
    tid = setTimeout(checkCharacter, delay);
  });

  // チェックボタン押下の処理
  function checkCharacter() {
    const inputText = document.querySelector('#input').value;
    const outputText = document.querySelector('#output');
    const chuukiText = document.querySelector('#chuuki');
    outputText.textContent = "";
    chuukiText.textContent = "";
    let hyojunkaText = "";
    let bushu = 0;

    countString.fill(0);
    countString2.fill(0);
    countString3.fill(0);
    newItaiji = [];
    newItaijiMoto = [];
    countItaiji = [];
    countItaijiMoto = [];
    countShikaruJ = 0;
    countShikaruI = 0;


    // ★以下、標準的な字体を表示するループ１
    for (let i = 0; i < inputText.length; i++) {
      let c = inputText.substring(i, i + 1);
      let d = inputText.substring(i + 1, i + 2);
      let e = inputText.substring(i + 2, i + 3);

      // 単一コード文字の対応 頻度数を取得、標準字体を表示
      if (checkString.indexOf(c) > -1 && !(isItaijiSelector(d))) {
        let checkit = countString[checkString.indexOf(c)];
        countString.fill(checkit + 1, checkString.indexOf(c), checkString.indexOf(c) + 1);

        if (checkString.indexOf(c) % 2 === 1) {
          let hyojun = checkString[checkString.indexOf(c) - 1];
          c = c + "[=" + hyojun + "] ";
          hyojunkaText = hyojunkaText + c;
          continue;
        }
      }

      // 異体字セレクタ文字の対応
      if (isItaijiSelector(d)) {
        if (checkString3.indexOf(c + d + e) % 4 === 1) {
          let checkit = countString3[checkString3.indexOf(c + d + e)];
          countString3.fill(checkit + 1, checkString3.indexOf(c + d + e), checkString3.indexOf(c + d + e) + 1);
        } else {
          newItaijiAri = 1;
          if (newItaiji.indexOf(c + d + e) > -1) {
            let checkit2 = countItaiji[newItaiji.indexOf(c + d + e)];
            countItaiji.fill(checkit2 + 1, newItaiji.indexOf(c + d + e), newItaiji.indexOf(c + d + e) + 1);
          } else {
            newItaiji.push(c + d + e);
            newItaijiMoto.push(c);
            countItaiji.push(1);
            countItaijiMoto.push(0);
          }
        }

        c = c + d + e + "[=" + c + "] ";
        i = i + 2;
        hyojunkaText = hyojunkaText + c;
        continue;
      }

      // サロゲートペア文字の対応
      if (checkString2.indexOf(c) % 3 === 0) {
        let checkit = countString2[checkString2.indexOf(c)];
        countString2.fill(checkit + 1, checkString2.indexOf(c), checkString2.indexOf(c) + 1);
      }

      if (checkString2.indexOf(c + d) % 3 === 1) {
        let checkit = countString2[checkString2.indexOf(c + d)];
        countString2.fill(checkit + 1, checkString2.indexOf(c + d), checkString2.indexOf(c + d) + 1);

        let hyojun = checkString2[checkString2.indexOf(c + d) - 1];
        c = c + d + "[=" + hyojun + "] ";
        hyojunkaText = hyojunkaText + c;
        i++;
        continue;
      }

      //「𠮟」字の対応（文字数カウント）
      if (c === "\uD842" && d === "\uDF9F") {
        countShikaruJ = countShikaruJ + 1;
      }

      // 「叱」字の対応（標準字表示と文字数カウント）
      if (c === "叱") {
        c = c + "[=" + "𠮟" + "] ";
        countShikaruI = countShikaruI + 1;
      }

      // 同一コードで異体字の生じる可能性のある文字の対応（異体字セレクタ編）
      if (checkString3.indexOf(c) % 4 === 0) {

        let checkit = countString3[checkString3.indexOf(c)];
        countString3.fill(checkit + 1, checkString3.indexOf(c), checkString3.indexOf(c) + 1);

        let hyojun = checkString3[checkString3.indexOf(c) + 1] + checkString3[checkString3.indexOf(c) + 2] + checkString3[checkString3.indexOf(c) + 3];
        c = c + "[△" + hyojun + "] ";
        hyojunkaText = hyojunkaText + c;
        continue;
      }

      //CJK部首補助のチェック
      if (cjkhojoBushu(c)) {
        c = c + "[←部首] ";
      }

      //康熙部首のチェック
      if (kokiBushu(c)) {
        c = c + "[←部首] ";
      }

      hyojunkaText = hyojunkaText + c;

    }
    // ループ１終わり

    // console.log("中間生成テキスト=", hyojunkaText);



    //★以下、文字内容に合わせたCSSを追加するループ２
    for (let i = 0; i < hyojunkaText.length; i++) {
      let c = hyojunkaText.substring(i, i + 1);
      let d = hyojunkaText.substring(i + 1, i + 2);
      let e = hyojunkaText.substring(i + 2, i + 3);
      let klass = [], year;

      if (c === "\n") {
        if (d !== "\n") {
          outputText.insertAdjacentHTML('beforeend', '<br>');
        }
        continue;
      }

      if (isKanji(c)) {
        klass.push("kanji");

        // 異体字セレクタの対応
        if (isItaijiSelector(d)) {
          c = c + d + e;
          i = i + 2;
          klass.push("itaiji");
        }


        // if (year = getYearOfKyoikuKanji(c)) {
        //   let kyoiku = "<ruby>" + c + "<rt>" + year + "</rt></ruby>"
        //   outputText.insertAdjacentHTML('beforeend', kyoiku);
        //   klass.push("joyo");
        //   continue;
        // }


        if (year = getYearOfKyoikuKanji(c)) {
          let kyoiku = "<ruby>" + c + "<rt>" + year + "</rt></ruby>"
          if(year > 4 && year < 10){
            let spanElement = document.createElement("span");
            spanElement.innerHTML = kyoiku;
            spanElement.className = "kanji over4";
            outputText.appendChild(spanElement);
          }else{
            let spanElement = document.createElement("span");
            spanElement.innerHTML = kyoiku;
            outputText.appendChild(spanElement);
          }

          klass.push("joyo");
          continue;
        }



        if (isJoyoKanji(c))
          klass.push("joyo");

        if (checkString.indexOf(c) % 2 == 1)
          klass.push("itaiji");

        // 「叱」の対応
        if (c === "叱")
          klass.push("itaiji");

        // 「𠮟」の対応
        if (c === "\uD842" && d === "\uDF9F") {
          c = c + d;
          i++;
          klass.push("joyo shikaru");
        }

        //CJK部首補助のチェック
        if (cjkhojoBushu(c)) {
          bushu = bushu + 1;
          klass.push("itaiji");
        }

        //康熙部首のチェック
        if (kokiBushu(c)) {
          bushu = bushu + 1;
          klass.push("itaiji");
        }

        // サロゲートペア文字の対応
        if (isSurrogatePair(c)) {
          if (checkString2.indexOf(c + d) % 3 === 1) {
            klass.push("itaiji");
          }
          c = c + d;
          i++;
        }

      }

      let spanElement = document.createElement("span");
      spanElement.textContent = c;
      let classList = klass.join(" ");
      if (classList) {
        spanElement.className = classList;
      }
      outputText.appendChild(spanElement);

      // console.log("classList",spanElement,classList);
    };

    // ループ２終わり 

    //文字列の最後に教育漢字があると、ルビ付きでコピペできない現象を回避
    outputText.insertAdjacentHTML('beforeend', "\u200B\u000A");  //ゼロ幅スペース＋改行

    //部首の文字コード混入の場合に注記を入れる
    if (bushu > 0) {
      chuukiText.insertAdjacentHTML('afterbegin', "【注意】テキストの中に漢字の部首の文字コードが" + bushu + "字混じっています。確認してください。<hr>");
    }

    //リスト外の異体字セレクタがあった際、基盤文字をカウントする
    if (newItaijiAri > 0) {
      for (let i = 0; i < inputText.length; i++) {
        let c = inputText.substring(i, i + 1);
        let d = inputText.substring(i + 1, i + 2);
        if (newItaijiMoto.indexOf(c) > -1 && !(isItaijiSelector(d))) {
          let checkit = countItaijiMoto[newItaijiMoto.indexOf(c)];
          countItaijiMoto.fill(checkit + 1, newItaijiMoto.indexOf(c), newItaijiMoto.indexOf(c) + 1);
        }
      }
    }

  } //funchtion checkCharacter() 終わり



  // クリアボタン押下の処理
  document.querySelector('#clearButton').addEventListener('click', () => {
    location.reload();
  });

  //スマホ操作時のナビゲーション
  document.querySelector('#hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.sp-nav');
    nav.classList.toggle('toggle');
  });

  document.querySelector('.close').addEventListener('click', () => {
    const nav = document.querySelector('.sp-nav');
    nav.classList.toggle('toggle');
  });

  //画像の拡大処理
  document.querySelector('.zoom').addEventListener('click', () => {
    zooming.setAttribute('src', "img/kanji2.png");
    zoomback.style.display = "flex";
  });

  document.querySelector('#zoomback').addEventListener('click', () => {
    const zoomback = document.getElementById("zoomback");
    zoomback.style.display = "none";
  });

  //クレジット
  document.querySelector('.qqq').addEventListener('click', () => {
    const qualityCenter = document.getElementById("qualityCenter");
    qualityCenter.style.display = "flex";
  });

  document.querySelector('#qualityCenter').addEventListener('click', () => {
    const qualityCenter = document.getElementById("qualityCenter");
    qualityCenter.style.display = "none";
  });

  //以下、文字チェック関数の定義
  function isKanji(c) {
    return /^[\u2E80-\u2EF3\u2F00-\u2FD5\u3400-\u9FFF\uD800-\uDFFF\uF900-\uFAEF]+$/.test(c);
  }

  // 常用漢字表から「𠮟」を除き「叱」を入れる
  function isJoyoKanji(c) {
    return /^[亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育一壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊牙瓦我画芽賀雅餓介回灰会快戒改怪拐悔海界皆械絵開階塊楷解潰壊懐諧貝外劾害崖涯街慨蓋該概骸垣柿各角拡革格核殻郭覚較隔閣確獲嚇穫学岳楽額顎掛潟括活喝渇割葛滑褐轄且株釜鎌刈干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑丸含岸岩玩眼頑顔願企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎技宜偽欺義疑儀戯擬犠議菊吉喫詰却客脚逆虐九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮牛去巨居拒拠挙虚許距魚御漁凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚仰暁業凝曲局極玉巾斤均近金菌勤琴筋僅禁緊錦謹襟吟銀区句苦駆具惧愚空偶遇隅串屈掘窟熊繰君訓勲薫軍郡群兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏芸迎鯨隙劇撃激桁欠穴血決結傑潔月犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸元幻玄言弦限原現舷減源厳己戸古呼固股虎孤弧故枯個庫湖雇誇鼓錮顧五互午呉後娯悟碁語誤護口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞号合拷剛傲豪克告谷刻国黒穀酷獄骨駒込頃今困昆恨根婚混痕紺魂墾懇左佐沙査砂唆差詐鎖座挫才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼在材剤財罪崎作削昨柵索策酢搾錯咲冊札刷刹拶殺察撮擦雑皿三山参桟蚕惨産傘散算酸賛残斬暫士子支止氏仕史司四市矢旨死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示字寺次耳自似児事侍治持時滋慈辞磁餌璽鹿式識軸七失室疾執湿嫉漆質実芝写社車舎者射捨赦斜煮遮謝邪蛇尺借酌釈爵若弱寂手主守朱取狩首殊珠酒腫種趣寿受呪授需儒樹収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲十汁充住柔重従渋銃獣縦叔祝宿淑粛縮塾熟出述術俊春瞬旬巡盾准殉純循順準潤遵処初所書庶暑署緒諸女如助序叙徐除小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸色拭食植殖飾触嘱織職辱尻心申伸臣芯身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親人刃仁尽迅甚陣尋腎須図水吹垂炊帥粋衰推酔遂睡穂随髄枢崇数据杉裾寸瀬是井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒税夕斥石赤昔析席脊隻惜戚責跡積績籍切折拙窃接設雪摂節説舌絶千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭潜線遷選薦繊鮮全前善然禅漸膳繕狙阻祖租素措粗組疎訴塑遡礎双壮早争走奏相荘草送倉捜挿桑巣掃曹曽爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻造像増憎蔵贈臓即束足促則息捉速側測俗族属賊続卒率存村孫尊損遜他多汰打妥唾堕惰駄太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台第題滝宅択沢卓拓託濯諾濁但達脱奪棚誰丹旦担単炭胆探淡短嘆端綻誕鍛団男段断弾暖談壇地池知値恥致遅痴稚置緻竹畜逐蓄築秩窒茶着嫡中仲虫沖宙忠抽注昼柱衷酎鋳駐著貯丁弔庁兆町長挑帳張彫眺釣頂鳥朝貼超腸跳徴嘲潮澄調聴懲直勅捗沈珍朕陳賃鎮追椎墜通痛塚漬坪爪鶴低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦泥的笛摘滴適敵溺迭哲鉄徹撤天典店点展添転塡田伝殿電斗吐妬徒途都渡塗賭土奴努度怒刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰同洞胴動堂童道働銅導瞳峠匿特得督徳篤毒独読栃凸突届屯豚頓貪鈍曇丼那奈内梨謎鍋南軟難二尼弐匂肉虹日入乳尿任妊忍認寧熱年念捻粘燃悩納能脳農濃把波派破覇馬婆罵拝杯背肺俳配排敗廃輩売倍梅培陪媒買賠白伯拍泊迫剝舶博薄麦漠縛爆箱箸畑肌八鉢発髪伐抜罰閥反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩晩番蛮盤比皮妃否批彼披肥非卑飛疲秘被悲扉費碑罷避尾眉美備微鼻膝肘匹必泌筆姫百氷表俵票評漂標苗秒病描猫品浜貧賓頻敏瓶不夫父付布扶府怖阜附訃負赴浮婦符富普腐敷膚賦譜侮武部舞封風伏服副幅復福腹複覆払沸仏物粉紛雰噴墳憤奮分文聞丙平兵併並柄陛閉塀幣弊蔽餅米壁璧癖別蔑片辺返変偏遍編弁便勉歩保哺捕補舗母募墓慕暮簿方包芳邦奉宝抱放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀頰北木朴牧睦僕墨撲没勃堀本奔翻凡盆麻摩磨魔毎妹枚昧埋幕膜枕又末抹万満慢漫未味魅岬密蜜脈妙民眠矛務無夢霧娘名命明迷冥盟銘鳴滅免面綿麺茂模毛妄盲耗猛網目黙門紋問冶夜野弥厄役約訳薬躍闇由油喩愉諭輸癒唯友有勇幽悠郵湧猶裕遊雄誘憂融優与予余誉預幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜抑沃浴欲翌翼拉裸羅来雷頼絡落酪辣乱卵覧濫藍欄吏利里理痢裏履璃離陸立律慄略柳流留竜粒隆硫侶旅虜慮了両良料涼猟陵量僚領寮療瞭糧力緑林厘倫輪隣臨瑠涙累塁類令礼冷励戻例鈴零霊隷齢麗暦歴列劣烈裂恋連廉練錬呂炉賂路露老労弄郎朗浪廊楼漏籠六録麓論和話賄脇惑枠湾腕叱]+$/.test(c);
  }

  //異体字セレクタをチェック
  function isItaijiSelector(c) {
    return /^[\uFE00-\uFE0F\uDB40]+$/.test(c);
  }

  //CJK部首補助のチェック
  function cjkhojoBushu(c) {
    return /^[\u2E80-\u2EFF]+$/.test(c);
  }

  //康熙部首のチェック
  function kokiBushu(c) {
    return /^[\u2F00-\u2FDF]+$/.test(c);
  }

  //サロゲートペアをチェック
  function isSurrogatePair(c) {
    return /^[\uD800-\uDBFF]+$/.test(c);
  }

  function getYearOfKyoikuKanji(c) {
    if (/^[一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六]+$/.test(c)) { return 1; }

    else if (/^[引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話]+$/.test(c)) { return 2; }

    else if (/^[悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和]+$/.test(c)) { return 3; }

    else if (/^[愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録]+$/.test(c)) { return 4; }

    else if (/^[洗網磯枝飼肩枯茎粉潮吸砂卵敵苗似煮肺幹胸戻]+$/.test(c)) { return 99; }


    else if (/^[圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志師資示識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴]+$/.test(c)) { return 5; }

    else if (/^[胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑供郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸賃痛展討党糖届難乳認納脳派拝背俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱覧裏律臨朗論]+$/.test(c)) { return 6; 

    }
  }

  //表を表示する
  document.querySelector('#listup').addEventListener('click', () => {
    const allList = document.getElementById("letterList");
    const allTable = document.createElement("table");
    const alltbody = document.createElement("tbody");
    const alltr1 = document.createElement("tr");
    const alltr2 = document.createElement("tr");
    const allth1 = document.createElement("th");
    const allth2 = document.createElement("th");
    const allth3 = document.createElement("th");
    const allth4 = document.createElement("th");
    const alltd1 = document.createElement("td");
    const alltd2 = document.createElement("td");
    const alltd3 = document.createElement("td");
    const alltd4 = document.createElement("td");

    allList.textContent = "";
    allTable.textContent = "";
    allth1.textContent = "標準的な字体";
    allth2.textContent = "出現数";
    allth3.textContent = "標準的でない字体";
    allth4.textContent = "出現数";

    alltr1.appendChild(allth1);
    alltr1.appendChild(allth2);
    alltr1.appendChild(allth3);
    alltr1.appendChild(allth4);

    alltbody.appendChild(alltr1);
    allTable.appendChild(alltbody);
    allList.appendChild(allTable);

    //𠮟と叱の対応
    if (countShikaruJ + countShikaruI > 0) {
      alltd1.textContent = "𠮟";
      alltd2.textContent = countShikaruJ;
      alltd3.textContent = "叱";
      alltd4.textContent = countShikaruI;

      alltr2.appendChild(alltd1);
      alltr2.appendChild(alltd2);
      alltr2.appendChild(alltd3);
      alltr2.appendChild(alltd4);

      alltbody.appendChild(alltr2);
      allTable.appendChild(alltbody);
    }

    //2行目以降を入れる
    for (let i = 0; i < checkString.length; i = i + 2) {
      // if (countString.at(i) + countString.at(i + 1) > 0) {
      if (countString.at(i + 1) > 0) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkString.at(i);
        row.appendChild(cellText1);

        //第2列
        cellText2.innerHTML = countString.at(i);
        row.appendChild(cellText2);

        //第3列
        cellText3.innerHTML = checkString.at(i + 1);
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countString.at(i + 1);

        row.appendChild(cellText4);
        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //サロゲートペア対応
    for (let i = 0; i < checkString2.length; i = i + 3) {
      // if (countString2.at(i) + countString2.at(i + 1) > 0) {
      if (countString2.at(i + 1) > 0) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkString2.at(i);
        row.appendChild(cellText1);

        //第2列
        cellText2.innerHTML = countString2.at(i);
        row.appendChild(cellText2);

        //第3列
        let salomoji = checkString2.substring(i + 1, i + 3);
        cellText3.innerHTML = salomoji;
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countString2.at(i + 1);

        row.appendChild(cellText4);
        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //リスト内の異体字セレクタ対応
    for (let i = 0; i < checkString3.length; i = i + 4) {
      // if (countString3.at(i) + countString3.at(i + 1) > 0) {
      if (countString3.at(i + 1) > 0) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkString3.at(i);
        row.appendChild(cellText1);

        //第2列
        cellText2.innerHTML = countString3.at(i);
        row.appendChild(cellText2);

        //第3列
        let selectmoji = checkString3.substring(i + 1, i + 4);
        cellText3.innerHTML = selectmoji;
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countString3.at(i + 1);

        row.appendChild(cellText4);
        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //リスト外の異体字セレクタ対応
    for (let i = 0; i < newItaiji.length; i++) {
      const row = document.createElement("tr");
      const cellText1 = document.createElement("td");
      const cellText2 = document.createElement("td");
      const cellText3 = document.createElement("td");
      const cellText4 = document.createElement("td");

      //第1列
      cellText1.innerHTML = newItaijiMoto.at(i);
      row.appendChild(cellText1);

      //第2列
      cellText2.innerHTML = countItaijiMoto.at(i);
      row.appendChild(cellText2);

      //第3列
      cellText3.innerHTML = newItaiji.at(i);
      row.appendChild(cellText3);

      //第4列
      cellText4.innerHTML = countItaiji.at(i);

      row.appendChild(cellText4);
      alltbody.appendChild(row);
      allTable.appendChild(alltbody);
    }

    //並べ替え 第1列でソートする
    firstsortRows();
    function firstsortRows() {
      const table = document.querySelector("table");
      const records = [];
      for (let i = 1; i < table.rows.length; i++) {
        const record = {};
        record.row = table.rows[i];
        record.key = table.rows[i].cells[0].textContent;
        records.push(record);
      }

      records.sort(compareKeys);

      for (let i = 0; i < records.length; i++) {
        table.appendChild(records[i].row);
      }
    }

    function compareKeys(a, b) {
      if (a.key < b.key) return -1;
      if (a.key > b.key) return 1;
      return 0;
    }

    // display: noneを削除
    let elementEndOfTable = document.getElementById('endOfTable');
    let elementChukiTable = document.getElementById('chukiTable');
    elementEndOfTable.style.display = 'block';
    elementChukiTable.style.display = 'block';

    // console.log("最終", allList);
  });

}