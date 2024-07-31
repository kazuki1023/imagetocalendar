# 登録くん
画像からカレンダーに予定登録を半自動で行ってくれるChrome拡張機能です

## 詳細
#### こんな時ないですか???
- マイページに面接日程送られてきた〜。忘れないようにカレンダーに登録しなくちゃ！
- カレンダー開いて、間違えないように日時、時間入力して....

#### めんどくさくないですか？？？
- いちいちカレンダー開くのすらめんどい...

#### そんな時は登録くん！！
- 画像をスクショして登録くんにドラッグ&ドロップするだけGoogleカレンダーに遷移して、そのまま登録することができるchrome拡張機能です

## 開発者へ

build a chrome extension with next.js

```bash:bash
npm run export
```

## Usage

If you want to use the ChromeAPI, you will need to use `dynamic import`.

If you get webpack errors during the build, please change the import path in `/src/scripts` to a relative path.

If you are not using the ChromeAPI, you can develop with `npm run dev`

Follow Next.js for routing.

Select `/extensions`.

## TODO

### ドラッグ&ドロップ

- [x] ドラッグ&ドロップで画像をアップロード
- [x] ドラッグ&ドロップされた画像の情報を取得

### gpt の api を使って画像から日時を取得

- [x] 画像から日時を取得
- [x] エラー処理

### カレンダーに画像を登録

- [x] カレンダーに日時情報を登録

### 残りtodo
- 課金機能
