function F_Click(playerjanken) {

//cpuのじゃんけんの選択肢
    const cpujanken = [ "グー" , "チー" , "パー" ];
    //乱数を作る
    const r = Math.floor(Math.random()*3);
    //プレイヤーのじゃんけんの選択肢
    let p_janken =  [ "グー" , "チー" , "パー" ];


    //if分岐じゃんけん
    if(r === playerjanken) {
        kekka1 = "あいこです！"
    } else if(r === 0 && playerjanken === 2){
        kekka1 = "あなたの勝ちです！"
    } else if(r === 1 && playerjanken === 0){
        kekka1 = "あなたの勝ちです！"
    } else if(r === 2 && playerjanken === 1){
        kekka1 = "あなたの勝ちです！"
    }else{
        kekka1 = "あなたの負けです！"
    };

    //if分岐ジャンル
    if(r === playerjanken) {
        janken1 = "和"
    } else if(r === 0 && playerjanken === 2){
        janken1 = "中華"
    } else if(r === 1 && playerjanken === 0){
        janken1 = "イタリアン"
    } else if(r === 2 && playerjanken === 1){
        janken1 = "エスニック"
    }else{
        janken1 = "ボリビア"
    };


    // 結果の表示
    document.querySelector("#jan1").src="img/" + r + ".png";
    document.querySelector("#status1").innerHTML = "相手は" + cpujanken[r] + "を出しました";
    document.querySelector("#result1").innerHTML = kekka1;
    document.querySelector("#jenre1").innerHTML = janken1;

    // let final1 = janken1;
    // return{final1};
};  


function S_Click(playerjanken) {

    //cpuのじゃんけんの選択肢
        const cpujanken = [ "グー" , "チー" , "パー" ];
        //乱数を作る
        const r = Math.floor(Math.random()*3);
        //プレイヤーのじゃんけんの選択肢
        let p_janken =  [ "グー" , "チー" , "パー" ];
    
    
        //if分岐じゃんけん２
        if(r === playerjanken) {
            kekka2 = "あいこです！"
        } else if(r === 0 && playerjanken === 2){
            kekka2 = "あなたの勝ちです！"
        } else if(r === 1 && playerjanken === 0){
            kekka2 = "あなたの勝ちです！"
        } else if(r === 2 && playerjanken === 1){
            kekka2 = "あなたの勝ちです！"
        }else{
            kekka2 = "あなたの負けです！"
        };

        //if分岐主食
        if(r === playerjanken) {
            janken2 = "ご飯"
        } else if(r === 0 && playerjanken === 2){
            janken2 = "麺"
        } else if(r === 1 && playerjanken === 0){
            janken2 = "パン"
        } else if(r === 2 && playerjanken === 1){
            janken2 = "フォー"
        }else{
            janken2 = "マカロニ"
        };

        // 結果の表示
        document.querySelector("#jan2").src="img/" + r + ".png";
        document.querySelector("#status2").innerHTML = "相手は" + cpujanken[r] + "を出しました";
        document.querySelector("#result2").innerHTML = kekka2;
        document.querySelector("#jenre2").innerHTML = janken2;

        // let final2 = janken2;
        // return{final2};
    };  


function T_Click(playerjanken) {

//cpuのじゃんけんの選択肢
    const cpujanken = [ "グー" , "チー" , "パー" ];
    //乱数を作る
    const r = Math.floor(Math.random()*3);
    //プレイヤーのじゃんけんの選択肢
    let p_janken =  [ "グー" , "チー" , "パー" ];


    //if分岐
    if(r === playerjanken) {
        kekka3 = "あいこです！"
    } else if(r === 0 && playerjanken === 2){
        kekka3 = "あなたの勝ちです！"
    } else if(r === 1 && playerjanken === 0){
        kekka3 = "あなたの勝ちです！"
    } else if(r === 2 && playerjanken === 1){
        kekka3 = "あなたの勝ちです！"
    }else{
        kekka3 = "あなたの負けです！"
    };

    //if分岐主菜
    if(r === playerjanken) {
        janken3 = "お肉"
    } else if(r === 0 && playerjanken === 2){
        janken3 = "大豆"
    } else if(r === 1 && playerjanken === 0){
        janken3 = "お魚"
    } else if(r === 2 && playerjanken === 1){
        janken3 = "シーフード"
    }else{
        janken3 = "卵"
    };

    // 結果の表示
    document.querySelector("#jan3").src="img/" + r + ".png";
    document.querySelector("#status3").innerHTML = "相手は" + cpujanken[r] + "を出しました";
    document.querySelector("#result3").innerHTML = kekka3;
    document.querySelector("#jenre3").innerHTML = janken3;

    // let final3 = janken3;
    // return{final3};
};  

// function Final(){

// }
//     console.log(F_Click().final1 + S_Click().final2 + T_Click().final3);

//         let final = janken1 + "風の"
//         final += janken2 + "と"
//         final += janken3 + "を使った料理"
//         console.log(final);



// 以下モーダル
// 'use strict';
// {
//   const open = document.getElementById('open');
//   const close = document.getElementById('close');
//   const modal = document.getElementById('modal');
//   const mask = document.getElementById('mask');

//   open.addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//   });
//   close.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
//   mask.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
// }