---
layout: post
title: 辞書検索の高速化を図る(ruby)
categories:
- programming
tags:
- ruby
- aoj
---

お久しぶりです．  
AOJの問題でちょっと高速化をいろいろ試してみたので備忘録的にメモをしていきます．  
今回扱う問題は[ALDS1_4 - C : Search - Dictionary](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_4_C)です．  
最初に試したプログラムがTLEで工夫をこらしていったらもしかしたら提出ruby最速プログラム(現状では**1.49sec**)狙えるのでは？と思っていろいろ試してみました．  

## Array処理
予想通りではありますがTLEでました．

```ruby
#!/usr/bin/env ruby

n = gets.chomp.to_i

dict = []
n.times do
  action, str = gets.chomp.split

  case action
  when 'insert'
    dict << str
  when 'find'
    puts dict.include?(str) ? 'yes' : 'no'
  end
end
```

## Hashに変えた
**2.42sec** で実行できた．  


```ruby
#!/usr/bin/env ruby

n = gets.chomp.to_i

dict = {} # ←ここを変更
n.times do
  action, str = gets.chomp.split

  case action
  when 'insert'
    dict[str.to_sym] = 1 # 一応シンボル化
  when 'find'
    puts dict[str.to_sym] ? 'yes' : 'no'
  end
end
```

## 文字列を数字に変える
C++のプログラムを読んだら，`ACGT`を`1234`に変換しているプログラムがあったのでそのようにしてみました．  
今回は`文字コード - 64` (A=1)になるように組んでみた．  

結果は**4.86sec**．遅くなった．

```ruby
#!/usr/bin/env ruby

n = gets.chomp.to_i

dict = {}
n.times do
  action, str = gets.chomp.split

  # ここでそれぞれの文字を文字コード化し，A=1になるように64で引く
  # #to_iで高速化を図った．（文字列にすると2sほど遅かった）
  str = str.each_codepoint.map{ |i| i - 64 }.join.to_i
  case action
  when 'insert'
    dict[str] = 1
  when 'find'
    puts dict[str] ? 'yes' : 'no'
  end
end
```

## mapが遅いのでは？と思い消す
結果は**6.24sec**．桁数が多くなり余計無駄だった

```ruby
#!/usr/bin/env ruby

n = gets.chomp.to_i

dict = {}
n.times do
  action, str = gets.chomp.split
  str = str.each_codepoint.to_a.join.to_i
  case action
  when 'insert'
    dict[str] = 1
  when 'find'
    puts dict[str] ? 'yes' : 'no'
  end
end
```

## ちゃんとACGT = 1234に置換する
結果は**1.55sec**．早くなってきた．

```ruby
#!/usr/bin/env ruby

n = gets.chomp.to_i

dict = {}
n.times do
  action, str = gets.chomp.split
  str = str.tr('ACTG', '1234').to_i
  case action
  when 'insert'
    dict[str] = 1
  when 'find'
    puts dict[str] ? 'yes' : 'no'
  end
end
```

## Setを使ってみる
ArrayよりSetが早いと聞いたことがあったので比較．  
実行結果は**1.49sec**．きた．

```ruby
#!/usr/bin/env ruby
require 'set'

n = gets.chomp.to_i

dict = Set.new
n.times do
  action, str = gets.chomp.split
  str = str.tr('ACTG', '1234').to_i
  case action
  when 'insert'
    dict << str
  when 'find'
    puts dict.include?(str) ? 'yes' : 'no'
  end
end
```

## SortedSetを使う
sortしたらはやいんじゃね？という思いつき  
実行結果は**1.89sec**．  
ソートがオーバーヘッドになってしまったか

```ruby
#!/usr/bin/env ruby
require 'set'

n = gets.chomp.to_i

dict = SortedSet.new
n.times do
  action, str = gets.chomp.split
  str = str.tr('ACTG', '1234').to_i
  case action
  when 'insert'
    dict << str
  when 'find'
    puts dict.include?(str) ? 'yes' : 'no'
  end
end
```

## いろいろ試行錯誤
- `case when`を`if else`に変えてみたり
- `include?`を変えてみたり
- `action[0] == i`にしてみたり

しましたがうまく行きませんでした．

## 入力処理を一括で行う
入力処理が地味にオーバーヘッドなのではないか，と考えてruby1位の方のプログラムを参考にして実装を変えてみました．  
実行結果は**1.37sec**！見事1位ゲットです．ありがとうございました．

```ruby
#!/usr/bin/env ruby
require 'set'

line = STDIN.read.split("\n")
n = line[0].to_i
dict = Set.new

(1..n).each do |i|
  action, str = line[i].split
  str = str.tr('ACTG', '1234').to_i
  if action == 'insert'
    dict << str
  else
    puts dict.include?(str) ? 'yes' : 'no'
  end
end

```
