$(() => {
  $('#owned-btn').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/resources/owned/1'
    })
    .done((response) => {
      const $resourceList = $('#resources-container');
      $resourceList.empty();

      console.log('RESPONSE:', response);

     for (const resource of response) {
        const $returnValue =
          $(`<article id="owned">
            <header class="owned-resources">
              <div id="resource-img">
                <img src="${resource.img_url}"></img>
                <h4>${resource.title}</h4>
              </div>
              <div id="username">
              <h4>${resource.resource_url}</h4>
              </div>
            </header>
            <div class="tweet-content">
            <span>${resource.description}</span>
            </div>
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
      url: '/api/resources/liked/1'
    })
    .done((response) => {
      const $resourceList = $('#resources-container');
      $resourceList.empty();
      console.log('RESPONSE:', response);

    for (const resource of response) {
      const $returnValue =
        $(`<article id="liked">
          <header class="owned-resources">
            <div id="resource-img">
              <img src="${resource.img_url}"></img>
            </div>
            <h4>${resource.title}</h4>
            <div id="username">
              <h4>${resource.resource_url}</h4>
            </div>
          </header>
            <div class="tweet-content">
            <span>${resource.description}</span>
            </div>
            </article>`);
        $resourceList.prepend($returnValue);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  });
});
