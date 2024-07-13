# 中壢大中CHLS

[BWsix/CHLS](https://github.com/BWsix/CHLS)

使用Nuxt重新寫了一次中壢大中官網
並且加上了天氣卡片、方便的捷徑、社團資訊

![preview](https://i.meee.com.tw/dbRvzBE.jpg)

## 特色
- 天氣卡片
- 常用網站捷徑
- 同步校網公告(資料獲取使用[BWsix/CLHS-api](https://github.com/BWsix/CLHS-api))
- 社團資訊
- 暗黑模式

## 如何更改社團資訊

標準社團資訊JSON範本如下:
```
"clmk": {
      "name": "創客社",
      "description": "Where Dreamers, Become Makers.",
      "image": "https://i.meee.com.tw/2H8plgm.jpg",
      "social": {
        "site": "https://sites.google.com/clhs.tyc.edu.tw/maker/home",
        "instagram": "https://www.instagram.com/clhs_clmk/"
      },
      "type": "學術"
    }
```
### 說明

```
"clmk": { //社團代號
      "name": "創客社", //社團名稱
      "description": "Where Dreamers, Become Makers.", //簡介
      "image": "https://i.meee.com.tw/2H8plgm.jpg", //圖片
      "social": {
        "site": "https://sites.google.com/clhs.tyc.edu.tw/maker/home",
        "instagram": "https://www.instagram.com/clhs_clmk/"
      }, //社群鏈結(支援site(地球icon)、instagram、facebook的圖示)
      "type": "學術" //分類
    }
```

![](https://i.meee.com.tw/OdctbLo.png)

編輯`assets/clubs.json`後
push到此repo

push之前請檢查是否符合json格式要求(結尾不逗號、字符串為雙引號)，如果不會，可以叫chatgpt幫你
