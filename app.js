
const express = require('express')
const app = express();

let courses = [
    {
        "id": 77,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "List Manager Parent",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 1,
        "dashboard": {
            "id": 223,
            "createdTimestamp": 1424448463000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1459734786333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "List Manager Parent",
            "description": "bikbik usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "464,465,467,470,461,462,463,457,198,474,476,265,459,456,650",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "259,399,433,152,383,227,230,228,254,150,229,151,290,234,258,297",
                    "widthPercent": 100,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "// 2 years date range - start\nvar startDate = new Date().add(Date.YEAR, -2).getFirstDateOfMonth();\nvar dateRangeFilter = filterLookup.getFilterByParam('date_key');\nif (dateRangeFilter != null && dateRangeFilter.control.type == 'date-range') {\n    dateRangeFilter.control.minDateValue = startDate;\n    dateRangeFilter.control.startDateDateField.setMinValue(startDate);\n}\nreturn true;",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 78,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Readership Data",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 2,
        "dashboard": {
            "id": 224,
            "createdTimestamp": 1424448463000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1459734786333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Readership Data",
            "description": "bikbik usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "460,468,491,469,466,471,473,472,475,490",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1160",
                    "widthPercent": 100,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "460",
            "introductionURL": null,
            "onlineReportEvaluator": "// 2 years date range - start\nvar startDate = new Date().add(Date.YEAR, -2).getFirstDateOfMonth();\nvar dateRangeFilter = filterLookup.getFilterByParam('date_key');\nif (dateRangeFilter != null && dateRangeFilter.control.type == 'date-range') {\n    dateRangeFilter.control.minDateValue = startDate;\n    dateRangeFilter.control.startDateDateField.setMinValue(startDate);\n}\nreturn true;",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 81,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Interaction Data",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 3,
        "dashboard": {
            "id": 227,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Interaction Data",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "485,486,477,479,480,484,481,487,488,489",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1161",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "// 2 years date range - start\nvar startDate = new Date().add(Date.YEAR, -2).getFirstDateOfMonth();\nvar dateRangeFilter = filterLookup.getFilterByParam('date_key');\nif (dateRangeFilter != null && dateRangeFilter.control.type == 'date-range') {\n    dateRangeFilter.control.minDateValue = startDate;\n    dateRangeFilter.control.startDateDateField.setMinValue(startDate);\n}\nreturn true;",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 82,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Research Subscription Data",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 4,
        "dashboard": {
            "id": 228,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Research Subscription Data",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "531,530,532,534,536",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1162",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": null,
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 83,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Model Downloads",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 5,
        "dashboard": {
            "id": 232,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Model Downloads",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "560,561,562,563,564,565,566,567,568,569",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1163",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 84,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Event Attendance",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 6,
        "dashboard": {
            "id": 233,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Event Attendance",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "600,601,591,592,593,594,595,596,597,598,602",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "User Attributes",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1164",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 85,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "BL Page Tool Usage",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 7,
        "dashboard": {
            "id": 234,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "BL Page Tool Usage",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [
                {
                    "dashboardFilterIds": "631,188,211,205,204,294",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "Page Tools Filters",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                },
                {
                    "dashboardFilterIds": "625,626,627,628,629,630",
                    "widthPercent": 100,
                    "regionType": "LEFT",
                    "title": "Chart Filters",
                    "visible": true,
                    "collapsible": true,
                    "expanded": true
                }
            ],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1165",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 108,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Readership Daily Trend",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 254,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Readership Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1190",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 114,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Event Attendance Daily Trend",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 260,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Event Attendance Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1194",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 113,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Please contact DigitalAnalytics@barclays.com in case of issues",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 259,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Model Downloads Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1193",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 115,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Page Tools Daily Trend",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 261,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Page Tools Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1195,1196",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": false,
            "selectedNuggetIds": "1195,1196",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 0,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 111,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Interaction Daily Trend",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 257,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Interaction Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1191",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    },
    {
        "id": 112,
        "createdTimestamp": 1424448830000,
        "createdByUserId": "tiftikbu",
        "updatedTimestamp": null,
        "updatedByUserId": null,
        "name": "Subscription Daily Trend",
        "groupName": "UAMANAGEMENTLIST",
        "groupOrder": 12,
        "dashboard": {
            "id": 258,
            "createdTimestamp": 1645373263000,
            "createdByUserId": "tiftikbu",
            "updatedTimestamp": 1649037186333,
            "updatedByUserId": "Burak Tiftik",
            "namespaceId": "UAEXVIEW",
            "applicationId": "UAEXVIEW",
            "title": "Subscription Daily Trend",
            "description": "usage statistics are confidential in nature and are governed by Barclays' confidentiality policies and applicable regulations. There should be explicit sensitivity around using the client's usage data to prospect for clients across sectors thus jeopardizing a client's trust in using the portal.",
            "groupTitle": "UAEX",
            "groupOrder": 0,
            "filterGroups": [],
            "nuggetGroups": [
                {
                    "dashboardNuggetIds": "1192",
                    "widthPercent": 50,
                    "regionType": "CENTER"
                }
            ],
            "entitlementType": "Y",
            "entitlementResource": "namespace/bcl/uaenc",
            "entitlementParam": "view",
            "headerBackgroundURL": "/UAA/resources/images/dashboard/banner1.gif",
            "showMyReportLink": true,
            "allowReportSubscription": true,
            "allowReportTemplate": true,
            "allowHideMenu": true,
            "selectedNuggetIds": "458,459,460,891",
            "introductionURL": null,
            "onlineReportEvaluator": "",
            "frameHeight": 0,
            "cssOverrideURL": null,
            "leftRegionWidth": 320,
            "relatedlinkGroups": "UAMANAGEMENTLIST",
            "dashboardThemes": {
                "id": 3,
                "createdTimestamp": null,
                "createdByUserId": null,
                "updatedTimestamp": null,
                "updatedByUserId": null,
                "dashboardCss": ".x-tree-node-collapsed{ display:none; } #nugget-level-filter-group{ display:none; }\r\n",
                "reportCss": ".ua-nugget input[type=\"text\"] {\r\ndisplay:none;\r\n}",
                "active": true,
                "mailHeaderImgUrl": null
            },
            "dashboardViewMode": "CUSTOM"
        },
        "params": {}
    }
]

app.get('/api/courses', (req,res)=>{  //http://localhost:3000/api/courses
    res.send(courses)
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}...`));








