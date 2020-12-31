---
layout: post
title: 2020年振り返り
categories:
- daily
tags:
- 振り返り
---

2020年も振り返っていこうと思います。

# まずは去年の抱負の振り返り

> - 「次の機会」でよりスピードを早めるような動きをしていきたい
> - "個"ではなく"グループ"、"会社"、"将来"を考えてそれを見据えて行動していきたい

特に意識してなかったけど、去年よりはこういうことができた気がする。

> - 設計については引き続き、引き出しをどんどん引き出していきたい

できた。

> - もっとアウトプットして言語化の練習をしていきたい
>   - 言語化が苦手。
> - 自分の考えを表現できるようにしていきたい
>   - これも苦手なので、どうすれば相手に伝わるのか、については研究をしていきたい。具体的には本を読んで人間について理解を深めようとおもいます。

無理だった。これは来年も引き続き。

> - 知識の幅を、エンジニアに関係なく広げていきたい
>   - 読書をして、考察の種をどんどん集めていきたい。

できた。あとでまとめる。

> - 2020年も2019年と同じように旅行にいっぱい行く。

コロナ。悲しい。
けど、ある程度は行けたし、コロナならでは「初めての挑戦」みたいなことはたくさんできた。

# 仕事
## クックパッド株式会社

入社して2年目になりました。来年はもう3年目か…という感じですね。なんかこの会社でやり遂げたか?っていわれると何もやり遂げてないし、何か特技を身につけたわけでもないな…と思っていて若干苦しい。  
去年に引き続き技術的な成長に重点を置きつつ、少しずつ分析や企画立案など俗にサービス開発と言われる仕事もできるようにスキルを広げていこうと思って動きました。  
技術的な面では、去年までにつけた基礎体力を基にして、大きな核となる機能を任せらることも多くなり、設計や実装の経験が得られたのでこの調子で自分の引き出しを広げていければいいかなという感じです。まだまだ完璧ではないけど一つの考えに固執しないで、まだまだ吸収していければいいかなーと思います。毎回、その場で何がベストなのか、というのを考えつつフィードバックをもらって修正していければいいかな。また、1つ新しいトピックとしてはiOS開発にも手を出し始めました。  
サービス開発の面ではあんまり自分の思ったようには行かなかったかなという感想。ある程度流行っては見たものの、あんまり形にならず、勢いにも乗れず中途半端な感じになってしまいました。来年は軸足をサービス開発のほうにおいて動こうかなと思っています。また特技を身につけるのが先になる気がするけど。  

恒例、箇条書きにまとめると以下のような点で成長できたとおもいます。  

- AWS Elemental系の各種サービスを用いた機能開発やキャッチアップ
  - 部署で利用している MediaLive / MediaConvert / MediaStore / MediaTailor に対して1つ以上の機能開発を行うことができました。
  - 特に MediaLive と MediaConvert についてはサービス・会社的にも大きく貢献ができたんじゃないかなと自負できる改善を施すことができ個人的には満足です。
    - MediaPackage については検討はしているもののまだ導入はできていません。
  - これらのサービスについてはアップデートのキャッチアップ会を開催したり、アップデートの通知の仕組みを導入したりと最新情報のキャッチアップも意識的に行えるチームを作るように動くことができました。
- 課金を伴う機能の設計・開発
  - Liveコマースの機能や定期課金を伴う機能をイチから設計・実装を担当し、サービスに組み込むことができました。
  - 課金プラットフォーム自体は会社内に存在しているのでそれを利用する形でしたが、障害なくリリースできました。
- iOS開発
  - 機会があったので、サーバーサイドエンジニアとしての視野を広げるという目的 (と、モバイルアプリに興味があったの) でiOS開発にもがっつりjoinしました。
  - コアではない箇所でのヘルプ的な立ち位置でしたが、RxSwiftを使った開発や、iOS13から導入されたCombineというフレームワークを利用した開発もなんとなくできるようになってきて、来年以降も続けていけばある程度のアプリは作れるようになっていくのではないかと期待しています。

## 株式会社 High Link

こちらも3年目ですね。正確には2年半くらいですか。  
去年は

> まだまだサービスとして・サイトとして改善するべきところはたくさんありますが、まずは事業として大きく成長させるところに着目するフェーズとのことなのでこれからも加速させていきたいとおもいます。  

と書いていましたが、言葉通り、今年はサービスの成長を大きく加速できたんじゃないかなと思います。  
今年はサービスに関しても[様々なプレスリリース](https://prtimes.jp/main/html/searchrlp/company_id/61060)を打つこともできました。

開発としては

- 新規機能追加
  - Paidy決済の導入
  - スキップ機能の導入
  - 紹介機能の導入
  - 在庫管理システムの導入
  - 機械学習を用いたリコメンド機能
  - 香水以外のフレグランスアイテムへの他領域対応
- リニューアル
  - プランのリニューアル
  - トップページのリニューアル
- オペレーション改善
  - 返金オペレーション改善
  - メールマガジンオペレーション改善
  - 配送オペレーションの改善

など新たなチャレンジがたくさん、スピーディーにできました。  
最初の設計がある程度うまくいったのか、それぞれの開発、導入についてもスムーズに行うことができました。  

来年は、会員数や日々のトラフィックも増えることが予想され、パフォーマンスやインフラコスト、運用コストの増大などサービスインの際には気にならなかったものが気になってくるかなと思うので、そこらへんも意識していきたいです。  
また、こちらでもユーザー目線でのサイト改善にも力を入れていきたいです。  

# プライベート

## 趣味
- タイピングについては、今年もあまりできなかった。悲しい。タイピングする環境がうまく整えられないのが1つの一因かなあ・・・。
- ぷよぷよは停滞期。全然やれなかったしのびなかった。
- っていうか趣味あったっけ?

## 旅行
新型コロナで、予定ほど行けなかったですが、2020年は10月・11月で (コロナに気をつけつつ) 少し行くことができました。  
GOTOトラベルで一回り豪華な旅行ができてよかったです。

- 熱海
- 北海道
  - 札幌/登別/洞爺湖/函館
- 沖縄
- 京都
- 金沢
- 相模湖

## 読書
- 世界一おもしろい　世界史の授業 (中経の文庫)   宇山 卓栄 https://www.amazon.co.jp/dp/B07SR7K8R9/
  - Quizknock の動画を見ていて、世界に詳しいのって面白そうだなと思って読んでみました。
  - 世界史、こうやって高校の時も受けたかったな。
- イシューからはじめよ――知的生産の「シンプルな本質」   安宅和人 https://www.amazon.co.jp/dp/4862760856/
  - 同期に勧められて。
  - 自分のサービス開発の進め方の考え方とすごい近くて、参考にしたいと思った。
- 実践！　タイムマネジメント研修: より少ない時間で、より高い成果を出すために 実践シリーズ (株式会社ポテンシャル・ディスカバリー・コンサルティング)... https://www.amazon.co.jp/dp/B00RS6RBQ0/
  - 仕事のすすめ方で改善点ないかなと思ったときに、タイムマネジメントについて何も知らないなと思って、読んでみました。
  - ちょっとした時間の使い方を見直すきっかけになりました。
- イノベーション・スキルセット～世界が求めるBTC型人材とその手引き   田川 欣哉 https://www.amazon.co.jp/dp/4479797033/
  - 同期に勧められて。
  - 今後の人生の捉え方、スキルセットをどう伸ばしていくかの参考になりました。デザインをやっていこうかなと思っています。
- 【ビジネス書大賞2020 大賞受賞作】FACTFULNESS(ファクトフルネス) 10の思い込みを乗り越え、データを基に世界を正しく見る習慣   ハン... https://www.amazon.co.jp/dp/4822289605/
  - いろいろなところで勧められているのを見て。
  - 世界のことって何も知らないんだな、世間の感想や本の売り込み通りの印象を受けました。世界って自分が思っている以上に進んでいる。

電車での通勤がなくなった影響で本を読むページが落ちてしまいましたが、今年はここらへんの本を読みました。  
どれもおすすめできる一冊でした。  

本は知識をつけるというより、知恵を広げる一つの手段だと思うので、今後も興味が出てきた分野はまず本を読んでいきたいですね。  

# 2021年
以下のことを頑張っていきたいです。

- 自分の意見を言語化できるようになる
- サービス開発のやり方を「がむしゃらに」チャレンジする
- 実装に関しては設計の引き出しは引き続き増やし続ける