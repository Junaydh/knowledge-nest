// Client facing scripts here

$(() => {
  var n = window.location.pathname.lastIndexOf('/');
  var result = window.location.pathname.substring(n + 1);

  $.ajax({
    method: 'GET',
    url: '/api/resources/' + result
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

});
