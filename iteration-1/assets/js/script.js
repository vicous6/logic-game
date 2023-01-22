
window.addEventListener("DOMContentLoaded", function(){
 
   let truc = document.getElementsByTagName("li")
   let button= document.getElementById("button")
  for(let i = 0 ; i < truc.length ; i ++){
       
      truc[i].addEventListener('click',function(){
          
console.log(truc[i])
           let array = getAllPositions()
      
        let voidElement = getVoidElement(array)
   
           let voidPos =   getVoidPosition(array, truc[i])
           //   return [x,y]
          let elemPos = getElemPosition(array,truc[i])
         
        //  console.log(voidPos,elemPos)
         let bidule = moove(array,voidPos, elemPos,voidElement,truc[i])
        //   console.log(bidule)
        
       
     
      })
  }
// button.addEventListener('click',function(){
    
     let count = 0
    let intervalId = setInterval(function(){
       
     let xxxx= truc[chooseAsquare()]
    // console.log(xxxx)
    
       let array = getAllPositions()
    //   console.log(array)
        let voidElement = getVoidElement(array)
    // console.log(voidElement )
    // console.log("void element")
    
           let voidPos =   getVoidPosition(array,xxxx)
        //   console.log(voidPos)
        //     console.log("void pos")
           //   return [x,y]
          let elemPos = getElemPosition(array,xxxx)
        //  console.log(elemPos )
        //  console.log("elempos")
        //  console.log(voidPos,elemPos)
         let bidule = moove(array,voidPos, elemPos,voidElement,xxxx)
        //   console.log(bidule)
        count++
        console.log(count)
        if(truc[0].classList.value==="blue1" && truc[1].classList.value==="red2"&& truc[2].classList.value==="yellow3"){
            
            clearInterval(intervalId);
        }
}, 2);
   
// })

});


function getVoidElement(tab){
      
    
    
    for(let i = 0 ; i < tab.length;i ++){
        
        for(let j = 0 ; j < tab[i].length; j ++){
            
            
           
         if(tab[i][j].classList.value===""){
                
               return tab[i][j]
                
            }
           
        }
   
    }
    // console.log(pos)
   
    
}
function getVoidPosition (tab, elementCible) {
    let pos = []
    
    
    
    for(let i = 0 ; i < tab.length;i ++){
        
        for(let j = 0 ; j < tab[i].length; j ++){
            
            
           
         if(tab[i][j].classList.value===""){
                
                pos.push(i)
                pos.push(j)
                
            }
           
        }
   
    }
    // console.log(pos)
         return pos
    
   
}

function getElemPosition(tab, elementCible) {
     let pos = []
    
    for(let i = 0 ; i < tab.length;i ++){
        
        for(let j = 0 ; j < tab[i].length; j ++){
            
            
       
         if(elementCible.classList===tab[i][j].classList){
                
                pos.push(i)
                pos.push(j)
                
            }
           
        }
   
    }
    // console.log(pos)
         return pos
    
   
}

function getAllPositions(){
      
   let tab=[]
   let row1= []
    let row2= []
     let row3= []
   let truc = document.getElementsByTagName("li")
   
   row1.push(truc[0])
   row1.push(truc[1])
   row1.push(truc[2])
   row2.push(truc[3])
   row2.push(truc[4])
   row2.push(truc[5])
   row3.push(truc[6])
   row3.push(truc[7])
   row3.push(truc[8])
   tab.push(row1)
    tab.push(row2)
     tab.push(row3)

    return tab
}

function moove(allPosition, voidXY, elemXY,voidElem, clickElem){
    
    // console.log(allPosition)
    // console.log(voidXY)
    // console.log(elemXY)
    // console.log(voidElem)
    // console.log(clickElem)
    
 
    let voidX = voidXY[0] 
    let voidY =voidXY[1]
    
     let elemX = elemXY[0] 
    let elemY =elemXY[1]
    
//   console.log(elemX,voidX)
  
  if(elemX===voidX &&elemY+1 ===voidY){
      
    //   console.log('la case vide est a droite')
      
      voidElem.classList.add(clickElem.classList)
      voidElem.textContent= clickElem.textContent
      
      clickElem.classList.remove(clickElem.classList)
      clickElem.textContent=""
      
      
      
  }else if(elemX===voidX &&elemY-1 ===voidY){
       voidElem.classList.add(clickElem.classList)
      voidElem.textContent= clickElem.textContent
      
      clickElem.classList.remove(clickElem.classList)
      clickElem.textContent=""
    //   console.log('la case vide est a gauche')
  }else if(elemY==voidY && elemX+1===voidX){
       voidElem.classList.add(clickElem.classList)
      voidElem.textContent= clickElem.textContent
      
      clickElem.classList.remove(clickElem.classList)
      clickElem.textContent=""
        //   console.log('la case vide est en dessous')
      
  }else if (elemY==voidY && elemX-1===voidX){
       voidElem.classList.add(clickElem.classList)
      voidElem.textContent= clickElem.textContent
      
      clickElem.classList.remove(clickElem.classList)
      clickElem.textContent=""
    //   console.log('la case vide est au dessus')
      
  }else {
      return "nope"
  }
    
    
    
}

function chooseAsquare() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let tab = []
    let x = getRandomInt(8)
    let y = getRandomInt(2)
    // console.log(x, y)
    tab.push(x)
    tab.push(y)
    
    return x
}

