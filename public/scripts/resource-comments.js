// Client facing scripts here

// $(() => {

//   //renders existing tweets using ajax promise
//   const loadComments = function () {
//     $.ajax("/egg/:resourceID").then(function (comment) {
//       renderComments(comment);
//     });
//   };

//   loadComments();
//   $(".error").hide();

//   const renderComments = function (comments) {
//     $("#comments-container").empty();
//     for (const item of comments) {
//       const commentElement = createTweetElement(item);
//       $("#comments-container").prepend(commentElement);
//     }
//   };

// })








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