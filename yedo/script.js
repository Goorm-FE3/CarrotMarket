console.log('test')


function rotation() {
  const words = ['알바', '중고차', '원룸', '러닝 모임', '맛집', '동네친구', '자전거', '카페', '아이폰']
  const getRotation = document.querySelector("#words");
  let index = 0;

  function changeText() {
    getRotation.classList.add('hiddenText');

    setTimeout(() => {
      getRotation.classList.remove('hiddenText');
      index = (index + 1) % words.length;
      getRotation.textContent = words[index];
      
      getRotation.classList.add('showText');

      setTimeout(() => {
        getRotation.classList.remove('showText');
      }, 300);
    }, 300);
  }
  setInterval(changeText, 2000);
}

rotation();