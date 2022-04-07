document.body.innerHTML =`
<div id="main-container">
        <div id="left-container">
        
          <div id="newPost" class="container">
            
            <form class="newPostContent">
              <h1>Add New Post</h1>
              <input type="text" placeholder="Enter title here" id="post-title" />
  
              <input
                type="text"
                placeholder="Enter category here"
                id="post-category"
              />
  
              <textarea placeholder="Add content..." id="post-content"></textarea>
  
              <button type="button" id="publish-btn">publish</button>
            </form>
          </div>
        </div>
  
        <div id="middle-container">
        
          <div id="relatedPosts" class="container">
            
            <div class="bar title-bar">
              <h2>Posts for review:</h2>
            </div>
  
            <h3 id="reviewed-msg">There are no posts for approval yet.</h3>
   <ul id="review-list">

   </ul>
   
  </div>
    <div id="published-container">        
      <div class="container">      
         <div class="bar title-bar">
            <h2>Uploaded posts:</h2>
          </div>
                <h3 id="approved-msg">There are no active posts.</h3>
    <ul id="published-list">
      
    </ul>              
    <button id="clear-btn" >Clear</button>
        </div>
      </div>
    <script src="./app.js"></script>
`
result();
const createPost = {
        title: () => document.getElementById("post-title"),
        category: () => document.getElementById("post-category"),
        content: () => document.getElementById("post-content"),
        addBtn: () => document.getElementById("publish-btn")
    }

  createPost.title().value = 'Exam completion'
  createPost.category().value = 'Exam'
  createPost.content().value = 'On the 06.04.2022 there will be exam that includes this problem'

  createPost.addBtn().click();

  expect((document.querySelector(".rpost>article>h4")).textContent).to.equal('Exam completion', 'Post title is invalid.');
expect((document.querySelectorAll(".rpost>article>p"))[0].textContent).to.equal('Category: Exam', 'Post category is invalid.');
expect((document.querySelectorAll(".rpost>article>p"))[1].textContent).to.equal('Content: On the 06.04.2022 there will be exam that includes this problem', 'Post content is invalid');

