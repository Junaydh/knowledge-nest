$(() => {
    $.ajax({
      method: 'GET',
      url: `/api/profile`
    })
    .done((response) => {
      const $profileContainer = $('#profile-container');

        const $returnValue =
          $(`<form id="edit-profile-form">
            <h1>Welcome to your Profile Page, ${response.username}!</h1>
            <div id="full-profile">

              <div id="profile-info">
                <h2>Profile Information</h2>
                <label>Username: </label>
                <input type="text" name="username" value="${response.username}" required>
                <label>First Name: </label>
                <input type="text" name="firstName" value="${response.first_name}" required>
                <label>Last Name: </label>
                <input type="text" name="lastName" value="${response.last_name}" required>
                <label>Email: </label>
                <input type="email" name="email" value="${response.email}" required>
              </div>

              <div id="aboutme-profile_pic">
                <img src=${response.profile_pic}>
                <label>Profile Picture URL: </label>
                <input type="text" name="profilePic" value="${response.profile_pic}" required>

              </div>

            </div>
            <button method="POST" action="/profile" type="submit">Update Profile</button>
          </form`);



    $returnValue.on('submit', (event) => {
      event.preventDefault();


      const formData = {
        username: $('[name="username"]').val(),
        firstName: $('[name="firstName"]').val(),
        lastName: $('[name="lastName"]').val(),
        email: $('[name="email"]').val(),
        profilePic: $('[name="profilePic"]').val(),
      };


      $.ajax({
        method: 'POST',
        url: '/profile',
        data: formData
      })
      .done((response) => {
        console.log(response);
        alert('Profile updated successfully!');
      })
      .fail((err) => {
        console.error(err.message);
        alert('Failed to update profile.');
      });
    });

    $profileContainer.append($returnValue);
  })
  .catch((err) => {
    console.error(err.message);
  });
});

