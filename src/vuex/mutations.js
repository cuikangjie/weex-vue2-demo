export const ADD_Note= (state, notes) => {
  state.noteData=notes;
}

export const Change_Id= (state, id) => {
  state.note= state.noteData.filter(function(obj){
    return obj.id === id ;
  })[0];
  console.log(state.note);
}
