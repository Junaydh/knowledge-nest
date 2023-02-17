// Client facing scripts here

$(() => {
  var n = window.location.pathname.lastIndexOf('/');
  var result = window.location.pathname.substring(n + 1);

  $.ajax({
    method: 'GET',
    url: '/api/resources/' + result + '/comments'
  })
  .done((response) => {
    const $commentList = $('#comments-container');
    $commentList.empty();

    console.log('RESPONSE:', response);

    for (const comment of response) {
      console.log(comment)
      let $comment = $(`
      <article class="comment">
        <header class="comment-header">
          <div class="user-profile">
            <img class="profile-picture" src="${comment.profile_pic}"></img>
            <h4 class="user-username">${comment.username}</h4>
          </div>
        </header>
        <div class="comment-text">
          ${comment.text}
        </div>
        <footer class="comment-footer">
          <span class="comment-date">${timeago.format(comment.created_at)}</span>
        </footer>
      </article>`);
      $commentList.prepend($comment);

    }
  })
  .catch(err => {
    console.log("AJAX FAILED")
    console.error(err);
    res.send(err);
  });


  $('#new-comment-form').submit( function(event) {

    event.preventDefault();


    //text area words input
    var text = $('#comment-post-text').val();

    if (text.length > 0) {
      $('.new-comment').css('border', '1px solid #e1e1e1')
      console.log(text)
    } else {
      $('.new-comment').css('border', '3px solid #ff0000')
      return;
    }

    $.post(this.action, {text, userID: 1}, (data, textStatus) => {
      console.log({data, textStatus})
    })

    //remove text
    $('#comment-post-text').val("");
  })


});

      // const $returnValue =
      //   $(`<article id="owned">
      //     <header class="owned-resources">
      //       <div id="resource-img">
      //         <img src="${resource.img_url}"></img>
      //         <h4>${resource.title}</h4>
      //       </div>
      //       <div id="resource-url">
      //       <h4><a class="resource-link" href="${resource.resource_url}">Click here to go to link!</a></h4>
      //       </div>
      //     </header>

      //     <div class="resource-description">
      //     <span>${resource.description}</span>
      //     </div>

      //     <footer class="footer-icons">
      //       <span id="icons"><i class="fa-solid fa-heart"></i> <i class="fa-solid fa-comment"></i> <i class="fa-solid fa-star"></i></span>
      //     </footer>
      //     </article>`);
      // $resourceList.prepend($returnValue);


// $(() => {

//   //renders existing comments using ajax promise
//   const loadComments = function () {
//     $.ajax("/").then(function (comment) {
//       renderComments(comment);
//     });
//   };

//   loadComments();
//   $(".error").hide();

//   const renderComments = function (comments) {
//     $("#comments-container").empty();
//     for (const item of comments) {
//       const commentElement = createCommentElement(item);
//       $("#comments-container").prepend(commentElement);
//     }
//   };

//   const escape = function(str) {
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(str));
//     return div.innerHTML;
//   };

//   loadComments();
//   $(".text-error").hide();

//   const createCommentElement = function(comment) {
//     let $comment = $(`
//       <article class="comment">
//         <header class="comment-header">
//           <div class="user-profile">
//             <img class="profile-picture" src="${comment.user.profile_picture}"></img>
//             <h4 class="user-username">${comment.user.username}</h4>
//           </div>
//         </header>
//         <div class="comment-text">
//           ${escape(comment.content.text)}
//         </div>
//         <footer class="comment-footer">
//           <span class="comment-date">${timeago.format(comment.created_at)}</span>
//         </footer>
//       </article>`);
//     return $comment;
//   };

  // $("#new-comment-form").submit(function(event) {
  //   event.preventDefault();
  //   const $textLength = $(this).find("#comment-text").val().length;

  //   //checks for an error and sends commands to summon and error message
  //   if (!$textLength) {
  //     $(".text-error").text("Your comment is too short!");
  //     $(".text-error").slideDown("slow");
  //     $(".text-error").delay(2500).slideUp("slow");
  //   } else if ($textLength > 140) {
  //     $(".text-error").text("Your comment is too long!");
  //     $(".text-error").slideDown("slow");
  //     $(".text-error").delay(2500).slideUp("slow");
  //   } else { //ajax promise fetches comments
  //     $.ajax("/egg/:resourceID", {
  //       method: "POST",
  //       data: $(this).serialize(),
  //     }).then(() => {
  //       loadComment();
  //       $("#comment-text").val("");
  //       $(".counter").text(140);
  //     });
  //   }
  // });

//});

//=================

//
// $(() => {
//   $('#fetch-resource').on('click', () => {
//     //var n = window.location.pathname.lastIndexOf('/');
//     //var result = window.location.pathname.substring(n + 1);
//     $.ajax({
//       method: 'GET',
//       url: '/api/egg/:resourceID'// + result
//     })
//     .done((response) => {
//       const $resourceList = $('#resource-post');
//       $resourceList.empty();
//       console.log(response)
//       for(const resource of response.resources) {
//         $(`<li class="resource">`).text(resource.title).appendTo($resourceList);
//       }
//     });
//   });
// });


// Client facing scripts here

// const createResourceElement = function(data) {
//   const $link = `
  //   <section class="resource-container">
  //   <article class="resource-listing">
  //     <section class="resource-preview-image">
  //       <img src="${data.img_url}">
  //     </section>
  //     <section class="resource-details">
  //       <header>
  //         <a class="resource-link" href="${data.resource_url}">Click here to go to link!</a>
  //         <div class="resource-rating">${data.average_rating}/5</div>
  //       </header>
  //       <h3 class="resource-title"><a href="/egg/${data.id}">${data.title}</a></h3>
  //       <div class="resource-description">description</div>
  //       <footer>
  //         <div class="resource-tag-container" id="${data.id}">
  //         </div>
  //       </footer>
  //     </section>
  //   </article>
  // </section>
//   `
//   return $link;
// }

// const createTagElement = function(data) {
//   const $tag = `
//     <button><a>${data.name}</a></button>
//   `
//   return $tag;
// }

// const renderResources = function(resources) {
//   let container = $('#resource-container')
//   for (const resource of resources) {
//     let ret = createResourceElement(resource);
//     container.prepend(ret);
//   }
// }

// const renderTags = function(tags) {
//   console.log(tags);
//   for (const tag of tags) {
//     let id = tag.resource_id;
//     let container = $(`#${id}`);
//     let ret = createTagElement(tag)
//     container.append(ret);
//   }
// }

// const fetchResources = function() {
//   $.getJSON('/api/resources', (data) => {
//     renderResources(data);
//     fetchTags();
//   })
// }

// const fetchTags = function() {
//   $.getJSON('/api/tags', (data) => {
//     renderTags(data);
//   })
// }

// $(document).ready(() => {
//   fetchResources();
// })
