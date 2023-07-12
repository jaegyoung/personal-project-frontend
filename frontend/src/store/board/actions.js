import axiosInst from "@/utility/axiosInst";


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
    }