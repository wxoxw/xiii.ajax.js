# xiii.ajax.js
Ajax ( XMLHttpRequest ) を簡単に扱うためのJavaScriptライブラリ

## Function

```
XIII.ajax(url:String):XMLHttpRequest

XIII.ajax(url:String, load:Function):XMLHttpRequest

XIII.ajax(url:String, option:Object):XMLHttpRequest
```

使用例

```html
<script src="xiii.ajax.compiled.js"></script>
<script>

  XIII.ajax("counter.php");
  
</script>
```

```html
<script src="xiii.ajax.compiled.js"></script>
<script>

  XIII.ajax("rss.xml", function(response, header, e) {
        
    // responseのプロパティ
    // response.text ... レスポンスボディの中身を文字列で取得
    // response.xml ... レスポンスボディの中身をXML形式で取得
    // response.option ... レスポンスボディの中身を任意の形式で取得
    
    // headerのプロパティ
    // header.date ... 現在の日付を取得
    // header.server ... サーバーの情報を取得
    // header.mime ... MIMEを取得
    // header.size ... レスポンスボディのサイズを取得
  
    // ここにロード完了時の処理を記述
    
  });
  
</script>
```

```html
<script src="xiii.ajax.compiled.js"></script>
<script>
  
  XIII.ajax("data.json", {
  
    // MIMEを設定
    mime: "application/json",
    
    // responseTypeを設定
    type: "json",
    
    // 送信したいデータを設定 ( PHP等で使用 )
    data: { 
      name: "Taro Yamada",
      age: 25,
      height: 170,
      weight: 60
    },
  
    // ロード完了時の処理
    load: function(response, header, e) {},
    
    // エラー発生時の処理
    error: function(e) {}
  
  });
  
</script>
```

## Browser
- Google Chrome
- FireFox
- Opera
- IE9+
- Androidブラウザ
