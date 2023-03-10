// Client facing scripts here

const createResourceElement = function(data) {
  if (!data.average_rating) {
    data.average_rating = 'None';
  }
  const $link = `
    <section class="resource-container">
    <article class="resource-listing">
      <section class="resource-preview-image">
        <img src="${data.img_url}">
      </section>
      <section class="resource-details">
        <header class="article-header">
          <a class="resource-link" href="${data.resource_url}">Click here to go to link!</a>
        </header>
        <h3 class="resource-title"><a href="/egg/${data.id}">${data.title}</a></h3>
        <div class="resource-description">${data.description}</div>
        <footer>
          <div class="resource-tag-container" id="${data.id}">
          </div>
          <div id="icons">
          <span><span id="total-likes">${data.total_likes} </span>   <i class="fa-solid fa-heart"></i></span>

          <div class="resource-rating">${Math.round(data.avg_rating)} / 5
            <span>  Rate:
                  <i id="star1" class="fa-solid fa-star"></i>
                  <i id="star2"class="fa-solid fa-star"></i>
                  <i id="star3"class="fa-solid fa-star"></i>
                  <i id="star4"class="fa-solid fa-star"></i>
                  <i id="star5"class="fa-solid fa-star"></i>
            </span>
          </div>
          </div>
        </footer>
      </section>
    </article>
  </section>
  `
  return $link;
}

const createTagElement = function(data) {
  const $tag = `
    <button><a>${data.name}</a></button>
  `
  return $tag;
}

const renderResources = function(resources) {
  let container = $('#main-container')
  for (const resource of resources) {
    let ret = createResourceElement(resource);
    container.prepend(ret);
  }
}

const renderTags = function(tags) {
  for (const tag of tags) {
    let id = tag.resource_id;
    let container = $(`#${id}`);
    let ret = createTagElement(tag)
    container.append(ret);
  }
}

const fetchResources = function() {
  $.getJSON('/api/resources', (data) => {
    renderResources(data);
    fetchTags();
  })
}

const fetchTags = function() {
  $.getJSON('/api/tags', (data) => {
    renderTags(data);
  })
}

$(document).ready(() => {
  fetchResources();

  $('#form-container').hide();

  $('#dropdown').on('click', function() {
    $('#form-container').slideToggle();
    });

})
