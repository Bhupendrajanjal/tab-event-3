const cl = console.log;
const tabcontrol = document.getElementById('tabcontrol')
const tabheadding = [...document.querySelectorAll('.tabHeading > li')]
const tabcontent = [...document.querySelectorAll('.tabcontent')]

const onhandClick = (eve)=>{
    cl(eve.target)
    let getid = eve.target.getAttribute('data-id')
    cl(getid)

    tabcontent.forEach(tab=>{
        tab.classList.remove("active")
    } )
    document.getElementById(getid).classList.add('active')
}


tabheadding.forEach(ele=> {
    ele.addEventListener("click",onhandClick)
});

cl(tabheadding)
