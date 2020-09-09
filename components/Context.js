import React, { createContext } from 'react';

export const Context = React.createContext();

 //context 에서 관리해줄 상태값과 메소드들을 정의함.
// const Context = createContext({
//     toggle : "false",
//     setToggle : () => {
//         toggle === "false" ? "true" : "false"
//     }
// })

// export default Context;


// export const Context = React.createContext({
// // 없어도 된다 
// // 왜냐 하면 Context.Provider 에서 state를 관리 할꺼라
// // 하지만 관리할 state가 무엇이 있는지 확인하기 좋기 때문에 놔둠
//     toggle: "false",
//     change: () => {

//     }
// });

