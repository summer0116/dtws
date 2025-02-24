// 抽奖逻辑
document.getElementById('drawButton').addEventListener('click', function() {
    const results = [
        { name: "超凡侠客", probability: 1 },
        { name: "五星侠客", probability: 3 },
        { name: "四星侠客", probability: 10},
        { name: "超凡功法", probability: 1 },
        { name: "五星功法", probability: 3 },
        { name: "四星功法", probability: 10 },
        { name: "蓝色石头", probability: 35 },
        { name: "紫色石头", probability: 25 },
        { name: "金色石头", probability: 12 }
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // 清空之前的结果

    for (let i = 0; i < 10; i++) { // 生成10个独立的结果
        let cumulativeProbability = 0;
        const randomNum = Math.random() * 100;

        for (let result of results) {
            cumulativeProbability += result.probability;
            if (randomNum <= cumulativeProbability) {
                // 创建一个新的结果元素
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';

                // 判断是否为特殊结果
                if (
                    result.name === "超凡侠客" ||
                    result.name === "超凡功法" ||
                    result.name === "五星侠客" ||
                    result.name === "五星功法"
                ) {
                    resultItem.classList.add('special-result'); // 添加特殊样式
                }

                resultItem.innerText = `${i + 1}: ${result.name}`;
                resultsContainer.appendChild(resultItem);
                break;
            }
        }
    }
});

// 清空逻辑
document.getElementById('clearButton').addEventListener('click', function() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // 清空所有结果
});