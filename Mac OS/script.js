let applelogo = document.getElementsByClassName("applelogo")[0]
let appleoptions = document.getElementsByClassName("appleoptions")[0]
let file = document.getElementsByClassName("file")[0]
let filemenu = document.getElementsByClassName("filemenu")[0]
let ccicon = document.getElementsByClassName("ccicon")[0]
let controlcenter = document.getElementsByClassName("controlcenter")[0]
let edit = document.getElementsByClassName("edit")[0]
let editmenu = document.getElementsByClassName("editmenu")[0]
let go = document.getElementsByClassName("go")[0]
let gomenu = document.getElementsByClassName("gomenu")[0]
let finder1 = document.getElementsByClassName("finder1")[0]
var  dt = new Date();
document.getElementById('time').innerHTML=dt;


applelogo.addEventListener("click", ()=>{
if(appleoptions.style.top == "35px")
{
    appleoptions.style.top = "-320px" 

}
else
{
    appleoptions.style.top = "35px"
    filemenu.style.top = "-400px"
    editmenu.style.top = "-560px" 
    gomenu.style.top = "-460px" 
}
})

finder1.addEventListener("click", ()=>{
        appleoptions.style.top = "-320px"
        filemenu.style.top = "-400px"
        editmenu.style.top = "-560px" 
        gomenu.style.top = "-460px" 
    })

    // body.addEventListener("click", ()=>{
    //     appleoptions.style.top = "-320px"
    //     filemenu.style.top = "-400px"
    //     editmenu.style.top = "-560px" 
    //     gomenu.style.top = "-460px" 
    // })
//     view.addEventListener("click", ()=>{
//         appleoptions.style.top = "-320px"
//         filemenu.style.top = "-400px"
//         editmenu.style.top = "-560px" 
//         gomenu.style.top = "-460px" 
//     })
// tools.addEventListener("click", ()=>{
//         appleoptions.style.top = "-320px"
//         filemenu.style.top = "-400px"
//         editmenu.style.top = "-560px" 
//         gomenu.style.top = "-460px" 
//     })
// window.addEventListener("click", ()=>{
//         appleoptions.style.top = "-320px"
//         filemenu.style.top = "-400px"
//         editmenu.style.top = "-560px" 
//         gomenu.style.top = "-460px" 
//     })
// help.addEventListener("click", ()=>{
//         appleoptions.style.top = "-320px"
//         filemenu.style.top = "-400px"
//         editmenu.style.top = "-560px" 
//         gomenu.style.top = "-460px" 
//     })

file.addEventListener("click", ()=>{
    if(filemenu.style.top == "35px")
    {
        filemenu.style.top = "-400px" 
    }
    else
    {
        filemenu.style.top = "35px"
        appleoptions.style.top = "-320px"
        editmenu.style.top = "-560px" 
        gomenu.style.top = "-460px" 
    }})
    
    edit.addEventListener("click", ()=>{
        if(editmenu.style.top == "35px")
        {
            editmenu.style.top = "-560px" 
        }
        else
        {
            editmenu.style.top = "35px"
            filemenu.style.top = "-400px"
            appleoptions.style.top = "-320px"
            gomenu.style.top = "-460px"
        }
        }
        )

        go.addEventListener("click", ()=>{
            if(gomenu.style.top == "35px")
            {
                gomenu.style.top = "-460px" 
            }
            else
            {
                gomenu.style.top = "35px"
                filemenu.style.top = "-400px"
                appleoptions.style.top = "-320px"
                editmenu.style.top = "-560px"
            }
            }
            )

ccicon.addEventListener("click", ()=>{
    if(controlcenter.style.top == "35px"){
        controlcenter.style.top = "-500px" 
    }
    else
    {
            controlcenter.style.top = "35px"
    }
    })
        
