// Client facing scripts here
$(() => {
  $('#fetch-resource').on('click', () => {
    //var n = window.location.pathname.lastIndexOf('/');
    //var result = window.location.pathname.substring(n + 1);
    $.ajax({
      method: 'GET',
      url: '/api/egg/:resourceID'// + result
    })
    .done((response) => {
      const $resourceList = $('#resource-post');
      $resourceList.empty();
      console.log(response)
      for(const resource of response.resources) {
        $(`<li class="resource">`).text(resource.title).appendTo($resourceList);
      }
    });
  });
});
