// /lib/marketing/blog/posts

export const getPosts = async () => {
  // Mock data with slugs for dynamic routing
  const posts = [
    {
      id: 1,
      slug: "first-post",
      title: "First Post",
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
      content:
        "This is the content of the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Etiam vel risus ac odio venenatis dapibus. Suspendisse potenti. Morbi consequat purus et nisl auctor, vitae gravida orci scelerisque.",
    },
    {
      id: 2,
      slug: "second-post",
      title: "Second Post",
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      content:
        "This is the content of the second post. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin volutpat risus nec leo vehicula, et fermentum ipsum bibendum. Ut et malesuada metus, sed pretium velit.",
    },
    {
      id: 3,
      slug: "third-post",
      title: "Third Post",
      image:
        "https://media.istockphoto.com/id/157681198/photo/dandelion-seed.jpg?s=612x612&w=0&k=20&c=TfhCtc_Y1oSpdlL7o6yo7BTfgnD0RCy6yF1SgvQO0Jk=",
      content:
        "This is the content of the third post. Sed id urna eget turpis luctus condimentum. Morbi vel leo malesuada, bibendum lorem nec, feugiat erat. Integer ultricies bibendum purus sit amet cursus. Duis interdum felis sit amet neque varius, sed volutpat purus accumsan.",
    },
  ];
  return posts;
};
