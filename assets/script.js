const searchMessenger = document.querySelector("#searchMessenger");
const usersContainer = document.querySelector("#usersContainer")
const userConvoSide = document.querySelector("#userConvoSide")




class showUser {
    constructor(profilePhoto, name, lastMessage) {
        this.profilePhoto = profilePhoto;
        this.name = name;
        this.lastMessage = lastMessage
    }

    displayUser(index) {
        let html = `
                <button id="user${index}" class="visible text-left bg-transparent h-[75px] w-[372px] rounded-[100px] flex items-center space-x-[15px]">
                    <div class="size-[75px] rounded-full"><img class="size-full rounded-full object-cover"
                            src="./assets/images/${this.profilePhoto}" alt=""></div>
                    <div class="font-bold">
                        <div class="text-[rgba(0,0,0,1)] text-[16px] leading-[22px] mb-[10px]">${this.name}</div>
                        <div
                            class="text-[rgba(105,105,105,1)] text-[11px] leading-[15px] whitespace-nowrap overflow-hidden max-w-[266px]">
                            ${this.lastMessage}</div>
                    </div>
                </button>
        `
        usersContainer.innerHTML += html
        var btnId = `user${index}`
        return btnId
        
    }


    
    displayConvo(i, visibility) {
        let html = `
    <div class="${visibility} mt-[40px] mx-[30px] w-full">
        <div class="flex items-center justify-between w-full mb-[6px]">
            <div class="flex space-x-[30px] items-center">
                <div class="size-[70px] whitespace-nowrap flex shrink-0"><img class="size-full rounded-full object-cover"
                        src="./assets/images/${this.profilePhoto}" alt=""></div>
                <div class="text-[#212121] font-bold text-[32px] leading-[44px]">${this.name}</div>
            </div>
            <div class="size-[27px]"><img class="size-full" src="./assets/images/video.svg" alt=""></div>
        </div>
        <div class="h-[830px] overflow-y-auto text-[16px] font-bold leading-[22px] text-white flex">
            
            <div id="convo${i}" class="self-end max-h-full w-full">
                <div class="flex gap-[15px] mb-[10px] flex-row-reverse">
                    <div class="size-[50px]"><img class="rounded-full object-cover size-full" src="./assets/images/pp.jpg" alt=""></div>
                    <div class="bg-[#476CFF] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">Hi, Mrs. Lilly</div>
                </div>
    
                <div class="flex space-x-[15px] mb-[10px]">
                    <div class="size-[50px]"><img class="rounded-full object-cover size-full" src="./assets/images/${this.profilePhoto}" alt=""></div>
                    <div class="bg-[#696969] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">Hey</div>
                </div>
    
                <div class="flex gap-[15px] mb-[10px] flex-row-reverse">
                    <div class="size-[50px] whitespace-nowrap flex shrink-0"><img class="rounded-full object-cover size-full" src="./assets/images/pp.jpg" alt=""></div>
                    <div class="bg-[#476CFF] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">Hello. Mrs. Lilly, i have a good idea how to create a music with help of our team. Can we meet up tomorrow near the bar to talk?</div>
                </div>
    
                <div class="flex space-x-[15px] mb-[10px]">
                    <div class="size-[50px]"><img class="rounded-full object-cover size-full" src="./assets/images/${this.profilePhoto}" alt=""></div>
                    <div class="bg-[#696969] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">${this.lastMessage}</div>
                </div>

            </div>
        </div>
        <div class="mt-[6px]">
            <input id="message${i}" type="text"
                class="outline-none placeholder:text-[rgba(33,33,33,0.85)] w-full h-[53px] bg-[#E2E2E2] text-[rgba(33,33,33,0.85)] font-bold text-[16px] leading-[22px] rounded-[30px] py-[14px] px-[20px]"
                placeholder="Message">
        </div>
    </div>
        `
        userConvoSide.innerHTML = html

        const ids = [`message${i}`, `convo${i}`]

        return ids
    }
    
    

    
}






function findSearchedUser() {
        searchMessenger.addEventListener('keyup', (event) => {
            if(event.keyCode === 13){
                for(let i = 0; i < Users.length; i++) {
                    if(Users[i].name.includes(searchMessenger.value)){
                        for(let j = 0; j < Users.length; j++) {
                            if(i != j) {
                                let button = document.querySelector(`#user${j}`)
                                button.classList.remove("show")
                                button.classList.add("hidden")
                            }
                            
                        }
                        
                    } 
                }
                
            }
            
        })
        
    }


findSearchedUser()

for(let index in Users) {
    const newUser = new showUser(Users[index].profilePhoto, Users[index].name, Users[index].lastMessage)
    newUser.displayUser(index)
    
    
} 

selectConversation()



function selectConversation() {
    for(let i = 0; i < Users.length; i++) {
        let button = document.querySelector(`#user${i}`)
        let newUser = new showUser(Users[i].profilePhoto, Users[i].name, Users[i].lastMessage)

        function function1() {
            if(!button.classList.contains("bg-[#476CFF]")) {
                for(let j = 0; j < Users.length; j++) document.querySelector(`#user${j}`).classList.remove("bg-[#476CFF]")
                button.classList.remove("bg-transparent")
                button.classList.add("bg-[#476CFF]")
            }
        }




        button.addEventListener('click', () => {
            let show = "show"
            let [msgId, convoId] = newUser.displayConvo(i, show)
            const msgInput = document.querySelector(`#${msgId}`)
            msgInput.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    console.log(msgInput.value)
                    let html = ''
                    html += `
                    <div class="flex gap-[15px] mb-[10px] flex-row-reverse">
                        <div class="size-[50px] whitespace-nowrap flex shrink-0"><img class="rounded-full object-cover size-full" src="./assets/images/pp.jpg" alt=""></div>
                        <div class="bg-[#476CFF] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">${msgInput.value}</div>
                    </div>
                    `
                    convoId.innerHTML = html
                }
            })

        function1()
        
    })
    }
    
}
/* <div class="flex gap-[15px] mb-[10px] flex-row-reverse">
                        <div class="size-[50px] whitespace-nowrap flex shrink-0"><img class="rounded-full object-cover size-full" src="./assets/images/pp.jpg" alt=""></div>
                        <div class="bg-[#476CFF] rounded-[30px] max-w-[450px] py-[11px] px-[18px]">${msgInput.value}</div>
                    </div> */