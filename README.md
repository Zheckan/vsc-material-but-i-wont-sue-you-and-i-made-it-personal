
# Material Theme (But I won't sue you) and I made my own theme (:


> **Note:** The original Material Theme has been removed from the marketplace due to [distributing malware through their extensions](https://news.ycombinator.com/item?id=43181591). This fork has been thoroughly audited and is completely safe to use. I have personally audited every line, and removed a TON of unnecessary stuff to be sure. The VS Code team is auditing it as well just to be extra safe.

So, uh, the guy who made the VS Code Material Theme is threatening everyone who uses it in their products. He [seems to have forgotten it was originally licensed under the Apache License, 2.0.](https://github.com/Dramaga11/vsc-material-theme/blob/main/LICENSE). He wiped the commit history to make it look like it was always his weird fake license. Check out my [blog post for more info](https://t3.gg/blog/post/equinusocio).

What he has done is fraudulent and shameful. I have created this fork to maintain the original license and keep the project alive.

I permit you to do whatever you want with this code as long as it follows the original license. I won't sue you for it. I promise.

Sources:
- [Attack on Zed post](https://dev.to/equinusocio/you-should-avoid-zed-editor-59n1) ([archive](https://archive.ph/PlljZ))
- [Github Discussions attack on Zed](https://github.com/zed-industries/extensions/issues/1645) ([archive](https://archive.ph/5hZyK))
- [Attack on Package Control (Sublime Text) post](https://dev.to/equinusocio/why-you-should-avoid-sublime-text-2c73) ([archive](https://archive.ph/IlN6D))

## Table of contents

The most epic theme meets Visual Studio Code.

- [Material Theme (But I won't sue you) and I made my own theme (:](#material-theme-but-i-wont-sue-you-and-i-made-my-own-theme-)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Installation](#installation)
  - [Activate theme](#activate-theme)
  - [Set the accent color](#set-the-accent-color)
  - [Override theme colors](#override-theme-colors)
  - [Recommended settings for a better experience](#recommended-settings-for-a-better-experience)
  - [Attribution](#attribution)


## Getting started

You can install this awesome theme through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=t3dotgg.vsc-material-theme-but-i-wont-sue-you). <a href="https://marketplace.visualstudio.com/items?itemName=t3dotgg.vsc-material-theme-but-i-wont-sue-you"><img src="https://img.shields.io/badge/marketplace-gray.svg?colorA=655BE1&colorB=4F44D6&style=flat-square"/></a>

### Installation

Launch *Quick Open*:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install t3dotgg.vsc-material-theme-but-i-wont-sue-you
```

And pick the one by **Theo (t3dotgg)** as author.

## Activate theme

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `theme`, choose `Preferences: Color Theme`, and select one of the Material Theme variants from the list. After activation, the theme will set the correct icon theme based on your active theme variant.


## Set the accent color

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `material theme`, choose `Material Theme: Set accent color`, and pick one color from the list.

## Override theme colors

Learn how to customize every part of this theme by using Visual Studio Code API. [Read more.](https://github.com/material-theme/vsc-material-theme/discussions/1274)

## Recommended settings for a better experience

```js
{
    // Controls the line height. Use 0 to compute the lineHeight from the fontSize.
    "editor.lineHeight": 28,
    // Enables font ligatures
    "editor.fontLigatures": "'ss01','ss05','dlig'",
    // Controls if file decorations should use badges.
    "explorer.decorations.badges": false
}
```

## Attribution

The code in this project was [previously hosted at this url](https://github.com/material-theme/vsc-material-theme), but the original author has wiped all history of it, making it incredibly hard to credit him and the other original contributors. Full credit has been preserved in the git history here to our best ability.
