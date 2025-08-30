# Shizuku Guide
We will be using these apps during this guide:
- ZArchiver - [Play Store](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver&hl=pt_BR)
- Shizuku (of course) - [IzzyOnDroid](https://apt.izzysoft.de/fdroid/index/apk/moe.shizuku.privileged.api) - [Play Store](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api&hl=pt_BR)
- Termux (of course) - [F-Droid](https://f-droid.org/pt_BR/packages/com.termux/) (recommended) - [Play Store](https://play.google.com/store/apps/details?id=com.termux&hl=pt_BR)
# Tutorial:
::: warning
I'm not responsible for the modifications you do to YOUR device using Shizuku! The creators of all the apps that are used in this tutorial aren't, too!
:::
First, export the rish files to a directory, using Shizuku.

The rish file should be like this:
::: code-group
```[rish]
#!/system/bin/sh
BASEDIR=$(dirname "$0")
DEX="$BASEDIR"/rish_shizuku.dex

if [ ! -f "$DEX" ]; then
  echo "Cannot find $DEX, please check the tutorial in Shizuku app"
  exit 1
fi

if [ $(getprop ro.build.version.sdk) -ge 34 ]; then
  if [ -w $DEX ]; then
    echo "On Android 14+, app_process cannot load writable dex."
    echo "Attempting to remove the write permission..."
    chmod 400 $DEX
  fi
  if [ -w $DEX ]; then
    echo "Cannot remove the write permission of $DEX."
    echo "You can copy to file to terminal app's private directory (/data/data/<package>, so that remove write permission is possible"
    exit 1
  fi
fi

# Replace "PKG" with the application id of your terminal app
[ -z "$RISH_APPLICATION_ID" ] && export RISH_APPLICATION_ID="PKG"
/system/bin/app_process -Djava.class.path="$DEX" /system/bin --nice-name=rish rikka.shizuku.shell.ShizukuShellLoader "$@"
```
:::

You need to edit it with ZArchiver Text so the line before the last should be like this:

::: code-group
```[rish]
[ -z "$RISH_APPLICATION_ID" ] && export RISH_APPLICATION_ID="com.termux"
```
:::

Edited it? Great, now let´s make it possible for termux to access it.

Move your rish folder to Downloads.

Give Termux storage permissions, and then run this in termux:
::: code-group
```sh[run this:]
termux-setup-storage
```
:::

Did it? Great, now let´s move the actual folder to termux´s home folder.

Go to /storage/downloads in termux, then run:
::: code-group
```sh[run this:]
mv *insert your rish folder name here* ~/.rish
```
:::
Done it? Great, now you can go to ~/.rish or use cd .rish on the ~ folder, and use sh rish.
# Optional: Add Rish to the Path
If you want, you could add rish to the path to make it possible to use rish without going to the .rish folder.
First, use this command:
::: code-group
```sh[.bashrc]
nano $PREFIX/etc/bash.bashrc
```
:::

If it fails, you could try installing nano with pkg install nano.
Go to the end, and enter this:
::: code-group
```nano[export PATH]
export PATH=$PATH:~/.rish
```
:::

Now you can run rish anywhere using rish.
