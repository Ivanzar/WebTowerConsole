define(['viz'], function (viz) {
    return {
        exec: function (args, obj)
        {
            viz.api.getChainProperties(function (err, res)
            {
                obj.logic(err, res);
            });
        },
        apiName: 'get_chain_properties'
    };
});