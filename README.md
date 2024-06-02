# bun-elysia-api

This project was created using `bun init` in bun v1.1.10. [Bun][11] is a fast all-in-one JavaScript runtime.

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg?style=flat-square)][2] [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][4] [![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg?style=flat-square)][3] [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?logo=conventional-commits&style=flat-square)][10]

## Install

`git clone https://github.com/roalcantara/bun-elysia-api`

### Dependencies

- [git][5]
- [ASDF][6]
- [Divenv][7]
- [pre-commit][8]
- [gitlint][9]
- [Docker][13]

### How to

```sh
mkdir -p ~/Work/bun/bun-elysia-api
cd ~/Work/bun/bun-elysia-api
bun init
bun add elysia
```

## Usage

```sh
Run `bun dev` to start the development server
Run `bun build` to build the project
Run `bun start` to start the production server
Run `bun test` to run the tests
Run `bun run docker:build` to build the docker image
Run `bun run docker:run` to run the docker container
Run `bun run docker:up` to build and run the docker container
Run `bun run docker:shutdown` to stop and remove the docker container
```

## Acknowledgements

- [Standard Readme][4]
- [Conventional Commits][10]
- [How to Master Bun Api | Tutorial][12]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][3] rules.
- Everyone interacting in the project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/bun-elysia-api 'A simple bun project for Elysia API'
[1]: https://opensource.org/licenses/MIT 'Open Source Initiative'
[2]: https://contributor-covenant.org 'A Code of Conduct for Open Source Communities'
[3]: https://editorconfig.org 'EditorConfig'
[4]: https://github.com/RichardLitt/standard-readme 'Standard Readme'
[5]: https://git-scm.com 'Git'
[6]: https://asdf-vm.com 'ASDF'
[7]: https://direnv.net 'Direnv'
[8]: https://pre-commit.com 'A framework for managing and maintaining multi-language pre-commit hooks'
[9]: https://jorisroovers.com/gitlint 'git commit message linter'
[10]: https://conventionalcommits.org 'Conventional Commits'
[11]: https://bun.sh 'Bun - A fast all-in-one JavaScript runtime'
[12]: https://youtu.be/wyQ3lWDAwzs 'How to Master Bun Api | Tutorial'
[13]: https://docker.com 'Docker - Build, Share and Run Any App, Anywhere'
