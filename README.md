# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add your _Team Lead_ as collaborator on Github.
- [x] Clone your forked version of the Repository.
- [x] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [x] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is the purpose of using _sessions_?

> Sessions are a method to store data in a unique way that can persist state information over multiple pages. Sessions are unique to the individual user, usually accosiated with some kind of login and user management system (such as databases). Sessions are usually sent to the browser via cookies. Cookies can be checked to verify existing session data (such as testing to see if the user is logined in).

- [x] What does bcrypt do to help us store passwords in a secure manner?

> The module called `bcrypt` can be used as a method of authentication. This tool has features that include: password hashing, comparing hashed passwords, implement salting, and accumulative hashing rounds. These tools can be used to secure passwords, so that the user's password is never actually stored anywhere in the site. This helps to prevent password theft. Bcrypt can be used to first hash a password, as well as compare the hashed password to verify it matches. One of the best security measures this solves, is that wiht bcrypt the password hash cannot be un-done. There is no way to directly get the password back.

- [x] What does bcrypt do to slow down attackers?

> One of the features of `bcrypt` is that you can use `accumulative hashing rounds`. This rehashes the password multiple times, therefore taking longer to process. It does increase the time to login, but also increases the time it takes for a hacker to attempt to try multiple passwords. Therefore things such as Rainbow Table Attacks would take longer to test different passwords attempting to reverse hash.

- [x] What are the three parts of the JSON Web Token?

> JSON Web Token consist of: a Header, a Payload, and a Signature

> - Header: declares the type and the hashing algorithm to use.
> - Payload: this is the bulk of the token including the content such as issuer of the token, subject of the token, expiration, etc.
> - Signature: this is a hash of the header, payload, and secret.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [x] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [x] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [x] Write a **minimum of 2 tests** per API endpoint. Write more tests if you have time.

** I did tests inside users-model.test.js, seemed to be a more direct way to test API endpoint. I am not sure if this is enough.**

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
