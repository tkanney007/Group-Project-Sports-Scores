import nflScoresApi from "./api/nflscoresapi";



const getTeam = async (id) => {
try{
    const response = await nflScoresApi.get("teams", {params: {id: id}})
}
    nflScoresApi
    .get("teams", {
      params: { id: {id} },
    })
    .then((resp) => console.log(resp.data.response[0]))
    .catch((e) => console.log(e));
}

export function teamReducer(state, action) {
    // switch (action.type){
    //   case 'GET'  
    // }
}