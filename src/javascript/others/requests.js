// ---Dependencys
import axios from 'axios';

export const urlServer = 'http://localhost:8080/';

// -----------------------------------------SUGERENCIA-------------------------------------
export async function getSuggestedBetReq(data) {
  const endpoint = 'calculo/loco';
  const url = urlServer + endpoint;
  try {
    const respose = await axios(url, {
      method: 'POST',
      data,
      withCredentials: false
    });
    return respose;
  } catch (error) {
    return error;
  }
}
