const flirtyMessages = [
    "你知道你和星星有什麼區別嗎？星星在天上，你在我心裡",
    "我最近有點忙，忙著喜歡你",
    "你知道我為什麼感冒了嗎？因為我對你完全沒有抵抗力",
    "我覺得你特別像一款遊戲，我的世界",
    "你知道我的缺點是什麼嗎？是缺點你",
    "你猜我喜歡什麼制服？被你制服",
    "你知道我為什麼這麼重嗎？因為我的心裡裝的都是你",
    "我覺得你特別像一本書，越看越想睡",
    "你知道你和猴子有什麼區別嗎？猴子住在樹上，你住在我心裡",
    "我最近想換個造型，你覺得我適合什麼？適合你"
];

const flirtyBtn = document.getElementById('flirtyBtn');
const messageDisplay = document.getElementById('messageDisplay');

flirtyBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * flirtyMessages.length);
    messageDisplay.textContent = flirtyMessages[randomIndex];
});
