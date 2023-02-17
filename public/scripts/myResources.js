$(() => {
  $('#owned-btn').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/myresources/owned/`
    })
    .done((response) => {
      const $resourceList = $('#resources-container');
      $resourceList.empty();

      //GREY OUT OTHER BUTTON
      const $ownedBtn = $('#owned-btn');
      $ownedBtn.removeClass('greyed-out');
      const $likedBtn = $('#liked-btn');
      $likedBtn.addClass('greyed-out');

      for (const resource of response) {
        const $returnValue =
          $(`<article class="myresource">
            <header class="owned-resources">
              <div id="resource-img">
                <img src="${resource.img_url}"></img>
                <h4>${resource.title}</h4>
              </div>
              <div id="resource-url">
              <h4><a class="resource-link" href="${resource.resource_url}">Go to page</a></h4>
              </div>
            </header>

            <div class="resource-description">
            <span>${resource.description}</span>
            </div>

            <footer class="footer-icons">
              <span id="icons"><i class="fa-solid fa-heart"></i> <i class="fa-solid fa-comment"></i> <i class="fa-solid fa-star"></i></span>
            </footer>
            </article>`);
        $resourceList.prepend($returnValue);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  });
});


$(() => {
  $('#liked-btn').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/myresources/liked/`
    })
    .done((response) => {
      const $resourceList = $('#resources-container');
      $resourceList.empty();

      //GREY OUT OTHER BUTTON
      const $likedBtn = $('#liked-btn');
      $likedBtn.removeClass('greyed-out');
      const $ownedBtn = $('#owned-btn');
      $ownedBtn.addClass('greyed-out');

      console.log('RESPONSE:', response);

      for (const resource of response) {
        const $returnValue =
          $(`<article class="myresource">
            <header class="owned-resources">
            <div id="resource-img">
              <img src="${resource.img_url}"></img>
            </div>
            <h4>${resource.title}</h4>
            <div id="resource-url">
            <h4><a class="resource-link" href="${resource.resource_url}">Go to page</a></h4>
            </div>
          </header>

            <div class="resource-description">
            <span>${resource.description}</span>
            </div>

          <footer class="footer-icons">
            <span id="icons"><i class="fa-solid fa-heart"></i> <i class="fa-solid fa-comment"></i> <i class="fa-solid fa-star"></i></span>
          </footer>
            </article>`);
        $resourceList.prepend($returnValue);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  });
});
