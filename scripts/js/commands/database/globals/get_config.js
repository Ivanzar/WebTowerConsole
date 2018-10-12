define(['viz'], function (viz) {
    return {
        exec: function (args, obj)
        {
            viz.api.getConfig(function (err, res)
            {
                obj.logic(err, res);
            });
        },
        apiName: 'get_config'
    };
});