const mainMain = document.querySelector(".main")
const main = document.querySelector(".comments-container")
const userContainer = document.querySelector(".user-container")
const commentsContainer = document.querySelector(".comments-container-maybe")

fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    let stringlul = `
        <section class="post-comment post-new-comment">
            <form action="#" class="myForm">
                <textarea name="add-comment" id="add-comment" class="add-comment user-send-comment" placeholder="Add a comment..."></textarea>
                <button type="button" class="send-btn post-comment-btn">SEND</button>
            </form>
            <img class="profile-picture grid-pp user-profile-picture" src="${data.currentUser.image.png}" alt="Profile Picture">
            <p class="user-username hidden">${data.currentUser.username}</p>
        </section>
    `;
    userContainer.insertAdjacentHTML("beforeEnd", stringlul);
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
                                <svg class="upvote-svg" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                            <p class="upvote-downvote-number">${reply.score}</p>
                            <button class="downvote-btn">
                                <svg class="downvote-svg" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
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
                            <svg class="upvote-svg" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                        <p class="upvote-downvote-number">${reply.score}</p>
                        <button class="downvote-btn">
                            <svg class="downvote-svg" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
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
        let stringlullul = '';
        stringlullul += `
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
                        <svg class="upvote-svg" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                        </svg>
                    </button>
                    <p class="upvote-downvote-number">${comment.score}</p>
                    <button class="downvote-btn">
                        <svg class="downvote-svg" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
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
        commentsContainer.insertAdjacentHTML("beforeEnd", stringlullul);
        repliesOut = "";
    }
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

let clicked = -1;

document.addEventListener('click', function (event) {
	if (event.target.matches('.send-btn')) {
		console.log('A button as clicked.');
	}
});
document.addEventListener('click', function (event) {
	if (event.target.matches('.delete-btn')) {
		console.log('A button as clicked.');
	}
});

for(let i=0;i<replyCommentButton.length;i++) {

    replyCommentButton[i].addEventListener('click', () => {
        clicked = clicked + 1;
        const userUsername = document.querySelector(".user-username")
        const userProfilePicture = document.querySelector(".user-profile-picture")
        // const replyReply = document.querySelectorAll(".reply-reply-btn")

        let userUsernameValue = userUsername.innerHTML;
        let userPictureValue = userProfilePicture.src;
        let dud = addReply[i].value;
        let commentSplitNew = dud.split(" ");
        for(let j=0;j<commentSplitNew.length;j++) {
            if((commentSplitNew[j].startsWith("@")) && (commentSplitNew[j].length > 1)) {
                commentSplitNew[j] = `<span class="at-span user-reply-at user-at-span user-at-span-new">${commentSplitNew[j]}</span>`;
            }
        }
        let dudFinal = commentSplitNew.join(" ");
        let appendReply;
        appendReply = document.createElement('div');
        replyTextArea[i].classList.add("hidden");
        commentReply[i].classList.remove("hidden");
        appendReply.innerHTML += `
        <section class="comment-section reply-comment user-comment user-comment-new user-posted-reply">
                    <div class="comment-box user-comment-box">
                        <div class="comment user-comment-grid user-comment-grid-new">
                            <div class="comment-info">
                                <img class="profile-picture" src="${userPictureValue}" alt="Profile Picture">
                                <p class="profile-name">${userUsernameValue}</p>
                                <p class="you">You</p>
                                <p class="time-posted">now</p>
                            </div>
                            <div class="comment-content user-comment-content">
                                <p class="edited-comment user-edited-comment edited-comment-new">
                                ${dudFinal}
                                </p>
                                <textarea name="edit-comment" id="edit-comment" class="add-comment edit-comment edit-comment-new hidden">

                                </textarea>
                            </div>
                            <button class="send-btn update-btn update-btn-new hidden">UPDATE</button>
                        </div>
                        <div class="upvote-downvote">
                            <button class="upvote-btn new-upvote-button ${clicked}">
                                <svg class="upvote-svg" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                            <p class="upvote-downvote-number new-updown-number ${clicked}">0</p>
                            <button class="downvote-btn new-downvote-button ${clicked}">
                                <svg class="downvote-svg" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                                </svg>
                            </button>
                        </div>
                        <div class="delete-edit">
                            <button class="delete-btn delete-btn-user delete-btn-new"><img src="images/icon-delete.svg" alt="Delete Icon"><span class="delete-span">Delete</span></button>
                            <button class="edit-btn user-edit-button edit-btn-new"><img src="images/icon-edit.svg" alt="Edit Icon"><span class="edit-span">Edit</span></button>
                        </div>
                    </div>
                </section>
        `;
        if(commentReply[i].parentNode.classList.contains('reply-comment')) {
            commentReply[i].parentNode.parentNode.appendChild(appendReply);
        } else {
            commentReply[i].appendChild(appendReply);
            console.log(commentReply[i].parentNode.parentNode);
        }
    })
}

let commentSectionNumber = 0;

upvotedownvoteButton();
function upvotedownvoteButton() {

    document.addEventListener('click', function (event) {
        if (event.target.matches('.upvote-svg')) {
            let upvoteParent = event.target.parentNode.parentNode;
            console.log(upvoteParent)
            const upDownNumberLul = upvoteParent.querySelector(".upvote-downvote-number")
            const downvoteButtonLul = upvoteParent.querySelector(".downvote-btn")
            const upvoteButtonLul = upvoteParent.querySelector(".upvote-btn")
            console.log(upDownNumberLul)
            console.log(downvoteButtonLul)
            console.log(upvoteButtonLul)
            let result = Number(upDownNumberLul.innerHTML);
            if(downvoteButtonLul.classList.contains("down-active")) {
                downvoteButtonLul.classList.remove("down-active");
                result = result + 2;
                upDownNumberLul.innerHTML = result.toString();
                upvoteButtonLul.classList.add("up-active")
            } else {
                if(upvoteButtonLul.classList.contains("up-active")) {
                    result = result - 1;
                    upDownNumberLul.innerHTML = result.toString();
                    upvoteButtonLul.classList.remove("up-active");
                } else {
                    result = result + 1;
                    upDownNumberLul.innerHTML = result.toString();
                    upvoteButtonLul.classList.add("up-active");
                }
            }
        }
    });
    document.addEventListener('click', function (event) {
        if (event.target.matches('.upvote-downvote')) {
            let downvoteParent = event.target.parentNode.parentNode;
            const upDownNumberLul = downvoteParent.querySelector(".upvote-downvote-number")
            const downvoteButtonLul = downvoteParent.querySelector(".downvote-btn")
            const upvoteButtonLul = downvoteParent.querySelector(".upvote-btn")
            let result = Number(upDownNumberLul.innerHTML);
            if(upvoteButtonLul.classList.contains("up-active")) {
                upvoteButtonLul.classList.remove("up-active");
                result = result - 2;
                upDownNumberLul.innerHTML = result.toString();
                downvoteButtonLul.classList.add("down-active")
            } else {
                if(downvoteButtonLul.classList.contains("down-active")) { 
                    result = result + 1;
                    upDownNumberLul.innerHTML = result.toString();
                    downvoteButtonLul.classList.remove("down-active");
                } else {
                    result = result - 1;
                    upDownNumberLul.innerHTML = result.toString();
                    downvoteButtonLul.classList.add("down-active");
                }
            }
        }
    });
}

document.addEventListener('click', function (event) {
	if (event.target.matches('.reply-p')) {
        let replyParent = event.target.parentNode.parentNode.parentNode;
        const replyTextAreaLul = replyParent.querySelector(".comment-reply-reply")
        const profileNameLul = replyParent.querySelector(".profile-name")
        const addReplyLul = replyParent.querySelector(".add-reply")
		replyTextAreaLul.classList.remove("hidden");
        let profileNameValue = profileNameLul.innerHTML;
        addReplyLul.value = `@${profileNameValue} `;
        addReplyLul.focus();
	}
});

let profileNameValue;
let userCommentValue;
editFunction();
function editFunction() {                                                                    // IZMENI

    document.addEventListener('click', function (event) {
        if (event.target.matches('.edit-span')) {
            let editParent = event.target.parentNode.parentNode.parentNode;
            const userAtSpanLul = editParent.querySelector(".user-at-span")
            const commentGridLul = editParent.querySelector(".user-comment-grid")
            const updateButtonLul = editParent.querySelector(".update-btn")
            const editedCommentLul = editParent.querySelector(".edited-comment")
            const editCommentLul = editParent.querySelector(".edit-comment")
            const userContentSpanLul = editParent.querySelector(".user-content-span")
            if(window.innerWidth < 700) {
                commentGridLul.style.marginBottom = "2rem";
                updateButtonLul.style.bottom = "3.5rem";
            }
            editedCommentLul.classList.add("hidden");
            editCommentLul.classList.remove("hidden");
            updateButtonLul.classList.remove("hidden");
            // console.log(editedCommentLul.);
            // profileNameValue = userAtSpanLul.innerHTML;
            // userCommentValue = userContentSpanLul.innerHTML;
            // editCommentLul.value = `${profileNameValue} ${userCommentValue} `;
            editCommentLul.value = editedCommentLul.textContent.trim();
            editCommentLul.focus();
        }
    });
}

document.addEventListener('click', function (event) {                                                              // IZMENI
	if (event.target.matches('.update-btn')) {
        let updateParent = event.target.parentNode.parentNode;
        const editedCommentLul = updateParent.querySelector(".edited-comment")
        const editCommentLul = updateParent.querySelector(".edit-comment")
        const userAtSpanLul = updateParent.querySelector(".user-at-span")
        const updateButtonLul = updateParent.querySelector(".update-btn")
		profileNameValue = "";
        userCommentValue = "";
        console.log(editCommentLul.value)
        let commentSplit = editCommentLul.value.split(" ");
        for(let j=0;j<commentSplit.length;j++) {
            if((commentSplit[j].startsWith("@")) && (commentSplit[j].length > 1)) {
                commentSplit[j] = `<span class="at-span user-reply-at user-at-span">${commentSplit[j]}</span>`;
            }
        }
        editedCommentLul.innerHTML = commentSplit.join(" ");
        editedCommentLul.classList.remove("hidden");
        updateButtonLul.classList.add("hidden");
        editCommentLul.classList.add("hidden");
	}
});

let ran = 0;
deleteFunction();
function deleteFunction() {
    document.addEventListener('click', function (event) {
        if (event.target.matches('.delete-span')) {
            blackBg.classList.remove("hidden");
            deleteComment.classList.remove("hidden");
            body.classList.add("overflow-none");
            commentSectionNumber = event.target.parentNode.parentNode.parentNode;
            console.log(commentSectionNumber)
        }
    });
    cancelButton.addEventListener('click', () => {
        blackBg.classList.add("hidden");
        deleteComment.classList.add("hidden");
        body.classList.remove("overflow-none");
    })
    deleteConfirmButton.addEventListener('click', () => {
        commentSectionNumber.classList.add("hidden");
        blackBg.classList.add("hidden");
        deleteComment.classList.add("hidden");
        body.classList.remove("overflow-none");
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
    // let commentSplitNew = dud.split(" ");
    // for(let j=0;j<commentSplitNew.length;j++) {
    //     if((commentSplitNew[j].startsWith("@")) && (commentSplitNew[j].length > 1)) {
    //         commentSplitNew[j] = `<span class="at-span user-reply-at user-at-span user-at-span-new">${commentSplitNew[j]}</span>`;
    //     }
    // }
    // let dudFinal = commentSplitNew.join(" ");
    let appendReply;
    appendReply = document.createElement('div');
    appendReply.innerHTML += `
    <section class="comment-section user-comment user-comment-new user-posted-reply">
        <div class="comment-box user-comment-box">
            <div class="comment user-comment-grid user-comment-grid-new">
                <div class="comment-info">
                    <img class="profile-picture" src="${userPictureValue}" alt="Profile Picture">
                    <p class="profile-name">${userUsernameValue}</p>
                    <p class="you">You</p>
                    <p class="time-posted">now</p>
                </div>
                <div class="comment-content user-comment-content">
                    <p class="edited-comment user-edited-comment edited-comment-new">
                    <span class="at-span user-reply-at user-at-span user-at-span-new"></span> <span class="user-comment-content-p user-content-span user-content-span-new">${dud}</span>
                    </p>
                    <textarea name="edit-comment" id="edit-comment" class="add-comment edit-comment edit-comment-new hidden">

                    </textarea>
                </div>
                <button class="send-btn update-btn update-btn-new hidden">UPDATE</button>
            </div>
            <div class="upvote-downvote">
                <button class="upvote-btn new-upvote-button">
                    <svg class="upvote-svg" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                    </svg>
                </button>
                <p class="upvote-downvote-number new-updown-number">0</p>
                <button class="downvote-btn new-downvote-button">
                    <svg class="downvote-svg" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                    </svg>
                </button>
            </div>
            <div class="delete-edit">
                <button class="delete-btn delete-btn-user delete-btn-new"><img src="images/icon-delete.svg" alt="Delete Icon"><span class="delete-span">Delete</span></button>
                <button class="edit-btn user-edit-button edit-btn-new"><img src="images/icon-edit.svg" alt="Edit Icon"><span class="edit-span">Edit</span></button>
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
