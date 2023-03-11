const mainMain = document.querySelector(".main")
const main = document.querySelector(".comments-container")
const userContainer = document.querySelector(".user-container")

fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    let commentsContainer;
    commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container-maybe');
    userContainer.innerHTML = `
        <section class="post-comment post-new-comment">
            <form action="#" class="myForm">
                <textarea name="add-comment" id="add-comment" class="add-comment user-send-comment" placeholder="Add a comment..."></textarea>
                <button type="button" class="send-btn post-comment-btn">SEND</button>
            </form>
            <img class="profile-picture grid-pp user-profile-picture" src="${data.currentUser.image.png}" alt="Profile Picture">
            <p class="user-username hidden">${data.currentUser.username}</p>
        </section>
    `;
    let out = "";
    let repliesOut = "";
    for (let comment of data.comments) {
        for (let reply of comment.replies) {
            if(data.currentUser.username === reply.user.username) {
                repliesOut += `
                <section class="comment-section reply-comment user-comment ${reply.id}">
                    <div class="comment-box user-comment-box">
                        <div class="comment user-comment-grid">
                            <div class="comment-info">
                                <img class="profile-picture" src="${reply.user.image.png}" alt="Profile Picture">
                                <p class="profile-name">${reply.user.username}</p>
                                <p class="you">You</p>
                                <p class="time-posted">${reply.createdAt}</p>
                            </div>
                            <div class="comment-content user-comment-content">
                                <p class="edited-comment">
                                <span class="at-span user-reply-at user-at-span">@${reply.replyingTo}</span> <span class="user-comment-content-p user-content-span">${reply.content}</span>
                                </p>
                                <textarea name="edit-comment" id="edit-comment" class="add-comment edit-comment hidden">

                                </textarea>
                            </div>
                            <button class="send-btn update-btn hidden">UPDATE</button>
                        </div>
                        <div class="upvote-downvote">
                            <button class="upvote-btn">
                                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                            <p class="upvote-downvote-number">${reply.score}</p>
                            <button class="downvote-btn">
                                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                        </div>
                        <div class="delete-edit">
                            <button class="delete-btn"><img src="images/icon-delete.svg" alt="Delete Icon"><span class="delete-span">Delete</span></button>
                            <button class="edit-btn"><img src="images/icon-edit.svg" alt="Edit Icon"><span class="edit-span">Edit</span></button>
                        </div>
                    </div>
                </section>
                `;
            } else {
            repliesOut += `
            <section class="comment-section reply-comment ${reply.id}">
                <div class="comment-box">
                    <div class="comment">
                        <div class="comment-info">
                            <img class="profile-picture" src="${reply.user.image.png}" alt="Profile Picture">
                            <p class="profile-name">${reply.user.username}</p>
                            <p class="time-posted">${reply.createdAt}</p>
                        </div>
                        <div class="comment-content">
                        <span class="at-span user-reply-at">@${reply.replyingTo}</span> <span class="user-comment-content-p">${reply.content}</span>
                        </div>
                    </div>
                    <div class="upvote-downvote">
                        <button class="upvote-btn">
                            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                        <p class="upvote-downvote-number">${reply.score}</p>
                        <button class="downvote-btn">
                            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                    </div>
                    <button class="reply-btn reply-reply-btn">
                        <img class="reply-icon" src="images/icon-reply.svg" alt="Reply Icon">
                        <p class="reply-p">Reply</p>
                    </button>
                </div>
                <div class="comment-reply-reply hidden">
                    <section class="post-comment">
                        <form action="#" class="myForm">
                            <textarea name="add-comment" id="add-comment" class="add-comment add-reply" placeholder="Add a comment..."></textarea>
                            <div class="form-btn-section">
                                <button type="button" class="send-btn reply-button">REPLY</button>
                                <button type="button" class="cancel-btn">Cancel</button>
                            </div>
                        </form>
                        <img class="profile-picture grid-pp" src="${reply.user.image.png}" alt="Profile Picture">
                    </section>
                </div>
                <div class="comment-reply">
                    
                </div>
            </section>
            `;
            }
        }
        commentsContainer.innerHTML += `
        <section class="comment-section main-comment ${comment.id}">
            <div class="comment-box">
                <div class="comment">
                    <div class="comment-info">
                        <img class="profile-picture" src="${comment.user.image.png}" alt="Profile Picture">
                        <p class="profile-name">${comment.user.username}</p>
                        <p class="time-posted">${comment.createdAt}</p>
                    </div>
                    <div class="comment-content">
                    <span class="at-span user-reply-at"></span><span class="user-comment-content-p">${comment.content}</span>
                    </div>
                </div>
                <div class="upvote-downvote">
                    <button class="upvote-btn">
                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                        </svg>
                    </button>
                    <p class="upvote-downvote-number">${comment.score}</p>
                    <button class="downvote-btn">
                        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                        </svg>
                    </button>
                </div>
                <button class="reply-btn">
                    <img class="reply-icon" src="images/icon-reply.svg" alt="Reply Icon">
                    <p class="reply-p">Reply</p>
                </button>
            </div>
            <div class="comment-reply-reply hidden">
                <section class="post-comment">
                    <form action="#" class="myForm">
                        <textarea name="add-comment" id="add-comment" class="add-comment add-reply" placeholder="Add a comment..."></textarea>
                        <div class="form-btn-section">
                            <button type="button" class="send-btn reply-button">REPLY</button>
                            <button type="button" class="cancel-btn">Cancel</button>
                        </div>
                    </form>
                    <img class="profile-picture grid-pp" src="${comment.user.image.png}" alt="Profile Picture">
                </section>
            </div>
            <div class="comment-reply">
                ${repliesOut}
            </div>
        </section>
        `;
        repliesOut = "";
    }
    mainMain.prepend(commentsContainer);
    // main.innerHTML = out;
}).then(function () {
    mainScript();
})

function mainScript() {
const deleteButton = document.querySelectorAll(".delete-btn")
const blackBg = document.querySelector(".black-bg")
const deleteComment = document.querySelector(".delete-comment-container")
const body = document.body;
const cancelButton = document.querySelector(".cancel")

const upvoteButton = document.querySelectorAll(".upvote-btn")
const downvoteButton = document.querySelectorAll(".downvote-btn")
const updownNumber = document.querySelectorAll(".upvote-downvote-number")

const replyButton = document.querySelectorAll(".reply-btn")
const replyTextArea = document.querySelectorAll(".comment-reply-reply")
const addReply = document.querySelectorAll(".add-reply")
const profileName = document.querySelectorAll(".profile-name")
const cancelCommentButton = document.querySelectorAll(".cancel-btn")
const deleteConfirmButton = document.querySelector(".delete")
const editButton = document.querySelectorAll(".edit-btn")

const commentSection = document.querySelectorAll(".comment-section")
const userComment = document.querySelectorAll(".user-comment")
const commentContent = document.querySelectorAll(".comment-content")
const userCommentContent = document.querySelectorAll(".user-comment-content")
const editComment = document.querySelectorAll(".edit-comment")
const userReplyAt = document.querySelectorAll(".user-reply-at")
const userCommentP = document.querySelectorAll(".user-comment-content-p")
const userAtSpan = document.querySelectorAll(".user-at-span")
const userContentSpan = document.querySelectorAll(".user-content-span")
const updateButton = document.querySelectorAll(".update-btn")
const commentGrid = document.querySelectorAll(".user-comment-grid")
const editedComment = document.querySelectorAll(".edited-comment")

const replyCommentButton = document.querySelectorAll(".reply-button")
const addComment = document.querySelectorAll(".add-comment")
const postComment = document.querySelectorAll(".post-comment")
const commentReply = document.querySelectorAll(".comment-reply")

const postNewComment = document.querySelector(".post-new-comment")
const sendButton = document.querySelector(".post-comment-btn")

for(let i=0;i<replyCommentButton.length;i++) {

    replyCommentButton[i].addEventListener('click', () => {
        const userUsername = document.querySelector(".user-username")
        const userProfilePicture = document.querySelector(".user-profile-picture")
        // const replyReply = document.querySelectorAll(".reply-reply-btn")

        let userUsernameValue = userUsername.innerHTML;
        let userPictureValue = userProfilePicture.src;
        let dud = addReply[i].value;
        let appendReply;
        appendReply = document.createElement('div');
        replyTextArea[i].classList.add("hidden");
        commentReply[i].classList.remove("hidden");
        appendReply.innerHTML += `
        <section class="comment-section reply-comment user-comment user-posted-reply">
                    <div class="comment-box user-comment-box">
                        <div class="comment user-comment-grid">
                            <div class="comment-info">
                                <img class="profile-picture" src="${userPictureValue}" alt="Profile Picture">
                                <p class="profile-name">${userUsernameValue}</p>
                                <p class="you">You</p>
                                <p class="time-posted">now</p>
                            </div>
                            <div class="comment-content user-comment-content">
                                <p class="edited-comment user-edited-comment">
                                <span class="at-span user-reply-at user-at-span"></span> <span class="user-comment-content-p user-content-span">${dud}</span>
                                </p>
                                <textarea name="edit-comment" id="edit-comment" class="add-comment edit-comment hidden">

                                </textarea>
                            </div>
                            <button class="send-btn update-btn hidden">UPDATE</button>
                        </div>
                        <div class="upvote-downvote">
                            <button class="upvote-btn">
                                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                            <p class="upvote-downvote-number">0</p>
                            <button class="downvote-btn">
                                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                        </div>
                        <div class="delete-edit">
                            <button class="delete-btn delete-btn-user"><img src="images/icon-delete.svg" alt="Delete Icon"><span class="delete-span">Delete</span></button>
                            <button class="edit-btn user-edit-button"><img src="images/icon-edit.svg" alt="Edit Icon"><span class="edit-span">Edit</span></button>
                        </div>
                    </div>
                </section>
        `;
        commentReply[i].appendChild(appendReply);
    })
}

let commentSectionNumber = 0;

upvotedownvoteButton();
function upvotedownvoteButton() {
    const upvoteButton = document.querySelectorAll(".upvote-btn")
    const downvoteButton = document.querySelectorAll(".downvote-btn")
    const updownNumber = document.querySelectorAll(".upvote-downvote-number")
    
    for(let i=0;i<upvoteButton.length;i++) {
        upvoteButton[i].addEventListener('click', () => {
            let result = Number(updownNumber[i].innerHTML);
            if(downvoteButton[i].classList.contains("down-active")) {
                downvoteButton[i].classList.remove("down-active");
                result = result + 2;
                updownNumber[i].innerHTML = result.toString();
                upvoteButton[i].classList.add("up-active")
            } else {
                if(upvoteButton[i].classList.contains("up-active")) {
                    result = result - 1;
                    updownNumber[i].innerHTML = result.toString();
                    upvoteButton[i].classList.remove("up-active");
                } else {
                    result = result + 1;
                    updownNumber[i].innerHTML = result.toString();
                    upvoteButton[i].classList.add("up-active");
                }
            }
        })
    }
    for(let i=0;i<downvoteButton.length;i++) {
        downvoteButton[i].addEventListener('click', () => {
            let result = Number(updownNumber[i].innerHTML);
            if(upvoteButton[i].classList.contains("up-active")) {
                upvoteButton[i].classList.remove("up-active");
                result = result - 2;
                updownNumber[i].innerHTML = result.toString();
                downvoteButton[i].classList.add("down-active")
            } else {
                if(downvoteButton[i].classList.contains("down-active")) { 
                    result = result + 1;
                    updownNumber[i].innerHTML = result.toString();
                    downvoteButton[i].classList.remove("down-active");
                } else {
                    result = result - 1;
                    updownNumber[i].innerHTML = result.toString();
                    downvoteButton[i].classList.add("down-active");
                }
            }
        })
    }
}
for(let i=0;i<replyButton.length;i++) {
    replyButton[i].addEventListener('click', () => {
        replyTextArea[i].classList.remove("hidden");
        let profileNameValue = profileName[i].innerHTML;
        addReply[i].value = `@${profileNameValue} `;
        addReply[i].focus();
    })
}
// const containerMaybe = document.querySelector(".comments-container-maybe")

// const clickHandler = (ev) => {
//     const replayLol = document.querySelectorAll(".reply-btn")
//     console.log(replayLol)
//     for (const btn of replayLol) {
//         if(btn === ev.target) {
//             console.log("yay");
//         }
//     }
// }

containerMaybe.addEventListener('click', clickHandler);


let spanLenght;
let profileNameValue;
let userCommentValue;
editFunction();
function editFunction() {
    for(let i=0;i<editButton.length;i++) {
        editButton[i].addEventListener('click', () => {
            spanLenght = userAtSpan[i].innerHTML.length;
            if(window.innerWidth < 700) {
                commentGrid[i].style.marginBottom = "2rem";
                updateButton[i].style.bottom = "3.5rem";
            }
            editedComment[i].classList.add("hidden");
            editComment[i].classList.remove("hidden");
            updateButton[i].classList.remove("hidden");
            let editSplit;
            profileNameValue = userAtSpan[i].innerHTML;
            userCommentValue = userContentSpan[i].innerHTML;
            editComment[i].value = `${profileNameValue} ${userCommentValue} `;
            editComment[i].focus();
        })
    }
}
function userEditFunction() {
    const userEditButton = document.querySelectorAll(".user-edit-button")

    for(let i=0;i<editButton.length;i++) {
        userEditButton[i].addEventListener('click', () => {
            spanLenght = userAtSpan[i].innerHTML.length;
            if(window.innerWidth < 700) {
                commentGrid[i].style.marginBottom = "2rem";
                updateButton[i].style.bottom = "3.5rem";
            }
            editedComment[i].classList.add("hidden");
            editComment[i].classList.remove("hidden");
            updateButton[i].classList.remove("hidden");
            let editSplit;
            profileNameValue = userAtSpan[i].innerHTML;
            userCommentValue = userContentSpan[i].innerHTML;
            editComment[i].value = `${profileNameValue} ${userCommentValue} `;
            editComment[i].focus();
        })
    }
}
for(let i=0;i<updateButton.length;i++) {
    updateButton[i].addEventListener('click', () => {
        profileNameValue = "";
        userCommentValue = "";
        // editedComment[i].innerHTML = '';
        let commentSplit = editComment[i].value.split(" ");
        for(let j=0;j<commentSplit.length;j++) {
            if((commentSplit[j].startsWith("@")) && (commentSplit[j].length > 1)) {
                commentSplit[j] = `<span class="at-span user-reply-at user-at-span">${commentSplit[j]}</span>`;
            }
        }
        let stringSlice = editComment[i].value.slice(0, spanLenght);
        if(stringSlice.includes("@")) {
            userAtSpan[i].innerHTML = `${stringSlice}`;
            let editCommentSplit = editComment[i].value.replace(stringSlice,"");
            userContentSpan[i].innerHTML = editCommentSplit;
        } else {
            userAtSpan[i].innerHTML = "";
            let editCommentSplit = editComment[i].value;
            userContentSpan[i].innerHTML = editCommentSplit;
        }
        editedComment[i].innerHTML = commentSplit.join(" ");
        editedComment[i].classList.remove("hidden");
        updateButton[i].classList.add("hidden");
        editComment[i].classList.add("hidden");
    })
}
// function randomFunction() {
//     const replyComment = document.querySelectorAll(".user-posted-reply")
//         if(replyCommentButton[randomCounter].classList.contains("reply-reply-btn")) {
//             for(let k=0;k<replyComment.length;k++) {
//                 replyComment[k].classList.remove("reply-comment");
//             }
//     }
// }
let ran = 0;
deleteFunction();
function deleteFunction() {
    const deleteButton = document.querySelectorAll(".delete-btn")
    const userComment = document.querySelectorAll(".user-comment")
    console.log(deleteButton)

    for(let i=0;i<deleteButton.length;i++) {
        deleteButton[i].addEventListener('click', () => {
            blackBg.classList.remove("hidden");
            deleteComment.classList.remove("hidden");
            body.classList.add("overflow-none");
            commentSectionNumber = i;
            console.log(commentSectionNumber)
        })
    }
    cancelButton.addEventListener('click', () => {
        blackBg.classList.add("hidden");
        deleteComment.classList.add("hidden");
        body.classList.remove("overflow-none");
    })
    deleteConfirmButton.addEventListener('click', () => {
        userComment[commentSectionNumber].classList.add("hidden");
        blackBg.classList.add("hidden");
        deleteComment.classList.add("hidden");
        body.classList.remove("overflow-none");
        ran = ran + 1;
        console.log(ran)
    })
}
sendButton.addEventListener('click', () => {
    const userUsername = document.querySelector(".user-username")
    const userProfilePicture = document.querySelector(".user-profile-picture")
    const commentContainer = document.querySelector(".comments-container-maybe")
    const userSendComment = document.querySelector(".user-send-comment")
    // const replyReply = document.querySelectorAll(".reply-reply-btn")

    let userUsernameValue = userUsername.innerHTML;
    let userPictureValue = userProfilePicture.src;
    let dud = userSendComment.value;
    let appendReply;
    appendReply = document.createElement('div');
    appendReply.innerHTML += `
    <section class="comment-section reply-comment user-comment user-posted-reply">
                <div class="comment-box user-comment-box">
                    <div class="comment user-comment-grid">
                        <div class="comment-info">
                            <img class="profile-picture" src="${userPictureValue}" alt="Profile Picture">
                            <p class="profile-name">${userUsernameValue}</p>
                            <p class="you">You</p>
                            <p class="time-posted">now</p>
                        </div>
                        <div class="comment-content user-comment-content">
                            <p class="edited-comment user-edited-comment">
                            <span class="at-span user-reply-at user-at-span"></span> <span class="user-comment-content-p user-content-span">${dud}</span>
                            </p>
                            <textarea name="edit-comment" id="edit-comment" class="add-comment edit-comment hidden">

                            </textarea>
                        </div>
                        <button class="send-btn update-btn hidden">UPDATE</button>
                    </div>
                    <div class="upvote-downvote">
                        <button class="upvote-btn">
                            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                        <p class="upvote-downvote-number">0</p>
                        <button class="downvote-btn">
                            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                    </div>
                    <div class="delete-edit">
                        <button class="delete-btn delete-btn-user"><img src="images/icon-delete.svg" alt="Delete Icon"><span class="delete-span">Delete</span></button>
                        <button class="edit-btn user-edit-button"><img src="images/icon-edit.svg" alt="Edit Icon"><span class="edit-span">Edit</span></button>
                    </div>
                </div>
            </section>
    `;
    commentContainer.appendChild(appendReply);
    userSendComment.value = "";
})
for(let i=0;i<replyButton.length;i++) {
    cancelCommentButton[i].addEventListener('click', () => {
        replyTextArea[i].classList.add("hidden");
    })
}
}
