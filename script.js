var arr=[{dp:"https://images.unsplash.com/photo-1635521071003-d9a00f967e0b?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1628657487151-055f43d70667?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://plus.unsplash.com/premium_photo-1673883777252-c1c99fcb8274?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1635521248661-97f832387a70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1707496907488-155e986d2c7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1628657485502-38a19243392b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,img:"https://images.unsplash.com/photo-1701629988634-af6b60609a9a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var temp="";

arr.forEach(function(val,index){
    temp+=`
    <div class="story">
        <img id=${index} src="${val.dp}" alt="">
    </div>`
})
document.querySelector("#storiya").innerHTML=temp

var grow=0;
document.querySelector("#storiya").addEventListener("click",function(details){
    
    document.querySelector("#fullscr").style.display="block"   
    document.querySelector("#fullscr").style.backgroundImage=`url(${arr[details.target.id].img})` 

    setTimeout(function(){ 
        document.querySelector("#fullscr").style.display="none"
    },3000)
    //we use set interval function tu make the line effect
    if(grow<10){
    setInterval(function(){
        document.querySelector("#growth").style.width=`${grow}%`;
        grow++;
    },30)
    }
    else {
        grow=0;
    }
})
document.querySelector("#fullscr").addEventListener("click",function(){
    document.querySelector("#fullscr").style.display="none"
})
