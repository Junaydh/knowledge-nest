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
        <header>
          <a class="resource-link" href="${data.resource_url}">Click here to go to link!</a>
          <div class="resource-rating">${Math.round(data.avg_rating)}/5</div>
        </header>
        <h3 class="resource-title"><a href="/egg/${data.id}">${data.title}</a></h3>
        <div class="resource-description">description</div>
        <footer>
          <div class="resource-tag-container" id="${data.id}">
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

  $('.submit_on_enter').keydown(function(event) {
    if (event.keyCode == 13) {
      this.form.submit();
      return false;
    }
  });
})
