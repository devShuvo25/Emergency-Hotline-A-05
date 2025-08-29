function getNumberValue(id){
    const getEliment = document.getElementById(id).innerText;
    const getElimentsValue = parseInt(getEliment);
    return getElimentsValue;  
}
const hearts =  document.getElementsByClassName('fa-heart');
let totalHeart = getNumberValue('heart-count');
for(const heart of hearts){
    heart.style.cursor = 'pointer';
    heart.addEventListener('click', function(){
        heart.style.color = 'red';
    totalHeart++;
    const getEliment = document.getElementById('heart-count');
    getEliment.innerText = totalHeart;
    })
}
// function -2
let subtitleArr = [];
let serviceNumber = [];
const subtitles = document.getElementsByClassName('service-subtitle');
        for(const subtitle of subtitles){
            subtitleArr.push(subtitle.innerText);
        }
const getNumber = document.getElementsByTagName('span');
for(const number of getNumber){
    serviceNumber.push(number.innerText);
}
//  calling action
let currentCoins = getNumberValue('coins');

// time function
function getCurrentTIme(){
    const today = new Date();
    let time = today.toLocaleTimeString('en-us',{
    hour12  : true
});
    return time;
}
// calling functions
const callingBtns = document.getElementsByClassName('btn-for-call');
for(let i = 0 ; i < callingBtns.length; i++){
    callingBtns[i].addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[i]} ${serviceNumber[i]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[i]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[i]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
}

// clear history functions
document.getElementById('btn-clear-history')
.addEventListener('click', function(){
    const getElement = document.getElementById('update-call-history');
    getElement.innerText = '';
})

// function for copy


const btns = document.getElementsByClassName('btn-common');
for(let i = 0; i< btns.length; i++){
    btns[i].addEventListener('click', function(){
        navigator.clipboard.writeText(serviceNumber[i]);
        let copyCount = getNumberValue('copy-count');
        copyCount++;
        document.getElementById('copy-count')
        .innerText = copyCount;
        alert(`The Number has been copied : ${serviceNumber[i]}`)
    })
    


}
 
