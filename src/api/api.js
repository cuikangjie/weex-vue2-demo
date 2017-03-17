import fetch from '../util/fetch.js'

// export API interface
export default {
  NoteData(fn){
    fetch({url:'note/getBlogNotes'},fn);
  }
}
