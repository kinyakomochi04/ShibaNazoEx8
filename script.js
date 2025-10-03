// 間違えた回数をカウントする変数
let incorrectCount = 0;
// 正解の文字列をここで設定
const correctAnswer = 'かんな';
const maxAttempts = 3;

// HTMLの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const answerBox = document.getElementById('answer-box');
    const resultMessage = document.getElementById('result-message');
    const imageContainer = document.getElementById('image-container');

    // 送信ボタンがクリックされた時の処理
    submitButton.addEventListener('click', () => {
        const inputAnswer = answerBox.value;
        
        if (inputAnswer === correctAnswer) {
            // 正解時の処理
            resultMessage.textContent = '正解！これで本当にクリア！受付にこの画面を見せてね！';
            resultMessage.className = 'correct';
            
            // 入力欄とボタンを無効化
            answerBox.disabled = true;
            submitButton.disabled = true;
        } else {
            // 不正解時の処理
            incorrectCount++;
            if (incorrectCount >= maxAttempts) {
                // 3回間違えたら無効化
                resultMessage.textContent = `残念、3回間違えました。これ以上入力できません。`;
                resultMessage.className = 'incorrect';
                answerBox.disabled = true;
                submitButton.disabled = true;
            } else {
                // 残り回数を表示
                const remainingAttempts = maxAttempts - incorrectCount;
                resultMessage.textContent = `不正解です。残り${remainingAttempts}回挑戦できます。`;
                resultMessage.className = 'incorrect';
            }
        }
    });
});