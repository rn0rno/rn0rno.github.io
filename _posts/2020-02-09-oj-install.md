---
layout: post
title: ojがinstallできない
categories:
- daily
tags:
- エラー
- ruby
---

Ruby on Railsを用いたアプリで[the_garage](https://github.com/cookpad/garage) を使おうと思い、インストール (`bundle install`) しようとしたときにハマったのでメモです。

以下のようなエラーが出て、 `bundle install` ができませんでした。
環境としては、Catalinaにしてからあまり積極的な開発をしていませんでした。

```
>> bundle install

... (中略)

Using multi_xml 0.6.0
Using oauth2 1.4.3
Fetching oj 3.10.0
Installing oj 3.10.0 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    current directory: /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0/gems/oj-3.10.0/ext/oj
/Users/rn0rno/.rbenv/versions/2.6.5/bin/ruby -I /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0 -r ./siteconf20200209-78469-dt3cdd.rb extconf.rb
>>>>> Creating Makefile for ruby version 2.6.5 on x86_64-darwin19 <<<<<
checking for rb_time_timespec()... *** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

Provided configuration options:
	--with-opt-dir
	--without-opt-dir
	--with-opt-include
	--without-opt-include=${opt-dir}/include
	--with-opt-lib
	--without-opt-lib=${opt-dir}/lib
	--with-make-prog
	--without-make-prog
	--srcdir=.
	--curdir
	--ruby=/Users/rn0rno/.rbenv/versions/2.6.5/bin/$(RUBY_BASE_NAME)
	--with-oj-dir
	--without-oj-dir
	--with-oj-include
	--without-oj-include=${oj-dir}/include
	--with-oj-lib
	--without-oj-lib=${oj-dir}/lib
/Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:467:in `try_do': The compiler failed to generate an executable file. (RuntimeError)
You have to install development tools first.
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:552:in `try_link0'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:570:in `try_link'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:782:in `try_func'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:1069:in `block in have_func'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:959:in `block in checking_for'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:361:in `block (2 levels) in postpone'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:331:in `open'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:361:in `block in postpone'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:331:in `open'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:357:in `postpone'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:958:in `checking_for'
	from /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/2.6.0/mkmf.rb:1068:in `have_func'
	from extconf.rb:26:in `<main>'

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0/extensions/x86_64-darwin-19/2.6.0/oj-3.10.0/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0/gems/oj-3.10.0 for inspection.
Results logged to /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0/extensions/x86_64-darwin-19/2.6.0/oj-3.10.0/gem_make.out

An error occurred while installing oj (3.10.0), and Bundler cannot continue.
Make sure that `gem install oj -v '3.10.0' --source 'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
  the_garage was resolved to 2.4.4, which depends on
    oj
```

# 解決方法
```
sudo xcodebuild -license
```

を実行する。
実行したあとは、指示に従い `agree` をする。

```
>> sudo xcodebuild -license
Password:


You have not agreed to the Xcode license agreements. You must agree to both license agreements below in order to use Xcode.

Hit the Enter key to view the license agreements at '/Applications/Xcode.app/Contents/Resources/English.lproj/License.rtf'

Xcode and Apple SDKs Agreement

PLEASE SCROLL DOWN AND READ ALL OF THE FOLLOWING TERMS AND CONDITIONS CAREFULLY BEFORE USING THE APPLE SOFTWARE OR APPLE SERVICES.  THIS IS A LEGAL AGREEMENT BETWEEN YOU AND APPLE.  IF YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS, CLICK THE “AGREE” BUTTON.  BY CLICKING “AGREE” OR BY DOWNLOADING, USING OR COPYING ANY PART OF THIS APPLE SOFTWARE OR USING ANY PART OF THE APPLE SERVICES, YOU ARE AGREEING ON YOUR OWN BEHALF AND/OR ON BEHALF OF YOUR COMPANY OR ORGANIZATION TO THE TERMS AND CONDITIONS STATED BELOW.  IF YOU DO NOT OR CANNOT AGREE TO THE TERMS OF THIS AGREEMENT, YOU CANNOT USE THIS APPLE SOFTWARE OR THE APPLE SERVICES.  DO NOT DOWNLOAD OR USE THIS APPLE SOFTWARE OR APPLE SERVICES IN THAT CASE.

1.      Definitions
Whenever capitalized in this Agreement:

“Agreement” means this Xcode and Apple SDKs Agreement.



By typing 'agree' you are agreeing to the terms of the software license agreements. Type 'print' to print them or anything else to cancel, [agree, print, cancel] agree

You can view the license agreements in Xcode's About Box, or at /Applications/Xcode.app/Contents/Resources/English.lproj/License.rtf
```

## 調査方法

はじめにインターネットで事例ないかなーと思い色々探したのですが、似たようなものは発見できず、エラーメッセージを読み

> To see why this extension failed to compile, please check the mkmf.log which can be found here:
>
>  /Users/rn0rno/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0/extensions/x86_64-darwin-19/2.6.0/oj-3.10.2/mkmf.log
>
> extconf failed, exit code 1

とのことだったので、 `mkmf.log` を確認したところ、以下のように書いてありました。

```
"clang -o conftest -I/Users/rn0rno/.rbenv/versions/2.6.5/include/ruby-2.6.0/x86_64-darwin19 -I/Users/rn0rno/.rbenv/versions/2.6.5/include/ruby-2.6.0/ruby/backward -I/Users/rn0rno/.rbenv/versions/2.6.5/include/ruby-2.6.0 -I. -I/Users/rn0rno/.rbenv/versions/2.6.5/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT   -O3 -ggdb3 -Wall -Wextra -Wdeclaration-after-statement -Wdeprecated-declarations -Wdivision-by-zero -Wimplicit-function-declaration -Wimplicit-int -Wpointer-arith -Wshorten-64-to-32 -Wwrite-strings -Wmissing-noreturn -Wno-constant-logical-operand -Wno-long-long -Wno-missing-field-initializers -Wno-overlength-strings -Wno-parentheses-equality -Wno-self-assign -Wno-tautological-compare -Wno-unused-parameter -Wno-unused-value -Wunused-variable -Wextra-tokens  -fno-common -pipe conftest.c  -L. -L/Users/rn0rno/.rbenv/versions/2.6.5/lib -L. -L/Users/rn0rno/.rbenv/versions/2.6.5/lib  -fstack-protector-strong -L/usr/local/lib     -lruby.2.6   "


Agreeing to the Xcode/iOS license requires admin privileges, please run “sudo xcodebuild -license” and then retry this command.


checked program was:
/* begin */
1: #include "ruby.h"
2:
3: int main(int argc, char **argv)
4: {
5:   return 0;
6: }
/* end */

```

xcodebuildのagreeが必要なようですね。
エラーメッセージをちゃんと読むことは大事。
