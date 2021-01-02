---
layout: post
title: Ruby向けPaidyクライアントのgemを作った
categories:
- 日記
tags:
- gem
- ruby
---

あるプロジェクトでPaidy決済を導入することになったときに、Paidy用のクライアントgemなどが存在せず、良いプラグインもなかったのでgemの勉強がてら作ってみました。  
https://github.com/rn0rno/paidy-ruby

gemを作ったことも初めてだったので、何もわからないところからスタートしましたが、無事にpublishでき、某プロジェクトでも稼働させることができました。  
まだ、必要な機能を作ってとりあえず動いた形にしただけなので、このあとテストを書きつつhttp通信のstubの勉強、github actionの勉強などを兼ねて開発を進めていければと思っています。  
（ほんとうは先にテストをちゃんと書いておく必要があるんだろうけど…）
