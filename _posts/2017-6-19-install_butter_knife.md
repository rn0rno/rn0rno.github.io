---
layout: post
title: Android butterknifeを導入してみた．
---

# Butter Knife
## 概要
Android用のプラグイン
([butterknife - github](https://github.com/JakeWharton/butterknife))  

`onClickListener`とか`findViewByID(...)`みたいなAndroidでよくあるめんどくさいやつが簡単になる(！らしい)のでとりあえず使ってみます．

## 導入方法

### 1. `Butter Knife`をinstall

`build.gradle`に以下のコードを挿入しインストール．

```java:build.gradle
dependencies {
  compile 'com.jakewharton:butterknife:8.6.0'
  annotationProcessor 'com.jakewharton:butterknife-compiler:8.6.0'
}
```

### 2. (optional) `Butter Knife Zelezny`をinstall
`Butter Knife Zelezny`は`Butter Knife`を便利にするプラグインらしいです．  
入れなくてもいいですが今回は入れたことを前提としてみます．

1. Android Studio
2. Preference
3. Plugins
4. Browse Repositories...
5. `Butter knife Zelezny`
6. 右側のウィンドウに「Install」ボタンがあるのでそれをクリック
6. Android Studioを再起動

これで`Butter Knife`と`Butter Knife Zelezny`の導入は完了したらしい．

## 使用方法

1. `activity_main.xml`(View部分)を予め作成しておく．`id`は振っておく．

2.
```java
  setContentView(...)
```
の中で`Cmd + N`を押す．

3. `Generate`ウィンドウが出てくるので`Generate ButterKnife Injections`をクリック．(必要な`view`には`onClick`にチェックをつけておくと良い．)


これで勝手に`@bind`などが挿入されます．

あとは`onClick`メソッドの中に書きたいことを書くだけ．

## 例
`Butter Knife Zelezny`によって自動生成されたコードを示しておきます．

`class`内に作成されたフィールドは以下のような感じ．
```java
@BindView(R.id.startActivity)
Button startActivity;
@BindView(R.id.textView)
TextView textView;
@BindView(R.id.isEnabledBluetooth)
ToggleButton isEnabledBluetooth;
@BindView(R.id.isEnabledMagnetic)
ToggleButton isEnabledMagnetic;
@BindView(R.id.isEnabledGyro)
ToggleButton isEnabledGyro;
@BindView(R.id.isEnabledParticle)
ToggleButton isEnabledParticle;
@BindView(R.id.isEnabledMap)
ToggleButton isEnabledMap;
@BindView(R.id.toggledMenu)
LinearLayout toggledMenu;
```

`onCreate`は以下のような感じ．

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    ButterKnife.bind(this);
}
```

`onClick`はこんな感じ．(`Toast`はテストのために加筆しました．)
```java
@OnClick(R.id.startActivity)
public void onViewClicked() {
    Toast.makeText(this, "Clicked!", Toast.LENGTH_LONG).show();
}
```

## ハマったポイント
### バージョンアップにより`.inject`から`.bind`になってた？
参考サイトをいろいろ見てると`onCreate`の部分が
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    ButterKnife.inject(this);
}
```
となっており，`ButterKnife.inject(this)`でエラーが発生して困った．

### `import`部分が他のところに書いていなくて困った．

```java
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
```

参考サイトは結構コードだけしかかいてなくて，`import`がよくわからずに困った．  
ので一応載せておきます．これだけ書いてあればとりあえず動く．

## まとめ
- `Butter Knife`の導入ができた．
- `Butter Knife Zelezny`はとっても便利．
- バージョン違いは大変だけどプラグインありがとう．
- 使用感などは何か感じたら追記するかも．

## 参考

[Butter Knife - 公式](http://jakewharton.github.io/butterknife/)  
[Butter Knifeが素敵だ - Qiita](http://qiita.com/RyotaMurohoshi/items/93b9fc131a6863a5a772)  
[Butter Knifeを使ってコードをきれいにする - Qiita](http://qiita.com/taki4227/items/294c4fe98dbe20714fe5)  
[ButterKnife + ButterKnifeZeleznyを使いviewごとのfindviewbyidを排除する - うさがにっき](http://tiro105.hateblo.jp/entry/2015/02/24/163551)  
