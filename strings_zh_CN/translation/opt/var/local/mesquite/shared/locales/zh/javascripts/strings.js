/**
 * strings.js
 *
 * Copyright (c) 2012 Amazon Technologies, Inc.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL
 *
 * Use is subject to license terms.
 */

/**
 * Module provides strings for Mesquite applications.  Individual applications
 * can add to this as needed by creating a module that modifies the strings
 * namespace.
 */
Kindle.add('strings', function (sandbox) {
    /**
     * Reference to strings namespace added to sandbox
     * @namespace
     */
    var strings = Kindle.addNamespace('strings', sandbox);

    // Strings added below.  These should be localized.

    /**
     * Error messages
     * @public
     * @namespace
     */
    strings.errors = {
        noConnection: '您的 Kindle 目前无法连接到网络。<br><br>请稍后重试。'
    };

    /**
     * Page or dialog titles
     * @public
     * @namespace
     */
    strings.titles = {
        noConnection: '无法连接',
        wirelessOff: '需要网络连接',
        mainMenu: '菜单'
    };

    /**
     * Button labels
     * @public
     * @namespace
     */
    strings.buttons = {
        close: '关闭',
        cancel: '取消',
        remove: '删除',
        edit: '编辑',
        ok: '确定'
    };

    /**
     * Common menu items
     * @public
     * @namespace
     */
    strings.items = {
        turnWirelessOff: '关闭无线连接',
        turnWirelessOn: '打开无线连接',
        shopInStore: '从 Kindle 商店选购',
        screenLight: '屏幕亮度 '
    };
});
