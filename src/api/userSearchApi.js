import axios from 'axios';

const baseURL = 'https://open.api.nexon.com/heroes/v1/';

const userSearchApi = async (characterName) => {
  const idUrl = baseURL + 'id?character_name=' + characterName;

  try {
    const idResponse = await axios.get(idUrl, {
      headers: {
        'x-nxopen-api-key': process.env.REACT_APP_API_KEY,
      },
    });
    const ocid = idResponse.data.ocid;
    const infoUrl = baseURL + 'character/basic?ocid=' + ocid;

    const infoResponse = await axios.get(infoUrl, {
      headers: {
        'x-nxopen-api-key': process.env.REACT_APP_API_KEY,
      },
    });
    console.log(infoResponse);
    return infoResponse.data;
  } catch (error) {
    console.log(error);
  }
};

export default userSearchApi;
