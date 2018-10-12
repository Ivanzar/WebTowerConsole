define(['commands/database/globals/get_dynamic_global_properties',
    'commands/database/globals/get_config',
    'commands/database/globals/get_chain_properties',
    'commands/database/globals/get_hardfork_version',
    'commands/database/globals/get_next_scheduled_hardfork'],
        function (GetDynamicGlobalProperties,
        GetConfig, 
        GetChainProperties,
        GetHardforkVersion,
        GetNextScheduledHardfork)
        {

            var cmdList = [];

            cmdList[GetDynamicGlobalProperties.apiName] = GetDynamicGlobalProperties;
            cmdList[GetConfig.apiName] = GetConfig;
            cmdList[GetChainProperties.apiName] = GetChainProperties;
            cmdList[GetHardforkVersion.apiName] = GetHardforkVersion;
            cmdList[GetNextScheduledHardfork.apiName] = GetNextScheduledHardfork;

            return {

                commandList:cmdList
            };
        });