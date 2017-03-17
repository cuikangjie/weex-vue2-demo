const stream = weex.requireModule('stream')
const API_ROOT = 'http://cuikangjie.com:3000/api/'


export default function(opt,success,fail){
  stream.fetch({
          method: 'GET',
          type: 'json',
          url: API_ROOT.concat(opt.url)
        }, (response)=>{
          console.log(response);
          if(typeof success === 'function'){
            success(response.data);
          }
        })
};
