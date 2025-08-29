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
const subtitles = document.getElementsByClassName('service-subtitle');
        for(const subtitle of subtitles){
            subtitleArr.push(subtitle.innerText);
        }
let serviceNumber = [];
const getNumber = document.getElementsByTagName('span');
for(const number of getNumber){
    serviceNumber.push(number.innerText);
}
const callIcon = document.getElementById('')

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
document.getElementById('btn-caller-1')
.addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[0]} ${serviceNumber[0]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[0]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[0]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
document.getElementById('btn-caller-2')
.addEventListener('click',function(){
    let time = getCurrentTIme();    
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[1]} ${serviceNumber[1]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[1]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[1]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
document.getElementById('btn-caller-3')
.addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[2]} ${serviceNumber[2]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[2]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[2]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
document.getElementById('btn-caller-4')
.addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[3]} ${serviceNumber[3]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[3]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[3]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
document.getElementById('btn-caller-5')
.addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[4]} ${serviceNumber[4]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[4]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[4]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})
document.getElementById('btn-caller-6')
.addEventListener('click',function(){
    let time = getCurrentTIme();
    if(currentCoins >= 20){
     currentCoins = currentCoins - 20;
    alert(`📞Calling ${subtitleArr[5]} ${serviceNumber[5]}...`);
    document.getElementById('coins').innerText = currentCoins;
    const callHistory = document.createElement('div');
const sectionCallHistory = document.getElementById('update-call-history');
callHistory.innerHTML = `<div class="h-[80px] bg-gray-100 rounded-2xl flex justify-between items-center p-5 mt-3">
                    <div class="">
                        <p class="text-xl font-bold">${subtitleArr[0]}</p>
                        <p class="text-gray-500 font-semibold text-xl">${serviceNumber[0]}</p>
                    </div>
                    <div><p class="text-gray-500 font-semibold">${time}</p></div>
                </div>`;
sectionCallHistory.appendChild(callHistory);
    }
    else{
        alert(`❌ Not Sufficient Coins.You need at least 20 coins to make a call`);
    }
})

// clear history functions
document.getElementById('btn-clear-history')
.addEventListener('click', function(){
    const getElement = document.getElementById('update-call-history');
    getElement.innerText = '';
})



