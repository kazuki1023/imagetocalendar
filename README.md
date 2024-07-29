# Image2Calendar

## Description

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
- [ ] エラー処理

### カレンダーに画像を登録

- [x] カレンダーに日時情報を登録

### 残りtodo
- リファクタリング
- 見た目
- エラー処理
- 課金機能
