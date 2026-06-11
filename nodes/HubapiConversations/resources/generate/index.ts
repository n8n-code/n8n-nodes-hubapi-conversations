import type { INodeProperties } from 'n8n-workflow';

export const generateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					]
				}
			},
			"options": [
				{
					"name": "Post Visitor Identification v3 Tokens Create Generate Token",
					"value": "Post Visitor Identification v3 Tokens Create Generate Token",
					"action": "Generate a token",
					"description": "Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conversations/v3/visitor-identification/tokens/create"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /conversations/v3/visitor-identification/tokens/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email of the visitor that you wish to identify",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"description": "The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"description": "The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"Post Visitor Identification v3 Tokens Create Generate Token"
					]
				}
			}
		},
];
