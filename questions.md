## Self-Study/Essay Questions

- [x] What is the purpose of using _sessions_?

> Sessions are a method to store data in a unique way that can persist state information over multiple pages. Sessions are unique to the individual user, usually accosiated with some kind of login and user management system (such as databases). Sessions are usually sent to the browser via cookies. Cookies can be checked to verify existing session data (such as testing to see if the user is logined in).

- [x] What does bcrypt do to help us store passwords in a secure manner.

> The module called `bcrypt` can be used as a method of authentication. This tool has features that include: password hashing, comparing hashed passwords, implement salting, and accumulative hashing rounds. These tools can be used to secure passwords, so that the user's password is never actually stored anywhere in the site. This helps to prevent password theft. Bcrypt can be used to first hash a password, as well as compare the hashed password to verify it matches. One of the best security measures this solves, is that wiht bcrypt the password hash cannot be un-done. There is no way to directly get the password back.

- [ ] What does bcrypt do to slow down attackers?

- [ ] What are the three parts of the JSON Web Token?