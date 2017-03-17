import API from '../api/api'

export const getNote = ({ commit }) => {
  API.NoteData(function(notes){
    console.log(notes,'action');
    commit('ADD_Note',notes);
  })
}

export const changeId = ({commit},id) => {
  commit('Change_Id',id)
}
