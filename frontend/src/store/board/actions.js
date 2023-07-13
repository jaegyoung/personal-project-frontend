import axiosInst from "@/utility/axiosInst";
import {REQUEST_BOARD_LIST_TO_SPRING} from "./mutation-types"

export default{
  requestBoardRegisterToSpring({ }, payload) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return axiosInst.post("/board/register", payload, config)
      .then((resRegister) => {
        if (resRegister.data) {
          return resRegister.data;
        } else {
          alert("산책로 저장 불가!");
        }
      });
  },
  requestBoardListToSpring({ commit }) {
    return new Promise((resolve, reject) => {
      axiosInst.post("board/list")
        .then((resList) => {
          commit(REQUEST_BOARD_LIST_TO_SPRING, resList.data);
          resolve(resList.data); // 성공적으로 처리된 경우 Promise를 이행(resolve)
        })
        .catch((error) => {
          reject(error); // 에러 발생 시 Promise를 거부(reject)
        });
    });
  }
    }