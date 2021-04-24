/*
 * @Author: LiAo
 * @Date: 2020-10-24 15:56:46
 * @LastEditors: LiAo
 * @LastEditTime: 2020-10-24 16:44:54
 * @FilePath: \first-app\src\emitter\index.js
 */
class Emitter {
    constructor() {
        this.eventMap = {}
    }

    // 订阅事件
    on(type, handler) {
        if (Object.prototype.toString.call(handler).indexOf('Function') < 0) {
            console.error('请传入一个function！');
            return;
        }
        if (!this.eventMap[type]) {
            this.eventMap[type] = [];
        }

        this.eventMap[type].push(handler);
    }

    // 删除事件
    off(type, handler) {
        if (this.eventMap[type]) {
            this.eventMap[type].splice(this.eventMap[type].indexOf(handler), 1);
        }
    }

    // 触发事件
    emit(type, params) {
        if (this.eventMap[type]) {
            this.eventMap[type].forEach((handler, index) => {
                handler(params);
            });
        }
    }
}

export default Emitter;