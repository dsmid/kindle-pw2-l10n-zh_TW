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
 * Module adds browser strings to the default Mesquite strings pre-added
 * to the b (browser) namespace.
 *
 * This file should have localized versions.
 */
Kindle.add('browserStrings', function (b) {
    /**
     * Object with browser strings
     */
    var browserStrings = {
        /**
         * Browser error messages
         */
        errors: {
            badProtocol: '网页浏览器无法通过本协议下载文件。只支持 HTTP 和 HTTPS 协议。',
            downloadFailed: '网页浏览器无法下载{filename}，请稍后重试。',
            downloadRejected: '网页浏览器无法下载此类文件。<p>只能下载扩展名为 .AZW, .PRC, .MOBI 或 .TXT 的文件到您的 Kindle。</p>',
            uploadRejected: '网页浏览器不支持文件上传。',
            register: '要启用浏览功能，您必须先将您的 Kindle 注册至您的亚马逊帐户。',
            confirmSsl: '网页浏览器无法建立安全连接。是否继续？',
            blockedDomain: '网页浏览器需要 WiFi 连接。点击【确定】以建立 WiFi 连接。',
            noAccess: '抱歉，浏览器无法打开该网站。',
            accountError: '您的 Kindle 帐户出错，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
            systemFailure: '遇到技术问题，请稍后重试。',
            remoteFailure: '抱歉，浏览器目前无法打开该网站。请稍后重试。',
            accessEmbargo: '由于地区限制，网页浏览功能并不适用于所有国家/地区。',
            appInvalid: '抱歉，该应用程序无效。',
            roamingBlocked: '抱歉，漫游已禁用。',
            deviceBlocked: '抱歉，设备已锁定。',
            appBlocked: '抱歉，该应用程序已锁定。',
            quotaExceeded: '抱歉，该应用程序已超出配额。',
            accessBlocked: '抱歉，〖Whispersync〗访问已锁定。'
        },

        /**
         * Browser page and dialog titles
         */
        titles: {
            bookmarks: '书签',
            editBookmark: '编辑书签',
            removeBookmark: '删除书签',
            history: '历史记录',
            settings: '设置',
            search: '搜索',
            downloadFile: '下载文件',
            downloadFailed: '下载失败',
            downloadRejected: '文件类型无效',
            badProtocol: '协议无效',
            uploadFile: '上传文件',
            register: '需要注册',
            confirmSsl: '证书无效',
            duplicateBookmark: '书签重复',
            blockedDomain: '需要 WiFi 连接',
            httpError: '网站无法访问'
        },

        /**
         * Browser menu item labels
         */
        items: {
            articleMode: '文章模式',
            webMode: '网页模式',
            bookmarks: '书签',
            bookmarkPage: '为本页加书签',
            history: '历史记录',
            settings: '浏览器设置',
            clearHistory: '清除历史记录',
            clearCookies: '清除 Cookies',
            enableJavascript: '启用 JavaScript',
            disableJavascript: '禁用 JavaScript',
            enableImages: '启用图片',
            disableImages: '禁用图片',
            todayFormat: '今天（{date}）',
            yesterdayFormat: '昨天（{date}）'
        },

        /**
         * Browser messages that are not errors
         */
        messages: {
            downloadConfirm: '下载{filename}？<br><br>文件下载完毕后会在【主页】显示。是否确定继续？',
            downloadSuccess: '网页浏览器已成功下载{filename}。',
            duplicateBookmark: '相同 URL 的另一页面已添加至书签。<br><br>是否覆盖？'
        },

        /**
         * Default Bookmarks.  Browser loads these when first run and stores
         * them in local storage.
         */
        defaultBookmarks: [
            {
                name: '亚马逊（中国）',
                url: 'www.amazon.cn'
            },
            {
                name: '亚马逊（全球）',
                url: 'www.amazon.com'
            },
            {
                name: '百度',
                url: 'www.baidu.com'
            },
            {
                name: '豆瓣',
                url: 'www.douban.com'
            },
            {
                name: '新浪',
                url: 'www.sina.com.cn'
            },
            {
                name: '新浪微博',
                url: 'www.weibo.com'
            },
            {
                name: 'QQ',
                url: 'www.qq.com'
            },
            {
                name: 'Outlook',
                url: 'www.outlook.com'
            },
            {
                name: 'Gmail',
                url: 'www.gmail.com'
            },
            {
                name: '人人网',
                url: 'http://www.renren.com/'
            },
            {
                name: '开心网',
                url: 'www.kaixin001.com'
            }
        ],

        /**
         * Actions available to browser's go function
         */
        goActions: {
            website: {
                label: '网页',
                description: '网址'
            },
            google: {
                label: '豆瓣',
                description: '豆瓣',
                url: 'http://www.google.com.hk/search?q='
            }
        }
    };

    /**
     * Merge with strings object
     */
    b.strings = b.object.extend(browserStrings, b.strings);
},
// preload modules
['strings', 'object']);
