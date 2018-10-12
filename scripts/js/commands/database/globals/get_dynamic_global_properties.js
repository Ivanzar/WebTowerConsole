define(['viz'], function (viz) {
    return {
        exec: function (args, obj)
        {
            viz.api.getDynamicGlobalProperties(function (err, res)
            {
                obj.logic(err, res);
            });
        },
        apiName: 'get_dynamic_global_properties'
    };
});