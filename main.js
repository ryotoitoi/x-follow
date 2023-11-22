function follow() {
    const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
    if (confirmButton) {
        confirmButton.click();
        console.log('フォローしました');
    } else {
        console.log('フォローの確認ボタンが見つかりませんでした');
    }
}

function scrollPage() {
    window.scrollBy(0, 300); // 縦方向に300ピクセルスクロール
    console.log('スクロールしました');
}

function clickFollow() {
    const followButton = document.querySelector('[data-testid$="-follow"]');
    
    if (followButton) {
        followButton.click();
        
        // フォローの確認モーダルが表示されるまで少し待ちます
        setTimeout(follow, 1000);
        
        // 次のフォロー処理のために再帰的に関数を呼び出します
        setTimeout(clickFollow, 4000);  // スクロールと合わせて待ち時間を調整
    } else {
        console.log('これ以上フォローすべきユーザーがいません');
    }
}

// スクロール処理とフォロー処理を交互に行います
setInterval(scrollPage, 20000);
clickFollow(); // この行をコメントアウトを解除して実行する
