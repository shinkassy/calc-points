function func() {
    var tokyo = 52;
    var kashima = 51;
    var yokohama = 48;
    var kawasaki = 44;
    var hiroshima = 43;
    var cosaka = 43;
    var sapporo = 39;
    var ooita = 39;
    var kobe = 32;
    var simizu = 32;
    var nagoya = 31;
    var gosaka = 31;
    var shonan = 31;
    var sendai =31;
    var urawa = 31;
    var tosu = 27;
    var matsumoto = 24;
    var iwata = 18;

    var tokyowins = [0, 0, 0];
    var kashimawins = [0, 0, 0];
    var yokohamawins = [0, 0, 0];
    var kawasakiwins = [0, 0, 0];
    var hiroshimawins = [0, 0, 0];
    var cosakawins = [0, 0, 0];
    var sapporowins = [0, 0, 0];
    var ooitawins = [0, 0, 0];
    var kobewins = [0, 0, 0];
    var simizuwins = [0, 0, 0];
    var nagoyawins = [0, 0, 0];
    var gosakawins = [0, 0, 0];
    var shonanwins = [0, 0, 0];
    var sendaiwins = [0, 0, 0];
    var urawawins = [0, 0, 0];
    var tosuwins = [0, 0, 0];
    var matsumotowins = [0, 0, 0];
    var iwatawins = [0, 0, 0];

    var tokyoary = [tokyo];
    var kashimaary = [kashima];
    var yokohamaary = [yokohama];
    var kawasakiary = [kawasaki];
    var hiroshimaary = [hiroshima];
    var cosakaary = [cosaka];
    var sapporoary = [sapporo];
    var ooitaary = [ooita];
    var kobeary = [kobe];
    var simizuary = [simizu];
    var nagoyaary = [nagoya];
    var gosakaary = [gosaka];
    var shonanary = [shonan];
    var sendaiary = [sendai];
    var urawaary = [urawa];
    var tosuary = [tosu];
    var matsumotoary = [matsumoto];
    var iwataary = [iwata];


    //27節
    var element = document.getElementById( "calctable" ) ;
    // form要素内のラジオボタングループ(name="hoge")を取得
    var radioNodeList = element.m271 ;
    // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
    var a = radioNodeList.value ;
    cosaka = cosaka + pointh(a);
    gosaka = gosaka + pointa(a);
    //cosakawins = win(pointh(a),cosakawins);
    //gosakawins = win(pointa(a),gosakawins);

    radioNodeList = element.m272 ;
    a = radioNodeList.value ;
    tosu = tosu + pointh(a);
    urawa = urawa + pointa(a);
    //tosuwins = win(pointh(a),tosuwins);
    //urawawins = win(pointa(a),urawawins);

    radioNodeList = element.m273 ;
    a = radioNodeList.value ;
    kashima = kashima + pointh(a);
    sapporo = sapporo + pointa(a);
    //kashimawins = win(pointh(a),kashimawins);
    //sapporowins = win(pointa(a),sapporowins);

    radioNodeList = element.m274 ;
    a = radioNodeList.value ;
    kawasaki = kawasaki + pointh(a);
    kobe = kobe + pointa(a);
    //kawasakiwins = win(pointh(a),kawasakiwins);
    //kobewins = win(pointa(a),kobewins);

    radioNodeList = element.m275 ;
    a = radioNodeList.value ;
    ooita = ooita + pointh(a);
    iwata = iwata + pointa(a);

    radioNodeList = element.m276 ;
    a = radioNodeList.value ;
    sendai = sendai + pointh(a);
    yokohama = yokohama + pointa(a);
    radioNodeList = element.m277 ;
    a = radioNodeList.value ;
    hiroshima = hiroshima + pointh(a);
    nagoya = nagoya + pointa(a);
    radioNodeList = element.m278 ;
    a = radioNodeList.value ;
    matsumoto = matsumoto + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m279 ;
    a = radioNodeList.value ;
    shonan = shonan + pointh(a);
    simizu = simizu + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);

    //28節
    radioNodeList = element.m281 ;
    a = radioNodeList.value ;
    gosaka = gosaka + pointh(a);
    sapporo = sapporo + pointa(a);
    radioNodeList = element.m282 ;
    a = radioNodeList.value ;
    iwata = iwata + pointh(a);
    yokohama = yokohama + pointa(a);
    radioNodeList = element.m283 ;
    a = radioNodeList.value ;
    tosu = tosu + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m284 ;
    a = radioNodeList.value ;
    nagoya = nagoya + pointh(a);
    ooita = ooita + pointa(a);
    radioNodeList = element.m285 ;
    a = radioNodeList.value ;
    sendai = sendai + pointh(a);
    matsumoto = matsumoto + pointa(a);
    radioNodeList = element.m286 ;
    a = radioNodeList.value ;
    hiroshima = hiroshima + pointh(a);
    kobe = kobe + pointa(a);
    radioNodeList = element.m287 ;
    a = radioNodeList.value ;
    cosaka = cosaka + pointh(a);
    kashima = kashima + pointa(a);
    radioNodeList = element.m288 ;
    a = radioNodeList.value ;
    urawa = urawa + pointh(a);
    simizu = simizu + pointa(a);
    radioNodeList = element.m289 ;
    a = radioNodeList.value ;
    shonan = shonan + pointh(a);
    kawasaki = kawasaki + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);

    //29節
    radioNodeList = element.m291 ;
    a = radioNodeList.value ;
    matsumoto = matsumoto + pointh(a);
    kashima = kashima + pointa(a);
    radioNodeList = element.m292 ;
    a = radioNodeList.value ;
    sapporo = sapporo + pointh(a);
    cosaka = cosaka + pointa(a);
    radioNodeList = element.m293 ;
    a = radioNodeList.value ;
    urawa = urawa + pointh(a);
    ooita = ooita + pointa(a);
    radioNodeList = element.m294 ;
    a = radioNodeList.value ;
    kobe = kobe + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m295 ;
    a = radioNodeList.value ;
    simizu = simizu + pointh(a);
    hiroshima = hiroshima + pointa(a);
    radioNodeList = element.m296 ;
    a = radioNodeList.value ;
    nagoya = nagoya + pointh(a);
    sendai = sendai + pointa(a);
    radioNodeList = element.m297 ;
    a = radioNodeList.value ;
    yokohama = yokohama + pointh(a);
    shonan = shonan + pointa(a);
    radioNodeList = element.m298 ;
    a = radioNodeList.value ;
    gosaka = gosaka + pointh(a);
    kawasaki = kawasaki + pointa(a);
    radioNodeList = element.m299 ;
    a = radioNodeList.value ;
    iwata = iwata + pointh(a);
    tosu = tosu + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    //30節
    radioNodeList = element.m301 ;
    a = radioNodeList.value ;
    kobe = kobe + pointh(a);
    sendai = sendai + pointa(a);
    radioNodeList = element.m302 ;
    a = radioNodeList.value ;
    tosu = tosu + pointh(a);
    yokohama = yokohama + pointa(a);
    radioNodeList = element.m303 ;
    a = radioNodeList.value ;
    sapporo = sapporo + pointh(a);
    nagoya = nagoya + pointa(a);
    radioNodeList = element.m304 ;
    a = radioNodeList.value ;
    simizu = simizu + pointh(a);
    iwata = iwata + pointa(a);
    radioNodeList = element.m305 ;
    a = radioNodeList.value ;
    cosaka = cosaka + pointh(a);
    matsumoto = matsumoto + pointa(a);
    radioNodeList = element.m306 ;
    a = radioNodeList.value ;
    kashima = kashima + pointh(a);
    urawa = urawa + pointa(a);
    radioNodeList = element.m307 ;
    a = radioNodeList.value ;
    kawasaki = kawasaki + pointh(a);
    hiroshima = hiroshima + pointa(a);
    radioNodeList = element.m308 ;
    a = radioNodeList.value ;
    ooita = ooita + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m309 ;
    a = radioNodeList.value ;
    shonan = shonan + pointh(a);
    gosaka = gosaka + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    //31節
    radioNodeList = element.m311 ;
    a = radioNodeList.value ;
    kashima = kashima + pointh(a);
    kawasaki = kawasaki + pointa(a);
    radioNodeList = element.m312 ;
    a = radioNodeList.value ;
    hiroshima = hiroshima + pointh(a);
    urawa = urawa + pointa(a);
    radioNodeList = element.m313 ;
    a = radioNodeList.value ;
    nagoya = nagoya + pointh(a);
    kobe = kobe + pointa(a);
    radioNodeList = element.m314 ;
    a = radioNodeList.value ;
    yokohama = yokohama + pointh(a);
    sapporo = sapporo + pointa(a);
    radioNodeList = element.m315 ;
    a = radioNodeList.value ;
    iwata = iwata + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m316 ;
    a = radioNodeList.value ;
    cosaka = cosaka + pointh(a);
    shonan = shonan + pointa(a);
    radioNodeList = element.m317 ;
    a = radioNodeList.value ;
    sendai = sendai + pointh(a);
    simizu = simizu + pointa(a);
    radioNodeList = element.m318 ;
    a = radioNodeList.value ;
    ooita = ooita + pointh(a);
    gosaka = gosaka + pointa(a);
    radioNodeList = element.m319 ;
    a = radioNodeList.value ;
    tosu = tosu + pointh(a);
    matsumoto = matsumoto + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    //32節
    radioNodeList = element.m321 ;
    a = radioNodeList.value ;
    kobe = kobe + pointh(a);
    cosaka = cosaka + pointa(a);
    radioNodeList = element.m322 ;
    a = radioNodeList.value ;
    simizu = simizu + pointh(a);
    ooita = ooita + pointa(a);
    radioNodeList = element.m323 ;
    a = radioNodeList.value ;
    urawa = urawa + pointh(a);
    kawasaki = kawasaki + pointa(a);
    radioNodeList = element.m324 ;
    a = radioNodeList.value ;
    hiroshima = hiroshima + pointh(a);
    kashima = kashima + pointa(a);
    radioNodeList = element.m325 ;
    a = radioNodeList.value ;
    nagoya = nagoya + pointh(a);
    tosu = tosu + pointa(a);
    radioNodeList = element.m326 ;
    a = radioNodeList.value ;
    matsumoto = matsumoto + pointh(a);
    yokohama = yokohama + pointa(a);
    radioNodeList = element.m327 ;
    a = radioNodeList.value ;
    sapporo = sapporo + pointh(a);
    iwata = iwata + pointa(a);
    radioNodeList = element.m328 ;
    a = radioNodeList.value ;
    tokyo = tokyo + pointh(a);
    shonan = shonan + pointa(a);
    radioNodeList = element.m329 ;
    a = radioNodeList.value ;
    gosaka = gosaka + pointh(a);
    sendai = sendai + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    //33節
    radioNodeList = element.m331 ;
    a = radioNodeList.value ;
    cosaka = cosaka + pointh(a);
    simizu = simizu + pointa(a);
    radioNodeList = element.m332 ;
    a = radioNodeList.value ;
    tokyo = tokyo + pointh(a);
    urawa = urawa + pointa(a);
    radioNodeList = element.m333 ;
    a = radioNodeList.value ;
    kashima = kashima + pointh(a);
    kobe = kobe + pointa(a);
    radioNodeList = element.m334 ;
    a = radioNodeList.value ;
    kawasaki = kawasaki + pointh(a);
    yokohama = yokohama + pointa(a);
    radioNodeList = element.m335 ;
    a = radioNodeList.value ;
    iwata = iwata + pointh(a);
    nagoya = nagoya + pointa(a);
    radioNodeList = element.m336 ;
    a = radioNodeList.value ;
    shonan = shonan + pointh(a);
    hiroshima = hiroshima + pointa(a);
    radioNodeList = element.m337 ;
    a = radioNodeList.value ;
    sendai = sendai + pointh(a);
    ooita = ooita + pointa(a);
    radioNodeList = element.m338 ;
    a = radioNodeList.value ;
    gosaka = gosaka + pointh(a);
    matsumoto = matsumoto + pointa(a);
    radioNodeList = element.m339 ;
    a = radioNodeList.value ;
    tosu = tosu + pointh(a);
    sapporo = sapporo + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    //34節
    radioNodeList = element.m341 ;
    a = radioNodeList.value ;
    sapporo = sapporo + pointh(a);
    kawasaki = kawasaki + pointa(a);
    radioNodeList = element.m342 ;
    a = radioNodeList.value ;
    nagoya = nagoya + pointh(a);
    kashima = kashima + pointa(a);
    radioNodeList = element.m343 ;
    a = radioNodeList.value ;
    urawa = urawa + pointh(a);
    gosaka = gosaka + pointa(a);
    radioNodeList = element.m344 ;
    a = radioNodeList.value ;
    ooita = ooita + pointh(a);
    cosaka = cosaka + pointa(a);
    radioNodeList = element.m345 ;
    a = radioNodeList.value ;
    simizu = simizu + pointh(a);
    tosu = tosu + pointa(a);
    radioNodeList = element.m346 ;
    a = radioNodeList.value ;
    hiroshima = hiroshima + pointh(a);
    sendai = sendai + pointa(a);
    radioNodeList = element.m347 ;
    a = radioNodeList.value ;
    kobe = kobe + pointh(a);
    iwata = iwata + pointa(a);
    radioNodeList = element.m348 ;
    a = radioNodeList.value ;
    yokohama = yokohama + pointh(a);
    tokyo = tokyo + pointa(a);
    radioNodeList = element.m349 ;
    a = radioNodeList.value ;
    matsumoto = matsumoto + pointh(a);
    shonan = shonan + pointa(a);

    tokyoary.push(tokyo);
    kashimaary.push(kashima);
    yokohamaary.push(yokohama);
    kawasakiary.push(kawasaki);
    hiroshimaary.push(hiroshima);
    cosakaary.push(cosaka);
    sapporoary.push(sapporo);
    ooitaary.push(ooita);
    kobeary.push(kobe);
    simizuary.push(simizu);
    nagoyaary.push(nagoya);
    gosakaary.push(gosaka);
    shonanary.push(shonan);
    sendaiary.push(sendai);
    urawaary.push(urawa);
    tosuary.push(tosu);
    matsumotoary.push(matsumoto);
    iwataary.push(iwata);


    var pointtable =[
        {name: 'FC東京', point: tokyo},
        {name: '鹿島', point: kashima},
        {name: '横浜FM', point: yokohama},
        {name: '川崎', point: kawasaki},
        {name: '広島', point: hiroshima},
        {name: 'C大阪', point: cosaka},
        {name: '札幌', point: sapporo},
        {name: '大分', point: ooita},
        {name: '神戸', point: kobe},
        {name: '清水', point: simizu},
        {name: '名古屋', point: nagoya},
        {name: 'G大阪', point: gosaka},
        {name: '湘南', point: shonan},
        {name: '仙台', point: sendai},
        {name: '浦和', point: urawa},
        {name: '鳥栖', point: tosu},
        {name: '松本', point: matsumoto},
        {name: '磐田', point: iwata}
    ];
    pointtable.sort(function(a, b) {
    if (a.point < b.point) {
        return 1;
    } else {
        return -1;
    }
    });
    var tablehtml = "<tr><th>順位</th><th>チーム</th><th>勝点</th></tr>";
    for (i=0;i < pointtable.length; i++){
        var rank = i + 1;
        tablehtml = tablehtml + "<tr><th>"+ rank +"</th><td>" + pointtable[i]['name'] + "</td><td>" + pointtable[i]['point'] + "</td></tr>";
    }
    document.getElementById("table").innerHTML = tablehtml


    var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["26節", "27節", "28節", "29節", "30節", "31節", "32節", "33節", "最終節"],
                    datasets: [{
                        label: 'FC東京',
                        data:  tokyoary,
                        backgroundColor: 'rgba(0, 50, 225, 0.3)',
                        borderColor: 'rgba(0, 50, 225, 0.8)',
                        lineTension: 0,
                        fill: false
                    }, {
                        label: '鹿島',
                        data:  kashimaary,
                        backgroundColor: 'rgba(170, 30, 0, 0.3)',
                        borderColor: 'rgba(170, 30, 0, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '横浜FM',
                        data:  yokohamaary,
                        backgroundColor: 'rgba(0, 0, 255, 0.3)',
                        borderColor: 'rgba(0, 0, 256, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '川崎',
                        data:  kawasakiary,
                        backgroundColor: 'rgba(0, 241, 249, 0.3)',
                        borderColor: 'rgba(0, 241, 249, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: 'C大阪',
                        data:  cosakaary,
                        backgroundColor: 'rgba(255, 124, 255, 0.3)',
                        borderColor: 'rgba(255, 124, 255, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '広島',
                        data:  hiroshimaary,
                        backgroundColor: 'rgba(164, 0, 252, 0.3)',
                        borderColor: 'rgba(164, 0, 252, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '大分',
                        data:  ooitaary,
                        backgroundColor: 'rgba(17, 77, 255, 0.3)',
                        borderColor: 'rgba(17, 77, 255, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '札幌',
                        data:  sapporoary,
                        backgroundColor: 'rgba(216, 15, 18, 0.3)',
                        borderColor: 'rgba(216, 15, 18, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '清水',
                        data:  simizuary,
                        backgroundColor: 'rgba(255, 160, 17, 0.3)',
                        borderColor: 'rgba(255, 160, 17, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '神戸',
                        data:  kobeary,
                        backgroundColor: 'rgba(160, 0, 45, 0.3)',
                        borderColor: 'rgba(160, 0, 45, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '浦和',
                        data:  urawaary,
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',
                        borderColor: 'rgba(255, 0, 0, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '仙台',
                        data:  sendaiary,
                        backgroundColor: 'rgba(239, 231, 0, 0.3)',
                        borderColor: 'rgba(239, 231, 0, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '湘南',
                        data:  shonanary,
                        backgroundColor: 'rgba(0, 242, 68, 0.3)',
                        borderColor: 'rgba(0, 242, 68, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: 'G大阪',
                        data:  gosakaary,
                        backgroundColor: 'rgba(0, 18, 140, 0.3)',
                        borderColor: 'rgba(0, 18, 140, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '名古屋',
                        data:  nagoyaary,
                        backgroundColor: 'rgba(219, 58, 0, 0.3)',
                        borderColor: 'rgba(219, 58, 0, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '鳥栖',
                        data: tosuary,
                        backgroundColor: 'rgba(24, 242, 249, 0.3)',
                        borderColor: 'rgba(24, 242, 249, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '松本',
                        data:  matsumotoary,
                        backgroundColor: 'rgba(0, 127, 0, 0.3)',
                        borderColor: 'rgba(0, 127, 0, 0.8)',
                        lineTension: 0,
                        fill: false
                        }, {
                        label: '磐田',
                        data:  iwataary,
                        backgroundColor: 'rgba(134, 223, 239, 0.3)',
                        borderColor: 'rgba(134, 223, 239, 0.8)',
                        lineTension: 0,
                        fill: false
                    }]
            },
            options: {}
        });
}


function pointh(res){
    if (res == ""){
        return 0;
    }else if(res == 0){
        return 1;
    }else if(res == 1){
        return 3;
    }else if(res == 2){
        return 0;
    }
}
function pointa(res){
    if (res == ""){
        return 0;
    }else if(res == 0){
        return 1;
    }else if(res == 1){
        return 0;
    }else if(res == 2){
        return 3;
    }
}

function win(res,wins){
    if(res == 3){
        wins[0] = wins[0] + 1;
    }else if(res == 1){
        wins[1] = wins[1] + 1;
    }else if(res == 0){
        wins[2] = wins[2] + 1;
    }
    return wins;
}

function closetable(){
    document.getElementById("table").innerHTML = "";
}
