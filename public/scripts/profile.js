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
                <input type="text" name="username" id="username" value="${response.username}" required>
                <label>First Name: </label>
                <input type="text" name="firstName" id="firstName" value="${response.first_name}" required>
                <label>Last Name: </label>
                <input type="text" name="lastName" id="lastName" value="${response.last_name}" required>
                <label>Email: </label>
                <input type="email" name="email" id="email" value="${response.email}" required>
              </div>

              <div id="aboutme-profile_pic">
                <img src=${response.profile_pic}>
                <label>Profile Picture URL: </label>
                <input type="text" name="profilePic" id="profilePic" value="${response.profile_pic}" required>

              </div>

            </div>
            <button type="submit">Update Profile</button>
          </form`);


    $profileContainer.append($returnValue);



    $returnValue.on('submit', (event) => {
      event.preventDefault();


      const formData = {
        username: $('#username').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        profilePic: $('#profilePic').val(),
      };


      $.ajax({
        method: 'POST',
        url: '/profile',
        data: formData
      })
      .done((res) => {
        alert('Profile updated successfully!');

        const $returnUpdatedValue =
          $(`<form id="edit-profile-form">
            <h1>Welcome to your Profile Page, ${res.username}!</h1>
            <div id="full-profile">

              <div id="profile-info">
                <h2>Profile Information</h2>
                <label>Username: </label>
                <input type="text" name="username" id="username" value="${res.username}" required>
                <label>First Name: </label>
                <input type="text" name="firstName" id="firstName" value="${res.first_name}" required>
                <label>Last Name: </label>
                <input type="text" name="lastName" id="lastName" value="${res.last_name}" required>
                <label>Email: </label>
                <input type="email" name="email" id="email" value="${res.email}" required>
              </div>

              <div id="aboutme-profile_pic">
                <img src=${res.profile_pic}>
                <label>Profile Picture URL: </label>
                <input type="text" name="profilePic" id="profilePic" value="${res.profile_pic}" required>

              </div>

            </div>
            <button type="submit">Update Profile</button>
          </form`);

          $profileContainer.empty();
          $profileContainer.append($returnUpdatedValue);
      })
      .fail((err) => {
        console.error(err.message);
        alert('Failed to update profile.');
      });
    });

  })
  .catch((err) => {
    console.error(err.message);
  });
});

