'use strict';

export default function(context) {
    context.listeners = [];

    context.notify = function() {
        this.listeners.slice().forEach(function(listener) {
            listener.fn.apply(listener.context);
        });
    };

    context.onChange = function(listener, context) {
        this.listeners.push({
            fn: listener,
            context: context || this
        });
    };
    
    context.offChange = function(listener) {
        for(let i = 0; i < this.listeners.length; i++) {
            if(this.listeners[i].fn === listener) {
                this.listeners.splice(i, 1);
                break;
            }
        }
    };
    return context;
}
