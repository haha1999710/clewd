/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "sessionKey=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; activitySessionId=816db535-7809-4b76-bc70-9e4dcf8b6a1e; __cf_bm=zjKG5jNtDPgTQc3o0tiuJo9WZkXfBswHlTNWJakTBJY-1702805068-1-AWze8NwYNToJ8zuEaGOP6ZJAjqzV4GykWdcx3XXGkCss8TXz0iShazvpXz9yDB44cW7pv4TxXpwsM2Nh7AxEcQM=; cf_clearance=drejlFT58P_Bk_3PpQnPSS4KyMNKz6YpBYBbSni8CUw-1702805069-0-1-14394b37.d93e13c5.433814d7-0.2.1702805069; __stripe_sid=1d03e22f-010e-4232-a5a5-0f7dd4f5acfa8564d4; intercom-session-lupk8zyo=QjlEcTl2TnVVL0FjQmEyUDdtblcvampBR1lqSmZ4bXJkRVcwK2ZUbytXUzAwRDM3MVRPRStIc3N4cEg4b1JBYy0tTVc5aHZheXRCdWRscktMMS9TU09BUT09--4c5c23625936e1b8cec863be9f86664b20c3ebc6",
    "CookieArray": [],
    "Cookiecounter": 3,
    "CookieIndex": 0,
    "ProxyPassword": "",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "https://claude.ai",
    "api_rProxy": "",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */