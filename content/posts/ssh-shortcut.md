---
title: SSH 단축어 만들기
date: 2021-10-12
tags:
	- Tip
slug: "/ssh-shortcut"
---

### Prerequisite

- SSH
- Shell
- Vim

### 동기

iOS의 `Blink`앱에서는 서버 host 정보를 미리 저장하여 `ssh hostname`식으로 입력하여 서버에 접속 가능하다. 

맥 터미널을 이용할 경우, 매번 `ssh user@host`를 입력해야하는 번거로움이 있었다. 물론 `zsh`의 `alias` 기능을 통해 간단하게 입력하여 접속이 가능했지만, 서버가 여러개일 경우 매번 alias를 만드는 것도 여간 귀찮은 작업이었다. 

그래서 맥이나 리눅스의 경우도 그런 단축 기능을 제공하지 않을까 해서 검색해봤는데 있다! 그래서 이번에 어떻게 할 수 있는지 알아보려고 한다.

### SSH Config 이용하기

Mac이나 Linux 같은 UNIX 계열 OS에는 기본적으로 SSH 단축어 기능을 가지고 있다. ~~Mac을 사야하는 또 다른 이유 ++~~

방법은 매우 간단하다.

`~/.ssh/config` 파일에 단축어를 만들면 된다. 아래 명령어를 입력해주자.

```bash
vi ~/.ssh/config
```

[공식 문서](http://man.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man5/ssh_config.5?query=ssh_config&sec=5)를 보면 더 자세히 알 수 있다. 아래는 어떻게 단축어를 만드는 지에 대한 예시이다.

```
Host example
	Hostname 192.168.0.1
	User hello
```

- **Host**: 단축어로 지정할 단어
- **Hostname**: 호스트 주소(서버 주소)
- **User**: 사용자 계정 이름

위의 예시와 같이 만들어준 다음, 아래와 같은 명령어를 통해 쉽게 서버에 접속 가능하다.

```bash
ssh example
```

혹시나 작동이 안된다면, 권한을 변경해보라고 한다.

```bash
chmod 600 ~/.ssh/config
```

<br/>

> **Reference**
>
> [https://www.better.dev/how-to-create-an-ssh-shortcut](https://www.better.dev/how-to-create-an-ssh-shortcut)