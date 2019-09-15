## Self-Study/Essay Questions

- [x] What is the purpose of using _sessions_?

> Sessions are a method to store data in a unique way that can persist state information over multiple pages. Sessions are unique to the individual user, usually accosiated with some kind of login and user management system (such as databases). Sessions are usually sent to the browser via cookies. Cookies can be checked to verify existing session data (such as testing to see if the user is logined in).

- [x] What does bcrypt do to help us store passwords in a secure manner?

> The module called `bcrypt` can be used as a method of authentication. This tool has features that include: password hashing, comparing hashed passwords, implement salting, and accumulative hashing rounds. These tools can be used to secure passwords, so that the user's password is never actually stored anywhere in the site. This helps to prevent password theft. Bcrypt can be used to first hash a password, as well as compare the hashed password to verify it matches. One of the best security measures this solves, is that wiht bcrypt the password hash cannot be un-done. There is no way to directly get the password back.

- [x] What does bcrypt do to slow down attackers?

> One of the features of `bcrypt` is that you can use `accumulative hashing rounds`. This rehashes the password multiple times, therefore taking longer to process. It does increase the time to login, but also increases the time it takes for a hacker to attempt to try multiple passwords. Therefore things such as Rainbow Table Attacks would take longer to test different passwords attempting to reverse hash.

- [ ] What are the three parts of the JSON Web Token?