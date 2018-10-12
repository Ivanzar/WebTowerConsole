define(['viz'], function (viz)
{
    return {
        exec:function (args, obj)
        {
            viz.api.getHardforkVersion(function (err, res)
            {
                obj.logic(err, res);
            });
        },
        apiName:'get_hardfork_version'
    };
});