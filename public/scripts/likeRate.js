$(document).ready(function(e){
  $('#main-container').on('click','.fa-heart', function(e){
    const $resource = $(this).closest('.resource-container');
    const resourceId = $resource.find('.resource-tag-container').attr('id');
    console.log('RESOURCE ID:', resourceId);

    $.ajax({
      method: 'POST',
      url: '/api/likesratings/like',
      data: {resourceId: resourceId},
      success: function(result){
        // handle success case
      },
      error: function(err){
        console.error(err);
      }
    })
    .done(function() {
      const $resource = $(this).closest('.resource-container');
      const resourceId = $resource.find('.resource-tag-container').attr('id');
      $.ajax({
        method: 'GET',
        url: '/api/likesratings/' + resourceId,
        success:function(res) {
          console.log('GETTING', res)
          const likeCount = res;
          $resource.find('#total-likes').text(likeCount);
        }
      })
    .fail(function() {
      console.error('Error adding like');
    });
  });


    $('#main-container').on('click','#star1', function(e){
      const $resource = $(this).closest('.resource-container');
      const resourceId = $resource.find('.resource-tag-container').attr('id');

      $.ajax({
        method: 'POST',
        url: '/api/likesratings/rate1',
        data: {resourceId: resourceId},
        success: function(result){

        },
        error: function(err){

        }
      })
    });

  });

  $('#main-container').on('click','#star2', function(e){
    const $resource = $(this).closest('.resource-container');
    const resourceId = $resource.find('.resource-tag-container').attr('id');

    $.ajax({
      method: 'POST',
      url: '/api/likesratings/rate2',
      data: {resourceId: resourceId},
      success: function(result){

      },
      error: function(err){

      }
    })
  });

  $('#main-container').on('click','#star3', function(e){
    const $resource = $(this).closest('.resource-container');
    const resourceId = $resource.find('.resource-tag-container').attr('id');

    $.ajax({
      method: 'POST',
      url: '/api/likesratings/rate3',
      data: {resourceId: resourceId},
      success: function(result){

      },
      error: function(err){

      }
    })
  });


  $('#main-container').on('click','#star4', function(e){
    const $resource = $(this).closest('.resource-container');
    const resourceId = $resource.find('.resource-tag-container').attr('id');

    $.ajax({
      method: 'POST',
      url: '/api/likesratings/rate4',
      data: {resourceId: resourceId},
      success: function(result){

      },
      error: function(err){

      }
    })
  });


  $('#main-container').on('click','#star5', function(e){
    const $resource = $(this).closest('.resource-container');
    const resourceId = $resource.find('.resource-tag-container').attr('id');

    $.ajax({
      method: 'POST',
      url: '/api/likesratings/rate5',
      data: {resourceId: resourceId},
      success: function(result){

      },
      error: function(err){

      }
    })
  });
});
