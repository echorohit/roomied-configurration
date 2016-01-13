'use strict';

const Boom = require('boom');
let MessageModel = require('../../models/Messages');

exports = module.exports = function MessageController(database){
    this.messageModel = MessageModel;

};


//Get Messages

MessageController.prototype.index = function(request, reply){
    let start = request.query.start;
    let limit = request.query.limit;

    if(start === null) {
        start = 0;
    }

    if(limit === null) {
        limit = start + 9;
    }
    reply(this.messageModel.getMessages(start, limit));
};

MessageController.prototype.show = function(request, reply){
    try {
        let id = request.param.id;
        reply(this.messageModel.getMessage(id));
    } catch(e){
        reply(Boom.notFound(e.message));
    }
};

MessageController.prototype.store = function(request, reply){
    try {
        let payLoad = request.payload;
        reply(this.messageModel.addMessage(payLoad))
            .created();
    } catch(e){
        reply(Boom.badRequest(e.message));
    }
};



MessageController.prototype.update = function(request, reply){

    try {
        let id = request.param.id;
        let payLoad = request.payload;
        reply(this.messageModel.updateMessage(id, payLoad));
    } catch(e){
        reply(Boom.notFound(e.message));
    }
};


MessageController.prototype.destroy = function(request, reply){

    try {
        let id = request.param.id;
        this.messageModel.destroyMessage(id)
        reply().code(204);
    } catch(e){
        reply(Boom.notFound(e.message));
    }
};





