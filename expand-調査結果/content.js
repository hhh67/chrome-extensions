// aria-labelが'開発チームによる調査結果'であるdiv要素を検索し、max-heightを調整する関数
function adjustMaxHeight() {
  // aria-labelが'開発チームによる調査結果'であるdiv要素を検索
  const targetElement = document.querySelector(
    'div[aria-label="開発チームによる調査結果"]'
  );

  if (targetElement) {
    console.log("expand-調査結果: 対象要素が見つかりました");

    // 対象要素のmax-heightを100%に設定
    targetElement.style.maxHeight = "100%";
    targetElement.style.setProperty("max-height", "100%", "important");

    // 親要素のmax-heightを無効化
    const parentElement = targetElement.parentElement;
    if (parentElement) {
      parentElement.style.maxHeight = "none";
      parentElement.style.setProperty("max-height", "none", "important");
      // CSSで使用するクラスを追加
      parentElement.classList.add("expand-research-result-parent");
      console.log("expand-調査結果: 親要素のmax-heightを無効化しました");
    }

    console.log("expand-調査結果: 対象要素のmax-heightを100%に設定しました");
  }
}

// ページ読み込み完了時に実行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", adjustMaxHeight);
} else {
  adjustMaxHeight();
}

// DOM変更を監視して動的に変更される要素にも対応
const observer = new MutationObserver(function (mutations) {
  let shouldCheck = false;

  mutations.forEach(function (mutation) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      // 新しいノードが追加された場合
      for (let node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // aria-labelを持つdiv要素が追加されたかチェック
          if (node.matches && node.matches("div[aria-label]")) {
            shouldCheck = true;
            break;
          }
          // 子要素内にaria-labelを持つdiv要素があるかチェック
          if (node.querySelector && node.querySelector("div[aria-label]")) {
            shouldCheck = true;
            break;
          }
        }
      }
    }
  });

  if (shouldCheck) {
    // 少し遅延してから実行（DOM変更の完了を待つ）
    setTimeout(adjustMaxHeight, 100);
  }
});

// DOM監視を開始
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

console.log("expand-調査結果: Chrome拡張が読み込まれました");
