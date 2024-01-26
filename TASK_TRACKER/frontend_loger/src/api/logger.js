import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/logger",
  timeout: 3000,
});

export const LoggerService = {

  showAllLogs: async () => {
    try {
        const response = await request.get("");
        console.log(response.data.loggerRecords);
        if (!response) return null;
        return response.data.loggerRecords;
      } catch (error) {
        console.error(" failed:", error.response.data.message);
      }
  },
 
 

  addLogger:async (payload)=>{
    try {
      
      const response = await request.post("",
      payload);
      console.log(response.data);
      if(!response) return null;
      return response.data
      } catch (error) {
        console.error("Failed to add new record")
      }

  },


  editLogger:async (payload)=>{
   try{
    console.log(payload)
    const response=await request.put(`/${payload.id}`,payload);
    console.log(response)
    if(!response) return null;
    return response.data
   }catch(error){
   console.log(error)
   }

  },



  deleteLogger: async (id) => {
    try {
        const response = await request.delete(`/${id}`);
        console.log(response)
        if(!response) return null;
        return response.data
      } catch (error) {
        console.error(error);
      }
  },
 
 







  
// }

  
};