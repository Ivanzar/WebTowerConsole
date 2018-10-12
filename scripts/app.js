require.config({
    baseUrl:'scripts/js',
    paths:{
        lib:'../libs',
        jquery:'../libs/jquery.min',
        jquery_ui:'../libs/jquery-ui.min',
        viz:'../libs/viz'
    },
    shim:{
        viz:{
            exports:'viz'
        }
    }
});
require(['jquery', 'commands/command_manager', 'jquery_ui'],
        function ($, commandManager)
        {
            var cmds = [];
            for (let key in commandManager.commandList)
            {
                cmds.push(key);
            }

            $('#c_input').autocomplete({
                source:cmds,
                position:{my:'right bottom', at:'right top'}
            });
            $(document).ready(function ()
            {
                $('#c_button').on('click', function ()
                {
                    let cmdArgs = $('#c_input').val().split(' ');
                    let api = cmdArgs[0];
                    cmdArgs.splice(0, 1);
                    console.log(cmdArgs);

                    commandManager.commandList[api].exec(cmdArgs, {
                        logic:function (err, res)
                        {
                            var str = '';
                            var errRes = false;

                            if (!err)
                            {
                                str = JSON.stringify(res, null, 2);
                            } else
                            {
                                str = JSON.stringify(err, null, 2);
                                errRes = true;
                            }

                            this.render(errRes, str);
                        },
                        render:function (err, str)
                        {
                            if (err)
                            {
                                logger.err(str);
                            } else
                            {
                                logger.info(str);
                            }
                        }
                    });
                });
            });
            var logger = {
                outId:'c_out',
                err:function (str)
                {
                    var res = '<pre style="color: #e64a19">Error: ' + str + '</pre>';
                    $('#' + this.outId).append(res);
                },
                warn:function (str)
                {
                    var res = '<pre style="color: #ffa000">Warn: ' + str + '</pre>';
                    $('#' + this.outId).append(res);
                },
                info:function (str)
                {
                    var res = '<pre>Info: ' + str + '</pre>';
                    $('#' + this.outId).append(res);
                }
            };
        }
);