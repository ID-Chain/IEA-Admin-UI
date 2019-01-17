# Indy Agent Admin Portal

## Development guidelines

We will be using the [GitHub Flow](https://guides.github.com/introduction/flow/) branching model. For more detail, see <https://githubflow.github.io/>.

This set of guidelines is aimed at making visible what everyone is doing and at keeping the master branch pristine, while not getting in the way as much as Git Flow. There are always exceptions possible to these guidelines. Use your own discretion.

Guidelines summary:

- The master branch is pristine. This means it is stable and never broken. Don't commit to master directly, ever.
- Create a feature branch for everything you are working on: `feature/[branchname]`. When in doubt if it is worth creating a branch for something, create a branch. Push your branch to remote frequently for backup purposes.
- In principle, create a PR for every feature branch you want to merge to master. This makes it easy to discuss branches and comment on the code in the Gitlab UI if needed. For this reason, it is preferred not to merge branches locally without a PR.
- All code on the master branch must have been reviewed. For each PR, assign at least one reviewer. Do not merge a PR until it has been approved by all reviewers.
- Before creating or merging a PR, make sure that your branch builds and successfully runs the test suites. Make sure the build and the tests run successfully from the command line, not just from your IDE.
- For a pleasant PR workflow, keep your feature branch up to date by rebasing it on master frequently. This will make merges seamless. It is the responsibility of the PR/branch creator to ensure that it merges successfully. See [How to Rebase a Pull Request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request).
- Before merging, squash your commit history to remove useless WIP commits; see the [Beginner's Guide to Squashing Commits with Git Rebase](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec#.e2qg7nb62).
- Make your commit messages descriptive and stick to the format described in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit).

## Project setup
```
npm install
```

## Run using NGNIX

> Remember to cp the env-example to .env and adjust the environment variables
```bash
cp env-example .env
```

### Build and run the image

```bash
docker-compose up --build
```

### Stop the image and remove volumes

```bash
docker-compose down -v
```

### Compiles and hot-reloads for development

> The serve uses a middleware proxy to re-direct calls to the api, as it would work using the NGNIX in production
> It also starts a Stub service for all endpoints in /api/schema

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
