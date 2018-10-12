define(['viz'], function (viz) {
    return {
        exec: function (args, obj)
        {
            viz.api.getNextScheduledHardfork(function (err, res)
            {
                obj.logic(err, res);
            });
        },
        apiName: 'get_next_scheduled_hardfork'
    };
});