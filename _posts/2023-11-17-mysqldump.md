---
layout: post
title: dockerで開発しているMySQLのデータを人に渡すときにやること
categories:
- 開発
tags:
- 雑記
---

自分用備忘録

# 渡すまで
## まずは MySQL を起動しているコンテナに入る

自分の場合は docker-compose で dbを立ち上げている状態だったので以下で対応

例
```sh
docker-compose exec db
```

注意  
`docker-compose run` だと、 MySQLが立ち上がっていない

## dumpする

コンテナ内で実行
```sh
mysqldump -u {user_name} -p {database_name} > {dumpfile_name}.sql
```

## ホストにコピーする
ホストで実行
```sh
docker cp {docker_image_id}:{path_to_file}.sql .
```

# 渡された後

## imageにコピーする

```sh
docker cp {path_to_file}.sql {docker_image_id}:{dir_to_file}
```

## MySQLを起動しているコンテナに入る

```
> mysql -u {user_name} -p
> use {database_name}
> source {dir_to_file}/{path_to_file}.sql
```

データベースを指定するなどはよしなに
