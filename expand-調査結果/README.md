# expand-調査結果

調査結果欄のheightを大きくして見やすくする。

## 備考

Cursorに作成させた。

プロンプトは以下。

```
`expand-調査結果`という名前で、以下の要件を満たすchrome拡張を作って

- aria-labelの値が`開発チームによる調査結果`であるdiv要素のmax-heightを100%に上書き
- その1つ親のdiv要素のmax-heightを無効化
```