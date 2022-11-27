
var vedio=document.createElement('div')
vedio.innerHTML=`<input type="text" id="txt" placeholder="  Enter the character name">
<button class="button-class" type="button" onClick="foo()">Search</button>`
vedio.setAttribute('id','count')
var head=document.getElementById("header")
head.after(vedio)

function foo() {
  
    var value = document.getElementById('value');
    if(value){
        value.innerText="";
    }
    
const p=new Promise((resolve,reject)=>{
    let character= document.getElementById("txt").value
    if(!character){
        alert('please enter character name');
        return;
    }
    var res= fetch(`https://hp-api.herokuapp.com/api/characters`);
    res.then((json)=>resolve(json.json())).then((err)=>reject(err));

   

})
console.log('after promise', p);
p.then((res)=>{

    var result=res.filter((element)=> element.name === document.getElementById("txt").value);
    console.log('res : ',result)
      let characteractorname=result[0].actor
      console.log(characteractorname)
      if(! characteractorname){
        console.log('no name found')
        characterhouse='no name found'
      }
    

     let characterbirthDate= result[0].yearOfBirth
     console.log(characterbirthDate)
     if(! characterbirthDate){
        console.log('no birth found')
        characterbirthDate='no birth found'
      }
     
     

     let characterhouse= result[0].house
     console.log(characterhouse)
     if(! characterhouse){
        console.log('no house found')
        characterhouse='no house found'
      }
    
     let charactername = result[0].name
     console.log(charactername)
     
     var vedio=document.createElement('div')
     document.getElementById('txt').value="";
     vedio.innerText=`Actor ${charactername} realname : ${characteractorname} 

         Actor ${charactername} yearOfBirth : ${characterbirthDate}

        Actor ${charactername} house: ${characterhouse}`

         vedio.setAttribute('id','value')
         vedio.setAttribute('class','result')
         var res=document.getElementById("result")
         res.after(vedio)
 
}).catch((err)=>{
    alert("Please enter proper value")
})
}
