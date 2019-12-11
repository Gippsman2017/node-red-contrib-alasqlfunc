module.exports = function (RED) {
    var alasql = require('alasql-nr');

    function AlasqlFuncNodeIn(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.query = config.query;
        node.on("input", function (msg) {
            var sql = msg.query||node.query;
            var bind = Array.isArray(msg.payload) ? msg.payload : [msg.payload];
            alasql.promise(sql, [bind])
                .then(function (res) {
                    msg.payload = res;
                    node.status({fill: "green", shape: "dot", text: ' Records: ' + msg.payload.length});
                    node.send(msg);
                }).catch((err) => {
                node.error(err, msg);
            });
        });
        this.on('close', () => {
            node.status({});
        });
    }

    RED.nodes.registerType("alasqlfunc", AlasqlFuncNodeIn);
};
