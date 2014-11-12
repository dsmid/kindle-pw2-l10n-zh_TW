/*
 * strings.js
 *
 * Copyright (c) 2011 Amazon Technologies, Inc. All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL
 *
 * Use is subject to license terms.
 */

var AdResources = (function() {
    /**
     * Object for all of our strings. The intention is so we can localize in the future.
     */
    var strings = {
           menu: {
            viewSpecialOffers: '查看特惠信息'
        },

        dialogs: {          
            standardClose: "关闭",
            purchaseGeneralServerError_title: "错误",
            purchaseGeneralServerError_msg: "出现技术问题，购买无法完成。请稍后重试。",
            purchaseGeneralDeviceError_title: "错误",
            purchaseGeneralDeviceError_msg: "无法处理您的请求，请稍后重试。",
            purchaseLimit_title: "已达到购买上限",
            purchaseLimit_msg: "购买无法完成，您已达到最大购买数量。",
            purchaseExpiredOffer_title: "特惠已过期",
            purchaseExpiredOffer_msg: "购买无法完成，该特惠已过期。",
            purchaseLocked_title: "购买功能已锁定",
            purchaseLocked_msg: "您的 Kindle 已启用家长监护，购买功能已锁定。",
            adDetailsError_msg: "该广告详情已不可用，请打开无线连接以接收最新内容。",
            adDetailsConnectedError_msg: "该广告详情已不再可用。",
            deviceUnregistered_title: "设备尚未注册",
            deviceUnregistered_msg: "您必须注册您的 Kindle 才能完成购买。",
            pendingPurchaseInfo_msg: "您已就此特惠商品下了 {count} 笔待处理订单。",
        },

        templates: {
            offlineThankYouTemplate: {
                docTitle: '感谢您的订单',
                title: '{customerName}，很快就好。',
                subtitle: '我们会在您连接到无线网络后为您下订单。',
                message: '请在接下来 {purchaseDaysRemaining} 天内连接到无线网络以完成您的 AmazonLocal 订单。待您的订单处理完毕后，我们会将凭证发送到您的【主页】，并向您发送电子邮箱通知。该凭证会包含兑现特惠的详细说明。',
                pendingLinkText: '您还有其他待处理订单，点击此处查看',
                viewAllOffersLinkText: '查看全部特惠信息',
                cancelLinkText: '意外购买？取消该订单'
            },
            offlineCancelConfirmTemplate: {
                docTitle: '订单已取消',
                title: '订单已取消',
                message: '您的{dealTitle}订单已取消（销售方：{merchantName}）。您的信用卡未被扣款。',
                viewAllOffersLinkText: '查看全部特惠信息'
            },
            backupDetailsTemplate: {
                docTitle: '特惠',
                registeredMessage: '请启用无线连接以下载最新的特惠信息。新的优惠会第一时间自动显示。',
                unRegisteredMessage: '请注册您的 Kindle 以接收最新的特惠信息。新的优惠会在第一时间自动显示。'
            }
        }
	
	};
    
    // AdResources public interface
    return {
        strings: strings
    };

} ()); // end AdResources
