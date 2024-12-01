document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('dynamic-header');
    const cityImages = Array.from(document.querySelectorAll('.city img')); // 获取所有城市图片
    let imagePaths = cityImages.map(img => img.src); // 获取图片路径数组
    let currentIndex = 0;

    function changeHeaderImage() {
        header.style.background = `url('${imagePaths[currentIndex]}') center/cover no-repeat`;
        currentIndex = (currentIndex + 1) % imagePaths.length; // 循环切换图片
    }

    // 初始化设置第一张图片
    changeHeaderImage();

    // 每 5 秒切换一次背景图片
    setInterval(changeHeaderImage, 5000);
});
