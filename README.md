# tech-blog
This is a simulation of a social media blog where users can create posts and create comments on those posts.

# Installation
The app can be accessed at this deployed link [https://killingsworth-tech-blog.herokuapp.com/](https://killingsworth-tech-blog.herokuapp.com/). You can also fork the repo and download it locally; Once the repo has been forked and cloned you will need to run <code>npm i</code> to download the necessary packages, update your .env file, and run <code>node server.js</code> to start the server. 

# Usage
The app is not entirely finished but the most of the main functionality is there. 

On the homepage you will be able to view existing posts by existing users. If you try to click on the dashboard nav tab, you will be redirected to the login page. Likewise if you click directly on login you will be prompted to log in. 

The login and signup functionality both work and after entering your information you will be taken to the user's dashboard. If you would like to view an account with pre-seeded data you may use "admin" for the username and "password1!"  for the password. You are welcome to create your own account however the create new post functionality is not entirely working. The posts are sent to the back-end server correctly (this is able to be tested by adding /api/posts to see all posts in the database in JSON format). The caveat is that the UserId is not attached properly hence why they do not show up on the dashboard. 

On the homepage, if you click on a post, it will take you to that post's page where you will be able to see the post and look at pre-seeded comments related ot that post. Again, the create new comment functionality is not working at this time. 

The logout button should work from any page, but if it down not log you out, you can redirect back to the homepage and then it will definitely log you out of the site. 

# Contributions
Feel free to fork and clone the repo and suggest improvements. 

# Credits
I built the entirety of this app without any starter code, however I utilized resources from my coding bootcamp to help with the process. 

