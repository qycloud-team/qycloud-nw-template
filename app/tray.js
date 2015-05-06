$(function () {
    var gui = require('nw.gui');
    var win = gui.Window.get();

// Create a tray icon
    var tray = new gui.Tray({
        title: '燕麦同步盘',
        tooltip: '燕麦同步盘',
        icon: 'image/icons/paper-plane_41e01a_32.png'
    });
    tray.on('click', function () {
        console.log("click tray!");
        tray.on('click', function () {
            win.show();
        });
    });
    window.tray = tray;

// Give it a menu
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({
        type: 'normal',
        label: '打开同步文件夹',
        icon: 'image/icons/folder-open_41e01a_32.png',
        click: function () {
            gui.Shell.showItemInFolder("D:\\tmp\\");
        }
    }));
    menu.append(new gui.MenuItem({
        label: '打开云盘网页版',
        icon: 'image/icons/cloud-download_41e01a_32.png',
        click: function () {
            gui.Shell.openExternal('http://192.168.1.55');
        }
    }));
    menu.append(new gui.MenuItem({label: '打开回收站'}));
    menu.append(new gui.MenuItem({type: 'separator'}));

    menu.append(new gui.MenuItem({label: '查看同步状态'}));
    menu.append(new gui.MenuItem({label: '立即同步'}));
    menu.append(new gui.MenuItem({label: '恢复同步'}));
    menu.append(new gui.MenuItem({type: 'separator'}));

    menu.append(new gui.MenuItem({label: '设置'}));
    menu.append(new gui.MenuItem({label: '检查更新'}));
    menu.append(new gui.MenuItem({label: '帮助'}));
    menu.append(new gui.MenuItem({type: 'separator'}));

    menu.append(new gui.MenuItem({label: '退出'}));
    tray.menu = menu;
});