/** 유승인 타입스크립트 **/

/**
 * 널체크
 * 
 * 받은 파라미터가 비어있는지 체크.
 * 비어있을 시 true 반환함.
 * [], {}도 비어있다고 간주함
 */
function isEmpty(value: any){
    if(value == ""
        || value == null
        || value == undefined
        || (value != null && typeof value == "object" && !Object.keys(value).length) ){
        return true;
    } else {
        return false;
    }
}

/**
 * name 널체크
 * 
 * @param {*} name 
 * @param {*} val 
 * HTML name 속성이 파라미터와 같은 input 요소들 중 값이 비어있는 요소가 있는지 체크합니다.
 * 매개변수로 val을 받아왔다면 비어있는 요소에 val 값을 입력하고,
 * 받아오지 않았다면 true를 반환합니다.
 */
// function nameEmptyCheck(name:string, val:string | number){

//     let nameList = document.getElementsByName(name);
//     for(let i=0; i<nameList.length; i++){
//         if(nameList[i].value == null || nameList[i].value == undefined || nameList[i].value == ""){
//             if(isEmpty(val)){
//                 return true;
//             } else {
//                 nameList[i].value = val;
//             }
//         }
//     }
// }
export default { isEmpty }