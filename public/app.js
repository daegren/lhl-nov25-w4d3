const escape = (str) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const createPostElement = post => {
  return `
    <article class="post">
      <header>
        <h2>${escape(post.title)}</h2>
      </header>
      <main>
        <p>${escape(post.body)}</p>
      </main>
    </article>
  `;
  // return $('<article>').addClass('post').append(
  //   $('<header>').append(
  //     $('<h2>').text(post.title)
  //   ),
  //   $('<main>').append(
  //     $('<p>').text(post.body)
  //   )
  // );
};

const createPosts = posts => {
  posts.forEach(post => {
    $('#posts').append(createPostElement(post));
  });
};

const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  $.getJSON(url)
    .done(data => {
      createPosts(data);
    });
};

$(document).ready(() => {
  loadPosts();
});
